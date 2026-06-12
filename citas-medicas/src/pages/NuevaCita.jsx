import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const doctores = [
  "Dra. Ana López - Cardiología",
  "Dr. Carlos Méndez - Pediatría",
  "Dra. María Torres - Dermatología",
  "Dr. Jorge Ruiz - Neurología",
];

function NuevaCita() {
  const [enviado, setEnviado] = useState(false);
  const navigate = useNavigate();
  const doctorRef = useRef();
  const fechaRef = useRef();
  const horaRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => navigate("/mis-citas"), 2000);
  };

  if (enviado) {
    return (
      <div className="page" style={{ textAlign: "center" }}>
        <div className="success-box">
          <p style={{ fontSize: 40 }}>✅</p>
          <h2>¡Cita agendada!</h2>
          <p>Redirigiendo a tus citas...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <h2>Nueva Cita</h2>
      <p className="subtitulo">Completa los datos para agendar tu consulta</p>
      <div className="form-card">
        <form onSubmit={handleSubmit} className="form-cita">
          <label>Doctor / Especialidad</label>
          <select ref={doctorRef} required>
            <option value="">Selecciona un doctor</option>
            {doctores.map((d, i) => <option key={i} value={d}>{d}</option>)}
          </select>
          <label>Fecha</label>
          <input ref={fechaRef} type="date" required />
          <label>Hora</label>
          <input ref={horaRef} type="time" required />
          <button type="submit" className="btn btn-primary">Confirmar Cita</button>
        </form>
      </div>
    </div>
  );
}

export default NuevaCita;