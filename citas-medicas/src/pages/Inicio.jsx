import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div className="page">
      <div className="hero">
        <h1>Bienvenido a ClinicaApp</h1>
        <p>Gestiona tus citas médicas de manera fácil y rápida.</p>
        <div className="hero-buttons">
          <Link to="/nueva-cita" className="btn btn-primary">Agendar Cita</Link>
          <Link to="/mis-citas" className="btn btn-secondary">Ver Mis Citas</Link>
        </div>
      </div>
      <div className="cards-grid">
        <div className="info-card">
          <span className="icon">👨‍⚕️</span>
          <h3>Especialistas</h3>
          <p>Contamos con doctores en diversas especialidades.</p>
        </div>
        <div className="info-card">
          <span className="icon">📅</span>
          <h3>Agenda en línea</h3>
          <p>Reserva tu cita desde cualquier dispositivo.</p>
        </div>
        <div className="info-card">
          <span className="icon">🔔</span>
          <h3>Recordatorios</h3>
          <p>Recibe notificaciones antes de tu consulta.</p>
        </div>
      </div>
    </div>
  );
}

export default Inicio;