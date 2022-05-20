import React from 'react'
import Aside from '../Aside/Aside'
import HeaderTalhao from '../HeaderTalhao/HeaderTalhao'
import './Main.scss'
import Card from '../Card/Card'

function Main({notesData, plantationData, dataFarm, dataRain}) {

  const notesFarmType = []
  const notesPlantationType = []
  
  notesData.results.filter((el) => {
    if(el.location_type === 'Farm'){
      notesFarmType.push(el)
    }
    else if (el.location_type === 'Plantation'){
      notesPlantationType.push(el)
    }
    return '' // Só botei isso pro eslint parar de reclamar chatão ele
  })
  
  return (
    <div id="main">
          <div id='mainWrapper'>
              <Aside dataFarm={dataFarm} dataRain={dataRain} />
              <div className="main-cards-wrapper">
              <h2 className="outside-title">Anotações da fazenda</h2>
              <div className='card-row'>
                {notesFarmType.map((note) => (
                  <Card 
                    key={note.id}
                    note={note} />
                  ))}
              </div>
                <h2 className='outside-title-talhao'>Evento dos talhões</h2>
                {plantationData.results.map((el, index) => (
                  <HeaderTalhao 
                    key={el.id} 
                    el={el}
                    notesPlantationType={notesPlantationType} 
                    index={index}/>
                  ))}
              </div>
          </div>
      </div>
  )
}

export default Main