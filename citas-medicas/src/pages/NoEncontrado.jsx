import { Link } from "react-router-dom";

function NoEncontrado() {
  return (
    <div className="page" style={{ textAlign: "center" }}>
      <p style={{ fontSize: 60 }}>404</p>
      <h2>Página no encontrada</h2>
      <p className="subtitulo">La ruta que buscas no existe.</p>
      <Link to="/" className="btn btn-primary" style={{ marginTop: 20, display: "inline-block" }}>
        Volver al inicio
      </Link>
    </div>
  );
}

export default NoEncontrado;