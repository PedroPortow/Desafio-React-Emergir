import React from 'react'
import './Header.scss'
import farmboxLogo from '../../images/logo-fb.png'

function Header() {
  return (
    <header>
        <div className="textWrapper">
            <i className="fa fa-book" />
            <h1> Relatório de visita técnica</h1>
        </div>
        <div className="logoWrapper">
            <img src={farmboxLogo} alt='farmLogo' />
        </div>
    </header>
  )
}

export default Header