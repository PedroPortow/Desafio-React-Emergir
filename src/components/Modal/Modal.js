import React from 'react'
import './Modal.scss'

function Modal({showImg, closeModal}) {
  if(!showImg) return

  return  (
    <div className='modal'>
       <div className='imgWrapper'>
            <img src={showImg} alt='imgBig' />
            <i className="fa-solid fa-circle-xmark" onClick={closeModal}></i>
       </div>
    </div>

  )
}

export default Modal