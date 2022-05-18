import React from 'react'
import Card from '../Card/Card'
import './CardWrapper.scss'
import { DataContext } from '../../Context/DataContext'
import { useContext } from 'react'

function CardWrapper() {
  const {notesData} = useContext(DataContext) 
  // const [data, setData] = useState()
  // console.log(notesData)
  if(!notesData) return

  const notesFarm = notesData.results.filter((el) => {
    if(el.location_type === 'Farm') return el
  })

  // console.log(notesFarm)

  return (
  
        <div className='card-row'>
          {notesFarm.map((note) => (
            <Card 
            key={note.id}
            note={note} />
          ))}
        </div>
  
  )
}

export default CardWrapper