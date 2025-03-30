import React from "react"
import Header from "./component/Head/Header"
import Features from "./component/Features/Features"
import Home from "./component/Hero/Home"
import Portfolio from "./component/Portfolio/Portfolio"
import Resume from "./component/Resume/Resume"
// import Testimonial from "./component/Testimonial/Testimonial"
// import Blog from "./component/Blog/Blog"
import Chatbot from "./component/Chatbot/Chatbot"
import Footer from "./component/Footer"
import "./App.css"


const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
     <Chatbot /> 
      <Footer />
    </>
  )
}

export default App
