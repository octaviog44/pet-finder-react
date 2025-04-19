import React from "react";
import { Link } from "react-router-dom";
import "./MascotasReportadas.css"; // estilos aparte si querés

const MascotasReportadas = ({ mascotas = [] }) => {
  return (
    <div className="container">
      <h2 className="titulo">Mascotas reportadas</h2>

      {mascotas.length === 0 ? (
        <div className="sin-mascotas">
          <p className="mensaje-vacio">Aún no reportaste mascotas perdidas</p>
          <img
            src="/vacio.png"
            alt="No hay reportes"
            className="imagen-vacia"
          />
          <Link to="/reportar-mascota">
            <button className="boton-publicar">Publicar reporte</button>
          </Link>
        </div>
      ) : (
        <div className="lista-mascotas">
          {mascotas.map((mascota, index) => (
            <div key={index} className="tarjeta-mascota">
              <img src={mascota.foto} alt={mascota.nombre} className="foto" />
              <div className="info">
                <h3 className="nombre">{mascota.nombre}</h3>
                <p className="ubicacion">{mascota.ubicacion}</p>
              </div>
              <button className="boton-editar">Editar ✏️</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MascotasReportadas;
