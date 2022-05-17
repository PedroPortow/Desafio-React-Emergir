import React from 'react'
import Aside from '../Aside/Aside'
import CardWrapper from '../CardWrapper/CardWrapper'
import './Main.scss'

function Main() {
  return (
    <div id="main">
        <div id='mainWrapper'>
            <Aside />
            <div className="main-cards-wrapper">
            <h2 className="outside-title">Anotações da fazenda</h2>
              <CardWrapper />
              <h2 className='outside-title-talhao'>Evento dos talhões</h2>
            </div>
           
        </div>
    </div>
  )
}

export default Main