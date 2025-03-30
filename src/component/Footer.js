import React from "react"
import img3 from "./pic/img3.jpg"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            <img src={img3} alt='' className="logo" />
          </div>
          <p>© 2025. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
