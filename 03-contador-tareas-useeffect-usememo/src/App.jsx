import { useState, useEffect, useMemo } from "react";
import "./App.css";

function App() {
  const [horaActual, setHoraActual] = useState(new Date());
  const [nombreTarea, setNombreTarea] = useState("");
  const [horas, setHoras] = useState("");
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraActual(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const agregarTarea = () => {
    if (!nombreTarea || !horas) return;

    setTareas([
      ...tareas,
      {
        nombre: nombreTarea,
        horas: Number(horas),
      },
    ]);

    setNombreTarea("");
    setHoras("");
  };

  const totalHoras = useMemo(() => {
    console.log("Calculando total...");
    return tareas.reduce(
      (total, tarea) => total + tarea.horas,
      0
    );
  }, [tareas]);

  return (
    <div className="container">
      <div className="card">
        <h1>⏱ Contador de Tareas</h1>

        <p className="hora">
          Hora actual:
          <br />
          {horaActual.toLocaleTimeString()}
        </p>

        <input
          type="text"
          placeholder="Nombre de la tarea"
          value={nombreTarea}
          onChange={(e) => setNombreTarea(e.target.value)}
        />

        <input
          type="number"
          placeholder="Horas"
          value={horas}
          onChange={(e) => setHoras(e.target.value)}
        />

        <button onClick={agregarTarea}>
          Agregar tarea
        </button>

        <ul>
          {tareas.map((tarea, index) => (
            <li key={index}>
              {tarea.nombre} - {tarea.horas} h
            </li>
          ))}
        </ul>

        <h2>Total de horas: {totalHoras}</h2>
      </div>
    </div>
  );
}

export default App;