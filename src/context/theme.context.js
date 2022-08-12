import { createContext } from "react"
import { useState } from "react"

const ThemeContext = createContext()

function ThemeWrapper(props) {

  // todos los estados, functions, variables, etc que queremos compartir con toda la app
  const [darkMode, setDarkMode] = useState(true)
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // estilos generales
  const darkTheme = {
    backgroundColor: "black",
    color: "darkGray"
  }

  const lightTheme = {
    backgroundColor: "white",
    color: "black"
  }

  const switchTheme = () => {
    return darkMode === true ? darkTheme : lightTheme
  }

  // botones
  const darkThemeBtn = {
    backgroundColor: "red",
    color: "black"
  }

  const lightThemeBtn = {
    backgroundColor: "lightseagreen",
    color: "white"
  }

  const switchBtnTheme = () => {
    return darkMode === true ? darkThemeBtn : lightThemeBtn
  }

  const passedContext = {
    toggleDarkMode,
    switchTheme,
    switchBtnTheme
  }

  return (
    <ThemeContext.Provider value={passedContext}>
      {props.children}
    </ThemeContext.Provider>
  )

}

export {ThemeContext, ThemeWrapper}