import React from 'react'
import './Aside.scss'

function Aside({dataFarm, dataRain}) {
  
  return (
    <aside className="aside-container">
      <div className="first-section">
         <h2>Fazenda</h2>
         <h3>{dataFarm.farm.name}</h3>
         <p>{dataRain.plots} talhões</p>
      </div>
      <div className="second-section">
         <div className="first-row">
            <div className="col1">
               <h2>Data da visita</h2>
               <h3 >{dataFarm.details.date.split('-').reverse().join('/')}</h3>
            </div>
            <div className="col2">
               <h2>Safra</h2>
               <h3>{dataFarm.harvest.name}</h3>
            </div>
         </div>
         <div className="second-coluna">
            <div className="second-coluna-row">
               <div className="textWrapper">
                  <h2>Realizada por</h2>
                  <h3 >{dataFarm.owner.name}</h3>
               </div>
               <div className="JH">
                  <span >
                  {dataFarm.owner.initials}
                  </span>
               </div>
            </div>
            <div className="second-section-third-row">
               <h2>Pluviometria</h2>
               <h2><i className="fa fa-droplet"></i> {
               Number.isInteger(dataRain.rain_until_date) === true 
               ? dataRain.rain_until_date + ',00' 
               : dataRain.rain_until_date} mm</h2>
               <p>Acumulado na safra</p>
            </div>
         </div>
      </div>
      <div className="third-section">
         <h2>Observações</h2>
         <p >{dataFarm.details.observation}</p>
      </div>
      <div className="forth-section">
         <button>
            <i className="fa fa-print"></i>
            <h2>IMPRIMIR</h2>
         </button>
      </div>
   </aside>
  )
}

export default Aside