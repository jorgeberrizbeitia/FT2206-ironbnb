import './App.css';

// pages
import AptDetails from './pages/AptDetails';
import AptForm from './pages/AptForm';
import AptList from './pages/AptList';
import Home from './pages/Home';

// components
import Navbar from './components/Navbar';

// from packages
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">

      <Navbar />

      <div>

        <Routes>

          <Route path="/" element={<Home />}/>
          <Route path="/pisos" element={<AptList />}/>
          <Route path="/pisos/:id/details" element={<AptDetails />}/>
          <Route path="/pisos/add-form" element={<AptForm />}/>          

        </Routes>

      </div>

    </div>
  );
}

export default App;
