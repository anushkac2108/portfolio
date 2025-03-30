import React, { useEffect, useState } from "react";
import "./chatbot.css";
import Groq from 'groq-sdk';
import chtbot from "./chtbot.jpg";
import ReactMarkdown from 'react-markdown';
import { useRef } from "react";

const groq = new Groq({
  apiKey: process.env.REACT_APP_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

const structuredPrompt = `  
You are an AI assistant designed to answer questions about my professional background, resume, skills, and experiences. You should provide structured, concise, and professional responses based on my resume details.  

## About Me:  
- **Name:** Anushka Choudhary  
- **Education:** B.Tech in Chemical Science and Technology, IIT Guwahati  
- **CPI:** 7.12  

## Projects:  
1. **ReviewRush (Dec 2024)**  
   - Developed a multi-PDF query system using **Gemini LLM** and **Pinecone cloud vector database**.  
   - Implemented **Retrieval-Augmented Generation (RAG)** for precise research literature analysis.  
   - Integrated **Conversational Memory** to enable seamless follow-up queries.  

2. **Loan Default Risk Analysis (Dec 2024)**  
   - Conducted **Exploratory Data Analysis (EDA)** on a **48,000+ loan dataset** with Pandas.  
   - Performed **univariate and bivariate analysis** to visualize key risk patterns.  
   - Developed a **Random Forest model**, achieving **91% accuracy** in predicting loan defaults.  

3. **World Population Data Analysis (June 2024)**  
   - Employed **NumPy, Pandas** for data cleaning and preprocessing.  
   - Utilized **Matplotlib & Seaborn** for data visualization and analysis.  

4. **Zee-Care (June 2024)**  
   - Built a **Medical Management System** using **Node.js, Express.js, MongoDB**.  
   - Developed **JWT authentication** for secure access.  
   - Designed a **React.js** frontend for an intuitive user experience.  

## Technical Skills:  
- **Programming & Web Development:** Python, C++, JavaScript, React.js, Node.js, MongoDB  
- **Data Science & Analysis:** NumPy, Pandas, Matplotlib, Seaborn  
- **Databases & Tools:** MySQL, Excel, Tableau, Git, GitHub  
- **Miscellaneous:** Figma, Canva  

## Positions Held:  
- **Finance & Marketing Head, Cultural Board, IIT Guwahati (April 2024 - Present)**  
  - Managed **₹30+ lakh budget** for 10+ cultural clubs and 15+ events.  
  - Handled **Inter-IIT financials** for 260+ participants.  

- **Core Team Member, Corporate Relations & Marketing, Alcheringa (April 2024 - Present)**  
  - Led 30+ executives to coordinate sponsorships.  
  - Secured **10+ company collaborations**.  

- **Core Team Member, Events, Spirit, IIT Guwahati (April 2024 - Present)**  
  - Successfully organized **Samarthya** (Inter-school sports event) with **500+ participants**.  

## Achievements & Extracurriculars: 
-**Academics:**Top 5% in ML Inter-IIT hackathon** conducted by HDFC. 
- **Sports:**  
  - Bronze medal at **National Level Kabaddi Tournament (2019)**.  
  - Gold medal **twice at State Level Kabaddi Tournament (2019)**.  
- **Academics:** Top **3% in JEE Mains** (2022).  
- **Event Management:** Secured sponsorships as **Executive, TEDxIITGuwahati (2024)**.  
- **Development:** Built **Full-stack E-commerce & Gym website (2024)**.  
- **Community Service:** Contributed **30+ hours** as an **NSS Volunteer (2024)**.  

## Response Guidelines:  
1. **Provide structured and professional answers (3-4 sentences max).**  
2. **Use bullet points** when listing skills, experiences, or projects.  
3. **For unrelated queries, respond with:**  
   - "I am designed to answer questions about my professional background. Let me know if you have resume-related queries!"  
4. **For missing details, respond with:**  
   - "I currently don’t have that information. Feel free to ask about my projects, experience, or skills!"  

## Example Queries & Responses:  
User: "What are my skills?"  
AI: "Your key skills include:  
- Web Development (React.js, Node.js, MongoDB)  
- Data Science (Pandas, NumPy, Machine Learning)  
- Database Management (SQL, Firebase)  
- Cloud & DevOps (AWS, Git, CI/CD)."  

User: "Tell me about my achievements."  
AI: "Your notable achievements include:  
- Bronze medal at **National Level Kabaddi Tournament (2019)**.  
- **Top 3% in JEE Mains (2022)**.  
- Secured sponsorships for **TEDxIITGuwahati (2024)**.  
- Developed a **full-stack E-commerce website (2024)**."

User: "Tell me a joke!"  
AI: "I am focused on professional queries. Let me know if you have any resume-related questions!"  
`;

const ChatbotPopup = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({behavior: "smooth"});
  }, [messages])

  const handlesend = async () => {
    if (input.trim() === '') return;

    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    setInput("");

    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          { role: 'system', content: structuredPrompt }, // Fine-tuning via structured prompt
          { role: 'user', content: input },
        ],
        model: 'llama3-8b-8192',
        temperature: 0.7,
      });

      const responseContent = chatCompletion.choices[0]?.message?.content || 'No response';
      setMessages((prev) => [...prev, { text: responseContent, sender: "bot" }]);

    } catch (err) {
      console.error("Error in chatbot request", err);
      setMessages((prev) => [...prev, { text: "Error: Unable to fetch response", sender: "bot" }]);
    }
  };

  return (
    <div className="chatbot-container">
      <button className="toggle-btn" onClick={() => setOpen(!open)}>
        <img src={chtbot} alt="Chat" className="imageclass" />
      </button>

      {open && (
        <div className="chat-box">
          <h2>Ask Me Anything</h2>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender.toLowerCase()}`} ref={messageEndRef}>
               <strong>{msg.sender}:</strong> <ReactMarkdown>{msg.text}</ReactMarkdown>
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === "Enter" && handlesend()}
            />
            <button className="send-btn" onClick={handlesend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotPopup;
