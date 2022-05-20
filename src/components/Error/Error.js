import React from 'react'
import './Error.scss'
import build from '../../images/web_developing.gif'

function Error() {
  return (
    <div className="error">
      <img src={build} alt='a' />
      <p className='errorText'>Algo deu errado com sua requisição :(</p>
    
    </div>
  )
}

export default Error