import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Asegúrate de usar useNavigate

function Login({ onRegisterClick, onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const navigate = useNavigate(); // Cambia a useNavigate

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else {
      console.log("Email ingresado:", email);
      console.log("Contraseña ingresada:", password);
      onLoginSuccess(); // Llama a la función de éxito al iniciar sesión
    }
  };

  const handleRegisterRedirect = () => {
    navigate("/register"); // Cambia a navigate
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      {step === 1 ? (
        <>
          <h2>Iniciar Sesión</h2>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={handleEmailChange}
            style={{
              padding: "10px",
              margin: "10px 0",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <div>
            <button
              onClick={handleNext}
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Siguiente
            </button>
          </div>
          <div style={{ marginTop: "20px" }}>
            <span
              onClick={onRegisterClick}
              style={{
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              ¿No tienes cuenta? Regístrate aquí
            </span>
          </div>
        </>
      ) : (
        <>
          <h2>Ingresa tu Contraseña</h2>
          <input
            type="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={handlePasswordChange}
            style={{
              padding: "10px",
              margin: "10px 0",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <div>
            <button
              onClick={handleNext}
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Iniciar Sesión
            </button>
          </div>
          <div style={{ marginTop: "20px" }}>
            <span
              onClick={onRegisterClick}
              style={{
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              ¿No tienes cuenta? Regístrate aquí
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
