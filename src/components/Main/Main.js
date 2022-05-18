import React, { useContext } from 'react'
import { DataContext } from '../../Context/DataContext'
import Aside from '../Aside/Aside'
import CardWrapper from '../CardWrapper/CardWrapper'
import HeaderTalhao from '../HeaderTalhao/HeaderTalhao'
import './Main.scss'

function Main() {
  const {plantationData} = useContext(DataContext)
  // console.log(plantationData)
  if(!plantationData) return


  return (
    <div id="main">
        <div id='mainWrapper'>
            <Aside />
            <div className="main-cards-wrapper">
            <h2 className="outside-title">Anotações da fazenda</h2>
              <CardWrapper />
              <h2 className='outside-title-talhao'>Evento dos talhões</h2>
              {/*TALHAO header*/}
              {/* <HeaderTalhao /> */}
              {plantationData.results.map((el, index) => (
                <HeaderTalhao key={el.id} el={el} index={index} plantId={el.id}/>
              ))}
              
            </div>
           
        </div>
    </div>
  )
}

export default Main