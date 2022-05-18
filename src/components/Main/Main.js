import React, { useContext } from 'react'
import { DataContext } from '../../Context/DataContext'
import Aside from '../Aside/Aside'
import CardWrapper from '../CardWrapper/CardWrapper'
import HeaderTalhao from '../HeaderTalhao/HeaderTalhao'
import './Main.scss'
import { useQuery } from 'react-query'
import FetchDataNotes from '../FetchData/DataNotes'
import FetchDataPlantation from '../FetchData/DataPlantation'
import logo from '../../images/logo-check.png'
import Loader from '../Loader/Loader'

function Main() {

  const {data: notesData, status: notesStatus} = useQuery('dataNotes', FetchDataNotes)
  const {data: plantationData, status: plantationStatus} = useQuery('dataPlantation', FetchDataPlantation)
  
  if(notesStatus === 'loading') {
    return (   
    <Loader />
)
 }
 if(notesStatus === 'error') {
    return <p>deu erro</p>
 }

  if(plantationStatus === 'loading') {
    return (   
     <Loader />
  )
 }
 if(plantationStatus === 'error') {
    return <p>deu erro</p>
 }

  const notesFarmType = notesData.results.filter((el) => {
    if(el.location_type === 'Farm') return el
  })

  const notesPlantationType = notesData.results.filter((el) => {
    if(el.location_type === 'Plantation') return el
  });

  return (
    <div id="main">
        <div id='mainWrapper'>
            <Aside />
            <div className="main-cards-wrapper">
            <h2 className="outside-title">Anotações da fazenda</h2>
              <CardWrapper notesFarmType={notesFarmType} /> {/* TEM QUE RECEBER DATA DE NOTES*/ }
              <h2 className='outside-title-talhao'>Evento dos talhões</h2>
              {/* <HeaderTalhao /> TEM QUE RECEBER DATA DE PLANTATIONS E NOTES */}
              {plantationData.results.map((el, index) => (
                <HeaderTalhao key={el.id} el={el} notesPlantationType={notesPlantationType} index={index}/>
              ))}
            </div>
           
        </div>
    </div>
  )
}

export default Main