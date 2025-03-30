import React from "react"
import "./Home.css"
import linkedin from "../pic/linkedin.png"
import insta from "../pic/insta.png"
import github from "../pic/github.png"

import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Anushka</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Coder.", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>I am a dynamic and ambitious individual currently pursuing B.Tech from the IIT Guwahati. Passionate about competitive programming and web development With a flair for debugging and a penchant for elegant solutions.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND ME</h4>
                <div className='button'>
                  <a href="https://github.com/anushka2108">
                    <button className='btn_shadow'>
                      {/* <i class='fab fa-facebook-f'></i> */}
                      <img src={github} alt="" />
                    </button>
                  </a>
                  <a href="https://www.instagram.com/anushka21_08/">
                    <button className='btn_shadow'>
                      {/* <i class='fab fa-instagram'></i> */}
                      <img src={insta} alt="" />
                    </button>
                  </a>
                  <a href="https://www.linkedin.com/in/anushka-choudhary-78a50b287">
                    <button className='btn_shadow'> 
                    <img src={linkedin} alt="LinkedIn" />
                    </button>
                  </a>
                </div>
              </div>
              <div className='col_1'>
                {/* <h4>Coding handles</h4>
                <a href="https://leetcode.com/Redfly/" target="_blank">
                  <button className='btn_shadow'>
                    <img src={skill1} alt='' />
                  </button>
                </a>
                <a href="https://www.codechef.com/users/redfly" target="_blank">
                  <button className='btn_shadow'>
                    <img src={skill2} alt='' />
                  </button>
                </a>
                <a href="https://codeforces.com/profile/Redfly" target="_blank">
                  <button className='btn_shadow'>
                    <img src={skill3} alt='' />
                  </button>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
