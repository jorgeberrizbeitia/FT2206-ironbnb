import './App.css';

// pages
import AptDetails from './pages/AptDetails';
import AptForm from './pages/AptForm';
import AptList from './pages/AptList';
import Home from './pages/Home';
import Error from './pages/Error';

// components
import Navbar from './components/Navbar';

// from packages
import { Route, Routes } from "react-router-dom"
import { useContext } from "react"

// contextos
import { ThemeContext } from "./context/theme.context"

function App() {

  const {toggleDarkMode, switchTheme, switchBtnTheme} = useContext(ThemeContext)

  return (
    <div className="App" style={switchTheme()}>

      <button style={switchBtnTheme()} onClick={toggleDarkMode}>Cambiar Tema</button>

      <Navbar />

      <div>

        <Routes>

          <Route path="/" element={<Home />}/>
          <Route path="/pisos" element={<AptList />}/>
          <Route path="/pisos/:id/details" element={<AptDetails />}/>
          <Route path="/pisos/add-form" element={<AptForm />}/>    
          <Route path="/error" element={ <Error/> }/>      

        </Routes>

      </div>

    </div>
  );
}

export default App;
