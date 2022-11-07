import React from "react";
import PropTypes from "prop-types"
import { a } from "react-router-dom";
export default function Navbar(props) {
   return(
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-a mx-2" href="/textform" >{props.Home} <span className="sr-only">(current)</span></a>
      </li>
     {/*<li className="nav-item">
        <a className="nav-a mx-2" href="/about">About</a>
      </li>*/} 

    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">{props.Search}</button>
    </form>
    <div className={`custom-control custom-switch text-${props.mode==="light"? "dark" :"light"}`}>
       <input type="checkbox" className="custom-control-input" onClick = {props.changeMode} id="customSwitch1"/>
       <label className="custom-control-label" htmlFor="customSwitch1">{props.cmode}</label>
    </div>
  </div>
</nav>
   )
}
Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    Home : PropTypes.string,
    Search : PropTypes.string
}
Navbar.defaultProps = {
    title : 'MyTextutils',
    Search : "Search"
};