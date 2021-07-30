import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/Config";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setEmail("");
        setPassword("");
        setError("");
        props.history.push("/");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="container">
      <br />
      <h2>Login</h2>
      <br />
      <form autoComplete="off" className="form-group" onSubmit={login}>
        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          className="form-control"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          className="form-control"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit" className="btn btn-success btn-md mybtn">
          INGRESAR
        </button>
      </form>
      {error && <span className="error-msg">{error}</span>}
      <br />
      <span>
        ¿No tiene una cuenta? Registrarse
        <Link to="signup"> Aquí</Link>
      </span>
    </div>
  );
};
