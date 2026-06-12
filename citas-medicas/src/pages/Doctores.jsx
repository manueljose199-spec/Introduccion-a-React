import { Link } from "react-router-dom";

const doctores = [
  { id: 1, nombre: "Dra. Ana López", especialidad: "Cardiología", horario: "Lun-Vie 9am-2pm" },
  { id: 2, nombre: "Dr. Carlos Méndez", especialidad: "Pediatría", horario: "Mar-Sáb 10am-4pm" },
  { id: 3, nombre: "Dra. María Torres", especialidad: "Dermatología", horario: "Lun-Jue 8am-1pm" },
  { id: 4, nombre: "Dr. Jorge Ruiz", especialidad: "Neurología", horario: "Mié-Vie 11am-5pm" },
];

function Doctores() {
  return (
    <div className="page">
      <h2>Nuestros Doctores</h2>
      <p className="subtitulo">Elige al especialista que necesitas</p>
      <div className="cards-grid">
        {doctores.map((doc) => (
          <div className="doctor-card" key={doc.id}>
            <div className="doctor-avatar">{doc.nombre.charAt(0)}</div>
            <h3>{doc.nombre}</h3>
            <p className="especialidad">{doc.especialidad}</p>
            <p className="horario">🕐 {doc.horario}</p>
            <Link to="/nueva-cita" className="btn btn-primary" style={{ marginTop: 12 }}>Agendar</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctores;