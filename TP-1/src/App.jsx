import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Inicio from "./paginas/Inicio";
import Contacto from "./paginas/Contacto";
import Nosotros from "./paginas/Nosotros";
import "./App.css";

function App() {
  return (
    <div>
      <header className="encabezado">
        <h1 className="logo">
          <span className="logo-nexus">NEXUS</span>
          <span className="logo-gaming">Gaming</span>
        </h1>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </div>
  );
}

export default App;
