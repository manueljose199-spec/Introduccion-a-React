import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) { setError("Las contraseñas no coinciden."); return; }
    const result = register(username, password);
    if (result.ok) navigate("/");
    else setError(result.error);
  };

  return (
    <div>
      <h2>Crear cuenta</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input placeholder="Usuario" value={username}
          onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Contraseña" value={password}
          onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirmar contraseña" value={confirm}
          onChange={(e) => setConfirm(e.target.value)} />
        <button type="submit">Registrarme</button>
      </form>
      <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>
    </div>
  );
};

export default Register;