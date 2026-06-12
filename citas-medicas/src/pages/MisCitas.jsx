import { Link } from "react-router-dom";

const citas = [
  { id: 1, doctor: "Dra. Ana López", especialidad: "Cardiología", fecha: "2026-06-15", hora: "10:00", estado: "Confirmada" },
  { id: 2, doctor: "Dr. Carlos Méndez", especialidad: "Pediatría", fecha: "2026-06-20", hora: "11:30", estado: "Pendiente" },
  { id: 3, doctor: "Dra. María Torres", especialidad: "Dermatología", fecha: "2026-06-25", hora: "09:00", estado: "Confirmada" },
];

function MisCitas() {
  return (
    <div className="page">
      <h2>Mis Citas</h2>
      <p className="subtitulo">Historial y próximas consultas</p>
      <div className="citas-lista">
        {citas.map((cita) => (
          <div className="cita-row" key={cita.id}>
            <div>
              <p className="cita-doctor">{cita.doctor}</p>
              <p className="cita-info">{cita.especialidad} · {cita.fecha} · {cita.hora}</p>
            </div>
            <div className="cita-actions">
              <span className={`badge ${cita.estado === "Confirmada" ? "badge-green" : "badge-yellow"}`}>{cita.estado}</span>
              <Link to={`/cita/${cita.id}`} className="btn btn-secondary">Ver detalle</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MisCitas;