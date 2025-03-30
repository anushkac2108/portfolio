import React, { useState } from "react"
import github from "../pic/github.png"

const Card = (props) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      <div className='box btn_shadow '>
        {/* <div className='img'>
          <img src={props.image} alt='' onClick={toggleModal} />
        </div> */}
        <div className='category d_flex'>
          <span onClick={toggleModal} className="gitspan">{props.category}
          <a href={props.Link} className='github'>
              <img src={github} alt="github"  />
          </a>
          </span>
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title}</h2>
          {/* <a href='#popup' className='arrow' onClick={toggleModal}>
            <i class='fas fa-arrow-right'></i>
          </a> */}
        </div>
          <p className="dis">{props.disc}</p>
      </div>

      {/* Popup box */}
      {/* {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content d_flex'>
            <div className='modal-img left'>
              <img src={props.image} alt='' />
            </div>
            <div className='modal-text right'>
              <span>Featured - Design</span>
              <h1>{props.title}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
              <p>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
              <div className='button f_flex mtop'>
                <button className='btn_shadow'>
                  LIKE THIS <i class='far fa-thumbs-up'></i>
                </button>
                <button className='btn_shadow'>
                  VIEW PROJECT<i class='fas fa-chevron-right'></i>
                </button>
              </div>
              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i class='fas fa-times'></i>
              </button>
            </div> */}
          {/* </div> */}
        {/* </div> */}
      {/* )} */}
    </>
  )
}

export default Card
