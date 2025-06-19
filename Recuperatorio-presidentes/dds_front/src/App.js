import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import {Menu} from './components/Menu';
import Inicio from './components/Inicio';
import Presidentes from "./components/Presidentes";

function App() {
  // recuerden siempre tener abierta las DEV TOOLS, pestañas red y consola.
  return (
    <BrowserRouter>
    <div  style={{ backgroundColor: "white",  minHeight: "75vh",  padding: "2rem"}}>
      <Menu></Menu>
      <div className='row'>
        <div className='col-12'>
        <Routes>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="*" element={<Navigate to="/inicio" replace />} />
            <Route path="/presidentes" element={<Presidentes />} />
           
          </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
