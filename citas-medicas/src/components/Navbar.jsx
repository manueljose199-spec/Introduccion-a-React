import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-brand">🏥 ClinicaApp</span>
      <div className="navbar-links">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/doctores">Doctores</NavLink>
        <NavLink to="/mis-citas">Mis Citas</NavLink>
        <NavLink to="/nueva-cita">Nueva Cita</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;