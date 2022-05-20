import React from 'react'
import logoCheck from '../../images/logo-check.png'

function Loader() {
  return (
    <div className="load">
      <img src={logoCheck} alt='logo Farmbox' />
    <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
 </div>
  )
}

export default Loader