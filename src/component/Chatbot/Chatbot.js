import React, { useState } from "react";
import "./chatbot.css";
import Groq from 'groq-sdk';
import chtbot from "./chtbot.jpg";

const groq = new Groq({
  apiKey: process.env.REACT_APP_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});


const ChatbotPopup = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);


  const handlesend = async () =>{
    if(input.trim() === '') return;

    setMessages((prev) => [...prev,{text:input,sender:"user"}]);
    setInput("");

    try{
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: 'user',
            content: input,
          },
        ],
        model: 'llama3-8b-8192',
      });

      const responseContent =
      chatCompletion.choices[0]?.message?.content || 'No response';

      setMessages((prev) => [...prev,{text: responseContent,sender: "bot"}]);

    }catch(err) {
      console.err("Error in detecting the chatbot",err);
      setMessages((prev) => [
        ...prev,
        {text:"Error Unable to fetch the message",sender:"bot"},
      ])
    }
  }
  return (
    <div className="chatbot-container">
      <button className="toggle-btn" onClick={() => setOpen(!open)}>
      <img 
    src={chtbot}
    alt="Chat" 
    className="imageclass"
  />
      </button>

      { open && (
        <div className="chat-box">
          <h2>Ask Me Anything</h2>
          <div className="chat-messages">
          {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender.toLowerCase()}`}>
                <strong>{msg.sender}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            
            <button className="send-btn" onClick={handlesend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotPopup;
