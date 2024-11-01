// rfc -> export default function
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-'${props.mode}' bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand text-${props.mode === 'dark' ? 'white' : 'dark'}`} to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link text-${props.mode === 'dark' ? 'white' : 'dark'}`} aria-current="page" to="/">{props.homeText}</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${props.mode === 'dark' ? 'white' : 'dark'}`} to="/about">{props.aboutText}</Link>
            </li>
          </ul>

          {/* Search Button */}
          {/* <form className="d-flex mx-2" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="submit">{props.button}</button>
          </form> */} 
          
          {/* Enable Blue Mode */}
          <div className={`form-check form-switch text-${props.mode === 'dark' ? 'white' : 'dark'}`}>
            <input className="form-check-input" onClick={props.toogleBlue} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label mx-3" htmlFor="flexSwitchCheckDefault">{props.blue === 'enable' ? 'Disable' : 'Enable'} Mode</label>
          </div>
          
          {/* Enable Dark Mode */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toogleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='dark'? 'Light' : 'Dark'} Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propsTypes = {
  title: PropTypes.string.isRequired,
  homeText: PropTypes.string,
  aboutText: PropTypes.string,
  button: PropTypes.string
}

// Navbar.defaultProps = {
//   homeText: "Home",
//   aboutText: "About",
//   button: "Button"
// }