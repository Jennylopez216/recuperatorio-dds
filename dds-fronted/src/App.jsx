import "./App.css";
import {ArticulosFamilias} from './components/ArticulosFamilias';
import {Inicio} from "./components/Inicio";

function App() {
  return (
    <>
      <Inicio/>

      <div className="divBody">
          <ArticulosFamilias/>
      </div>
    </>
  );
}
export default App;


