import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

  const activeStyles = {
    color: "red",
    textDecoration: "underline",
    margin: "5px"
  }

  const inactiveStyles = {
    color: "darkGray",
    textDecoration: "none",
    margin: "5px"
  }

  const selectStyle = (navInfo) => navInfo.isActive === true ? activeStyles : inactiveStyles

  return (
    <div>
      
      <NavLink style={selectStyle} to="/">Home</NavLink>
      <NavLink style={selectStyle} to="/pisos" end={true}>Lista de Pisos</NavLink>
      {/* end true nos dice que el url tiene que ser exacto al to */}
      <NavLink style={selectStyle} to="/pisos/add-form">Crear Piso</NavLink>

    </div>
  )
}

export default Navbar