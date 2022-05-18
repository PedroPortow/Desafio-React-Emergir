import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../Context/DataContext'
import './Card.scss'

function Card({note}) {

  return ( 
  
    <div className="container-anotacao">
      <h2><i className="fa fa-pencil"></i>Anotação</h2>
      <div className="image-row">
         {note.attachments.images.length > 0 ? note.attachments.images.map((img) => (
             <img key={img.id} src={img.thumb_url} alt="img2" />
         )) : ''}
      </div>
      <p>{note.description}</p>
    </div>
    )

}

export default Card

