import { useState } from "react";
import "./App.css";

function App() {
  const [producto, setProducto] = useState("");
  const [lista, setLista] = useState([]);

  const agregarProducto = () => {
    if (producto.trim() === "") return;

    setLista([...lista, producto]);
    setProducto("");
  };

  const eliminarProducto = (index) => {
    setLista(lista.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>🛒 Lista de Compras</h1>

      <input
        type="text"
        placeholder="Escribe un producto"
        value={producto}
        onChange={(e) => setProducto(e.target.value)}
      />

      <button onClick={agregarProducto}>
        Agregar
      </button>

      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            {item}

            <button
              onClick={() => eliminarProducto(index)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;