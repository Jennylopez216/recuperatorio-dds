import './App.css';
import {Menu} from './components/Menu';
import { Inicio } from './components/Inicio';


import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Enfermeros from './components/Enfermeros';

function App() {
  return (
    <div>

      <BrowserRouter>
          <Menu />
          <div className="divBody">
            <Routes>
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/enfermeros" element={<Enfermeros />} />

              <Route path="*" element={<Navigate to="/inicio" replace />} />
            </Routes>
          </div>
        </BrowserRouter>

    
    </div>
  );
}

export default App;
