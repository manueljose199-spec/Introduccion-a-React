import { useReducer, useRef, useCallback } from "react";
import "./App.css";

// ─── REDUCER ───────────────────────────────────────────────
const initialState = {
  productos: [],
  historial: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "AGREGAR":
      return {
        ...state,
        productos: [...state.productos, action.payload],
        historial: [`➕ Agregado: ${action.payload.nombre}`, ...state.historial],
      };

    case "ELIMINAR":
      return {
        ...state,
        productos: state.productos.filter((p) => p.id !== action.payload.id),
        historial: [`🗑 Eliminado: ${action.payload.nombre}`, ...state.historial],
      };

    case "ACTUALIZAR_STOCK":
      return {
        ...state,
        productos: state.productos.map((p) =>
          p.id === action.payload.id
            ? { ...p, stock: action.payload.stock }
            : p
        ),
        historial: [
          `📦 Stock actualizado: ${action.payload.nombre} → ${action.payload.stock}`,
          ...state.historial,
        ],
      };

    default:
      return state;
  }
}

// ─── Componentes ───────────────────────────────────────────

function FormularioProducto({ onAgregar }) {
  const nombreRef = useRef(null);
  const stockRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = nombreRef.current.value.trim();
    const stock = Number(stockRef.current.value);
    if (!nombre || stock < 0) return;

    onAgregar({ id: Date.now(), nombre, stock });

    nombreRef.current.value = "";
    stockRef.current.value = "";
    nombreRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <input ref={nombreRef} type="text" placeholder="Nombre del producto" required />
      <input ref={stockRef} type="number" placeholder="Stock" min="0" required />
      <button type="submit">Agregar</button>
    </form>
  );
}

function TablaProductos({ productos, onEliminar, onActualizarStock }) {
  if (productos.length === 0) {
    return <p className="vacio">No hay productos en el inventario.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Stock</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((p) => (
          <tr key={p.id}>
            <td>{p.nombre}</td>
            <td>
              <input
                type="number"
                value={p.stock}
                min="0"
                onChange={(e) =>
                  onActualizarStock(p.id, p.nombre, Number(e.target.value))
                }
                className="input-stock"
              />
            </td>
            <td>
              <button className="btn-eliminar" onClick={() => onEliminar(p.id, p.nombre)}>
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Historial({ lista }) {
  if (lista.length === 0) return null;

  return (
    <div className="historial">
      <p className="label">Historial de eventos</p>
      <ul>
        {lista.map((evento, i) => (
          <li key={i}>{evento}</li>
        ))}
      </ul>
    </div>
  );
}

// ─── App principal ─────────────────────────────────────────

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // useCallback evita recrear estas funciones en cada render
  const handleAgregar = useCallback((producto) => {
    dispatch({ type: "AGREGAR", payload: producto });
  }, []);

  const handleEliminar = useCallback((id, nombre) => {
    dispatch({ type: "ELIMINAR", payload: { id, nombre } });
  }, []);

  const handleActualizarStock = useCallback((id, nombre, stock) => {
    dispatch({ type: "ACTUALIZAR_STOCK", payload: { id, nombre, stock } });
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1>🛒 Gestor de Inventario</h1>
        <p className="subtitulo">useReducer · useRef · useCallback</p>

        <FormularioProducto onAgregar={handleAgregar} />

        <TablaProductos
          productos={state.productos}
          onEliminar={handleEliminar}
          onActualizarStock={handleActualizarStock}
        />

        <Historial lista={state.historial} />
      </div>
    </div>
  );
}

export default App;
