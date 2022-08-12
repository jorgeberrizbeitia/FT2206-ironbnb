import React from 'react'
import { useState, useContext } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

// contextos
import { ThemeContext } from "../context/theme.context"

function AptForm() {

  const { switchBtnTheme } = useContext(ThemeContext)

  // aqui inicializamos useNavigate
  const navigate = useNavigate()

  // podriamos crear 3 estados (uno para cada campo) pero...
  // para practicar, haremos un solo estado con toda la info
  const [aptToAdd, setAptToAdd] = useState({
    title: "",
    img: "",
    pricePerDay: 0
  })

  const handleChange = (event) => {
    console.log("name: ", event.target.name) // img, title, pricePerDay
    console.log(event.target.value)
    // aptToAdd.title = event.target.value // NUNCA MUTEMOS DIRECTAMENTE EL ESTADO
    const stateClone = {...aptToAdd}
    stateClone[event.target.name] = event.target.value
    // stateClone["title"] = event.target.value
    setAptToAdd(stateClone)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    // contactar al backend para que cree un nuevo piso con la info del formulario
    try {


      await axios.post("https://ironbnb-m3.herokuapp.com/apartments", aptToAdd)
      console.log("piso agregado!")
      // quiero redireccionar al usuario a lista de pisos
      navigate("/pisos")

    } catch (error) {
      navigate("/error")

    }

  }

  return (
    <div>

      <h3>Agregar un nuevo piso</h3>
      
      <form onSubmit={handleSubmit}>

        <label htmlFor="title">Titulo:</label>
        <input type="text" name="title" onChange={handleChange} value={aptToAdd.title}/>

        <br />

        <label htmlFor="img">Imagen:</label>
        <input type="text" name="img" onChange={handleChange} value={aptToAdd.img}/>

        <br />

        <label htmlFor="pricePerDay">Precio:</label>
        <input type="number" name="pricePerDay" onChange={handleChange} value={aptToAdd.pricePerDay}/>

        <br />

        <button style={switchBtnTheme()}>Agregar</button>

      </form>


    </div>
  )
}

export default AptForm