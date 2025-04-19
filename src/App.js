import React, { useState } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./login";
import Register from "./register";
import Mascotas from "./Mascotas";
import MisDatos from "./MisDatos";
import DatosPersonales from "./components/DatosPersonales";
import ModificarContrasena from "./components/ModificarContrasena";
import ReportarMascota from "./components/ReportarMascota";
import MascotasReportadas from "./components/MascotasReportadas";
import ComoFunciona from "./components/ComoFunciona";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [showMisDatos, setShowMisDatos] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleStartClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const handleLoginSuccess = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail("");
    toggleMenu();
  };

  return (
    <div>
      {/* Header */}
      <header
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/logo-pet.png"
            alt="Logo"
            style={{ width: "40px", height: "40px" }}
          />
          <h1 style={{ marginLeft: "10px" }}>Pet Finder</h1>
        </div>
        <div onClick={toggleMenu} style={{ cursor: "pointer" }}>
          <div
            style={{
              width: "30px",
              height: "3px",
              backgroundColor: "white",
              margin: "5px",
            }}
          ></div>
          <div
            style={{
              width: "30px",
              height: "3px",
              backgroundColor: "white",
              margin: "5px",
            }}
          ></div>
          <div
            style={{
              width: "30px",
              height: "3px",
              backgroundColor: "white",
              margin: "5px",
            }}
          ></div>
        </div>
      </header>

      {/* Menu desplegable */}
      {menuOpen && (
        <nav
          style={{
            backgroundColor: "#333", // Fondo oscuro
            color: "white",
            padding: "20px",
            position: "absolute",
            top: "60px",
            right: "10px",
            zIndex: 1000,
            borderRadius: "5px",
            boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          }}
        >
          <div style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
            <p style={{ margin: 0 }}>{userEmail || "Usuario no logueado"}</p>
          </div>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li
              onClick={() => {
                setShowMisDatos(true);
                toggleMenu();
              }}
              style={{ margin: "10px 0", cursor: "pointer" }}
            >
              <Link
                to="/mis-datos"
                style={{ color: "white", textDecoration: "none" }}
              >
                Mis datos
              </Link>
            </li>
            <li
              onClick={() => {
                toggleMenu();
              }}
              style={{ margin: "10px 0", cursor: "pointer" }}
            >
              <Link
                to="/mascotas-reportadas"
                style={{ color: "white", textDecoration: "none" }}
              >
                Mis mascotas reportadas
              </Link>
            </li>
            <li
              onClick={() => {
                toggleMenu();
              }}
              style={{ margin: "10px 0", cursor: "pointer" }}
            >
              <Link
                to="/reportar-mascota"
                style={{ color: "white", textDecoration: "none" }}
              >
                Reportar mascota
              </Link>
            </li>
            <li
              onClick={handleLogout}
              style={{ margin: "10px 0", cursor: "pointer" }}
            >
              Cerrar sesión
            </li>
          </ul>
        </nav>
      )}

      <Routes>
        <Route
          path="/mis-datos"
          element={
            <MisDatos
              email={userEmail}
              onClose={() => setShowMisDatos(false)}
            />
          }
        />
        <Route
          path="/modificar-datos"
          element={
            <DatosPersonales
              onGuardar={(datos) => console.log("Datos guardados:", datos)}
            />
          }
        />
        <Route
          path="/modificar-contrasena"
          element={
            <ModificarContrasena
              onGuardar={(contrasena) =>
                console.log("Contraseña guardada:", contrasena)
              }
            />
          }
        />
        <Route path="/reportar-mascota" element={<ReportarMascota />} />
        <Route path="/mascotas-reportadas" element={<MascotasReportadas />} />
        <Route path="/como-funciona" element={<ComoFunciona />} />
        <Route
          path="/"
          element={
            showLogin ? (
              <Login
                onRegisterClick={handleRegisterClick}
                onLoginSuccess={handleLoginSuccess}
              />
            ) : showRegister ? (
              <Register />
            ) : showMisDatos ? (
              <MisDatos
                email={userEmail}
                onClose={() => setShowMisDatos(false)}
              />
            ) : isLoggedIn ? (
              <Mascotas />
            ) : (
              <>
                {/* Imagen y contenido */}
                <div style={{ textAlign: "center", margin: "20px 0" }}>
                  <img
                    src="/imagen.png"
                    alt="Pet"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                  <h2>Pet Finder App</h2>
                  <p>
                    Encontra y reporta mascotas perdidas cerca de tu ubicación
                  </p>

                  {/* Botones */}
                  <div style={{ marginTop: "20px" }}>
                    <button
                      onClick={handleStartClick}
                      style={{
                        backgroundColor: "blue",
                        color: "white",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        marginRight: "10px",
                      }}
                    >
                      Empezar
                    </button>
                    <button
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => navigate("/como-funciona")}
                    >
                      ¿Cómo funciona Pet Finder?
                    </button>
                  </div>

                  {/* Enlace al registro */}
                  <div style={{ marginTop: "20px" }}>
                    <span
                      onClick={handleRegisterClick}
                      style={{
                        color: "blue",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      ¿No tienes cuenta? Regístrate aquí
                    </span>
                  </div>
                </div>
              </>
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
