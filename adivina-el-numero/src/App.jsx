import { useState } from "react";
import "./App.css";

// ─── Componentes ───────────────────────────────────────────

function Titulo() {
  return <h1>🎯 Adivina el Número</h1>;
}

function Pista({ intento, numeroSecreto }) {
  if (intento === null) return null;

  if (intento === numeroSecreto) {
    return <p className="mensaje exito">🎉 ¡Correcto! Adivinaste el número.</p>;
  }

  if (intento < numeroSecreto) {
    return <p className="mensaje pista">📈 El número es mayor que {intento}</p>;
  }

  return <p className="mensaje pista">📉 El número es menor que {intento}</p>;
}

function Intentos({ lista }) {
  if (lista.length === 0) return null;

  return (
    <div className="intentos">
      <p className="label">Intentos anteriores:</p>
      <ul>
        {lista.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

function Formulario({ onAdivinar, ganaste }) {
  const [valor, setValor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!valor) return;
    onAdivinar(Number(valor));
    setValor("");
  };

  if (ganaste) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <input
        type="number"
        placeholder="Ingresa un número (1-100)"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        min="1"
        max="100"
      />
      <button type="submit">Adivinar</button>
    </form>
  );
}

function BotonReiniciar({ onClick }) {
  return (
    <button className="btn-reiniciar" onClick={onClick}>
      🔄 Jugar de nuevo
    </button>
  );
}

// ─── App principal ─────────────────────────────────────────

const numeroAleatorio = () => Math.floor(Math.random() * 100) + 1;

function App() {
  const [numeroSecreto, setNumeroSecreto] = useState(numeroAleatorio());
  const [intento, setIntento] = useState(null);
  const [historial, setHistorial] = useState([]);
  const ganaste = intento === numeroSecreto;

  const adivinar = (numero) => {
    setIntento(numero);
    setHistorial((prev) => [...prev, numero]);
  };

  const reiniciar = () => {
    setNumeroSecreto(numeroAleatorio());
    setIntento(null);
    setHistorial([]);
  };

  return (
    <div className="container">
      <div className="card">
        <Titulo />
        <p className="subtitulo">Adivina un número entre 1 y 100</p>

        <Formulario onAdivinar={adivinar} ganaste={ganaste} />
        <Pista intento={intento} numeroSecreto={numeroSecreto} />
        <Intentos lista={historial} />

        {ganaste && <BotonReiniciar onClick={reiniciar} />}
      </div>
    </div>
  );
}

export default App;