import { useParams, Link } from "react-router-dom";

const citas = {
  1: { id: 1, doctor: "Dra. Ana López", especialidad: "Cardiología", fecha: "2026-06-15", hora: "10:00", estado: "Confirmada", consultorio: "Consultorio 3", notas: "Llevar estudios previos de electrocardiograma." },
  2: { id: 2, doctor: "Dr. Carlos Méndez", especialidad: "Pediatría", fecha: "2026-06-20", hora: "11:30", estado: "Pendiente", consultorio: "Consultorio 7", notas: "Traer cartilla de vacunación." },
  3: { id: 3, doctor: "Dra. María Torres", especialidad: "Dermatología", fecha: "2026-06-25", hora: "09:00", estado: "Confirmada", consultorio: "Consultorio 1", notas: "No aplicar cremas el día de la consulta." },
};

function DetalleCita() {
  const { id } = useParams();
  const cita = citas[id];

  if (!cita) {
    return (
      <div className="page">
        <h2>Cita no encontrada</h2>
        <Link to="/mis-citas" className="btn btn-primary">Volver</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <Link to="/mis-citas" className="back-link">← Volver a mis citas</Link>
      <div className="detalle-card">
        <h2>Detalle de Cita #{cita.id}</h2>
        <div className="detalle-grid">
          <div className="detalle-item"><span>Doctor</span><strong>{cita.doctor}</strong></div>
          <div className="detalle-item"><span>Especialidad</span><strong>{cita.especialidad}</strong></div>
          <div className="detalle-item"><span>Fecha</span><strong>{cita.fecha}</strong></div>
          <div className="detalle-item"><span>Hora</span><strong>{cita.hora}</strong></div>
          <div className="detalle-item"><span>Consultorio</span><strong>{cita.consultorio}</strong></div>
          <div className="detalle-item"><span>Estado</span>
            <span className={`badge ${cita.estado === "Confirmada" ? "badge-green" : "badge-yellow"}`}>{cita.estado}</span>
          </div>
        </div>
        <div className="notas">
          <p className="label">📋 Notas</p>
          <p>{cita.notas}</p>
        </div>
      </div>
    </div>
  );
}

export default DetalleCita;