import './App.css';
import Inicio from './components/Inicio';
import MainRazas from './components/Razas/MainRazas';
import MainHerbolario from './components/Herbolario/MainHerbolario';
import NavBar from './components/NavBar';
import MainFichas from './components/Fichas/MainFichas';
import MainEjemplos from './components/Ejemplos/MainEjemplos'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  return (
    <Router>
      <div className="main">
        <NavBar />
        <div className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/razas" element={<MainRazas />} />
            <Route path="/herbolario" element={<MainHerbolario />} />
            <Route path='/ficha' element={<MainFichas />}/>
            <Route path='/ejemplos' element={<MainEjemplos />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
