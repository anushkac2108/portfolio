import React, { useState } from "react"
import "./header.css"
import img3 from "../pic/img3.jpg"

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className="seperator">
          <span>
            <img src={img3} alt='Profile-pic' className="logo" />
          </span>
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/* <ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'> */}
              <li>
                <a href='#home'>home</a>
              </li>
              
              <li>
                <a href='#features'>features</a>
              </li>
              <li>
                <a href='#projects'>projects</a>
              </li>
              <li>
                <a href='#resume'>education</a>
              </li>
              <li>
                <a href='#contact'>contact</a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1F0DZDyx9X9tZLa1W1vFaBKRztdBNqm4c/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                   <button className='home-btn'>Resume</button>
                </a>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
