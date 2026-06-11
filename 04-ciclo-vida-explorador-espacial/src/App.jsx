import { useState, useEffect, useMemo } from "react";
import "./App.css";

function App() {
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [planetasVisitados, setPlanetasVisitados] = useState([]);
  const [naveActiva, setNaveActiva] = useState(true);

  // MONTAJE
  useEffect(() => {
    console.log("🚀 Nave iniciada");

    return () => {
      console.log("🛑 Nave apagada");
    };
  }, []);

  // ACTUALIZACIÓN
  useEffect(() => {
    console.log(`📍 Distancia recorrida: ${distancia} km`);
  }, [distancia]);

  const avanzar = () => {
    setDistancia(distancia + 100);

    if (combustible > 0) {
      setCombustible(combustible - 5);
    }
  };

  const visitarPlaneta = () => {
    const planeta = `Planeta ${planetasVisitados.length + 1}`;

    setPlanetasVisitados([
      ...planetasVisitados,
      planeta,
    ]);
  };

  const totalPlanetas = useMemo(() => {
    console.log("Calculando planetas...");
    return planetasVisitados.length;
  }, [planetasVisitados]);

  if (!naveActiva) {
    return (
      <div className="container">
        <h1>🛑 Nave Desmontada</h1>

        <button onClick={() => setNaveActiva(true)}>
          Reiniciar Nave
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h1>🚀 Explorador Espacial</h1>

        <p>
          <strong>Distancia:</strong> {distancia} km
        </p>

        <p>
          <strong>Combustible:</strong> {combustible}%
        </p>

        <p>
          <strong>Planetas visitados:</strong>{" "}
          {totalPlanetas}
        </p>

        <div className="buttons">
          <button onClick={avanzar}>
            Avanzar 100 km
          </button>

          <button onClick={visitarPlaneta}>
            Visitar planeta
          </button>

          <button
            onClick={() => setNaveActiva(false)}
          >
            Apagar nave
          </button>
        </div>

        <ul>
          {planetasVisitados.map(
            (planeta, index) => (
              <li key={index}>{planeta}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;