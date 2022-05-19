import React from 'react'
import Card from '../Card/Card'
import './CardWrapper.scss'


function CardWrapper({notesFarmType}) {

  return (
        <div className='card-row'>
          {notesFarmType.map((note) => (
            <Card 
            key={note.id}
            note={note} />
          ))}
        </div>
  )
}

export default CardWrapper