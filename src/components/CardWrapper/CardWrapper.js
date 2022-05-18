import React from 'react'
import Card from '../Card/Card'
import './CardWrapper.scss'
import { DataContext } from '../../Context/DataContext'
import { useContext } from 'react'
import { useQuery } from 'react-query'

function CardWrapper({notesFarmType}) {
  // const {notesData} = useContext(DataContext) 
  // // const [data, setData] = useState()
  // // console.log(notesData)
  // if(!notesData) return
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