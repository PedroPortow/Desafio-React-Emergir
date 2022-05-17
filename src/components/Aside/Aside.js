import React from 'react'
import './Aside.scss'
import {useContext} from 'react'
import { DataContext } from '../../Context/DataContext'

function Aside() {
   const {data} = useContext(DataContext)
   // console.log(data)

   if(!data) return

  return (
    <aside className="aside-container">
    <div className="first-section">
       <h2>Fazenda</h2>
       <h3>{data.farm.name}</h3>
       <p>ewew talhões</p>
    </div>
    <div className="second-section">
       <div className="first-row">
          <div className="col1">
             <h2>Data da visita</h2>
             <h3 >{data.details.date.split('-').reverse().join('/')}</h3>
          </div>
          <div className="col2">
             <h2>Safra</h2>
             <h3>{data.harvest.name}</h3>
          </div>
       </div>
       <div className="second-coluna">
          <div className="second-coluna-row">
             <div className="textWrapper">
                <h2>Realizada por</h2>
                <h3 >{data.owner.name}</h3>
             </div>
             <div className="JH">
                <span >
                {data.owner.initials}
                </span>
             </div>
          </div>
          <div className="second-section-third-row">
             <h2>Pluviometria</h2>
             <h2><i className="fa fa-droplet"></i>rere</h2>
             <p>Acumulado na safra</p>
          </div>
       </div>
    </div>
    <div className="third-section">
       <h2>Observações</h2>
       <p >{data.details.observation}</p>
    </div>
    <div className="forth-section">
       <button >
          <i className="fa fa-print"></i>
          <h2>IMPRIMIR</h2>
       </button>
    </div>
 </aside>
  )
}

export default Aside