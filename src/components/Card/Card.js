import React, {useState } from 'react'
import Modal from '../Modal/Modal'
import './Card.scss'
import  ReactDOM  from 'react-dom'

function Card({note}) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [showImg, setShowImg] = useState('')

  function handleModal(img){
    setShowImg(img)
    setIsModalVisible(true)
  }  

  const portal = document.getElementById('portal')

  return ( 
    <div className="container-anotacao">
      {isModalVisible 
      ? ReactDOM.createPortal
      (<Modal
        showImg={showImg}
        closeModal={() => setIsModalVisible(false)}/>
        , portal) 
          :  ''}
      <h2><i className="fa fa-pencil"></i>Anotação</h2>
      <div className="image-row">
         {note.attachments.images.length > 0 ? note.attachments.images.map((img) => (
             <img key={img.id} src={img.thumb_url} alt="img2" onClick={() => handleModal(img.medium_url)}  />
         )) : ''}
      </div>
      <p>{note.description}</p>
    </div>
    )
}

export default Card

