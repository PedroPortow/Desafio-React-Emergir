import React, { useContext } from 'react'
import { DataContext } from '../../Context/DataContext'
import Card from '../Card/Card'
import './HeaderTalhao.scss'

function HeaderTalhao({el, index, plantId}) {
    const {notesData} = useContext(DataContext) 
    // const [data, setData] = useState()
    // console.log(notesData)
    if(!notesData) return

    console.log(notesData)
    const notesFarm = notesData.results.filter((el) => {
      if(el.location_type === 'Plantation') return el
    })

    

    // let arrIds = [...notesFarm.map((notes) => {
    //     return notes.location.id
    // })]
    
    // console.log(arrIds)
    // console.log(notesFarm)
  
    // console.log('dale', index)
    

  return (
    <>
    <div className="container-100w" index={index}>
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
        <i className="fa-solid fa-angle-up" />
        </div>
    </div> 
   {
   plantId === el.id
   ? 
   (<div className='card-row'>
        {notesFarm.map((note, index) => (
            <Card 
            index = {index}
            key={note.id}
            note={note} />
          ))}
    </div>) 
    :
    
    ''}
    </>
  )
}

export default HeaderTalhao