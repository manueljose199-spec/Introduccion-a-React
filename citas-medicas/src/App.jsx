import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Inicio from "./pages/Inicio.jsx";
import Doctores from "./pages/Doctores.jsx";
import DetalleCita from "./pages/DetalleCita.jsx";
import NuevaCita from "./pages/NuevaCita.jsx";
import MisCitas from "./pages/MisCitas.jsx";
import NoEncontrado from "./pages/NoEncontrado.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/doctores" element={<Doctores />} />
          <Route path="/mis-citas" element={<MisCitas />} />
          <Route path="/nueva-cita" element={<NuevaCita />} />
          <Route path="/cita/:id" element={<DetalleCita />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </main>
    </>
  );
}

export default App;