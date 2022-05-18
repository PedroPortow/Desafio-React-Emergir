import React, { useContext, useState, useRef} from 'react'
import { useQuery } from 'react-query'
import { DataContext } from '../../Context/DataContext'
import Card from '../Card/Card'
import './HeaderTalhao.scss'


function HeaderTalhao({el, notesPlantationType, index}) {

    const arrow = useRef()
    //Estado open ou closed
    const [active, setActive] = useState(index == 0)

    const handleOpen = () => {
      arrow.current.classList.toggle('rotateimg180')
      setActive(!active)
    }
 
 
  return (
    <React.Fragment key={el.id}>
     
        <div className="container-100w" key={el.id} >
            <div className="container-100w-first-section">
                <h2 >{el.name} <span>{el.cycle}º ciclo</span></h2>
                <p>{el.variety.name} - {el.area} Ha</p>
                <span>Plantado</span>
            </div>
            <div className="container-100w-second-section">
                <div className="row">
                    <h3>Data de plantio</h3>
                    <p>{el.date.split('-').reverse().join('/')}</p>
                </div>
                <div className="row">
                    <h3>Emergência</h3>
                    <p>{el.emergence_date ? el.emergence_date.split('-').reverse().join('/') : 'Não há data :('}</p>
                </div>
                <div className="row">
                    <h3>Colheita</h3>
                    <p>{el.harvest_prediction_date.split('-').reverse().join('/')}</p>
                </div>
            </div>
            <div className="container-100w-third-section">
            {index === 0 ? <i className="fa-solid fa-angle-up" onClick={handleOpen} ref={arrow} /> :  <i className="fa-solid fa-angle-down" onClick={handleOpen} ref={arrow} />}
            </div>
        </div>
        <div className='card-row'>
        { 
    
        notesPlantationType 
        &&
        active
        &&
        notesPlantationType.map((note) => 
        (
          note && note.location.id === el.id 
          ?
          (<Card 
          key={note.id}
          note={note} />)
          : ''
          ))
          }
        </div>
      </React.Fragment>

  )
}

export default HeaderTalhao
