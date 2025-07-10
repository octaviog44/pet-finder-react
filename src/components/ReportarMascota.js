import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { reportarMascota } from "../api/mascotas";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Corrige íconos Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const ReportarMascota = ({ onReportar, userEmail }) => {
  const [nombre, setNombre] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [foto, setFoto] = useState(null);
  const [position, setPosition] = useState([-34.61, -58.38]); // Buenos Aires por defecto
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("userEmail:", userEmail); // Depuración
    if (!userEmail) {
      alert("Debes iniciar sesión para reportar una mascota.");
      return;
    }
    const mascota = {
      nombre,
      ubicacion,
      foto,
      position,
      user_email: userEmail,
    };
    await reportarMascota(mascota);
    if (onReportar) onReportar(mascota);
    navigate("/mascotas-reportadas");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const geocodeUbicacion = async () => {
    if (!ubicacion) return;

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          ubicacion
        )}`
      );
      const data = await response.json();
      if (data && data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);
        setPosition([lat, lon]);
      } else {
        alert("No se encontró la ubicación.");
      }
    } catch (error) {
      console.error("Error al geocodificar:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}
    >
      <h2
        style={{ fontSize: "24px", marginBottom: "10px", textAlign: "center" }}
      >
        Reportar mascota
      </h2>
      <p
        style={{ textAlign: "center", fontSize: "14px", marginBottom: "20px" }}
      >
        Ingresá la siguiente información para realizar el reporte de la mascota
      </p>

      <label style={{ display: "block", marginBottom: "10px" }}>
        NOMBRE
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </label>

      {/* 🔍 Input de Ubicación arriba del mapa */}
      <label style={{ display: "block", marginBottom: "10px" }}>
        UBICACIÓN
        <input
          type="text"
          placeholder="Ej: Av. Corrientes 1234, Buenos Aires"
          value={ubicacion}
          onChange={(e) => setUbicacion(e.target.value)}
          onBlur={geocodeUbicacion} // busca coordenadas al salir del campo
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </label>

      {/* 🗺️ Mapa */}
      <div style={{ height: "200px", width: "100%", marginBottom: "10px" }}>
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "100%", borderRadius: "8px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>Última ubicación</Popup>
          </Marker>
        </MapContainer>
      </div>

      <label style={{ display: "block", marginBottom: "10px" }}>
        <div
          style={{
            width: "100%",
            height: "150px",
            backgroundColor: "#e0e0e0",
            borderRadius: "5px",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#888",
          }}
        >
          {foto ? (
            <img
              src={foto}
              alt="Mascota"
              style={{ maxHeight: "100%", borderRadius: "5px" }}
            />
          ) : (
            <span>📷 Agregá una foto</span>
          )}
        </div>
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </label>

      <p style={{ fontSize: "12px", color: "#666", marginBottom: "10px" }}>
        Buscá un punto de referencia para reportar la mascota. Por ejemplo,
        seleccioná dónde se vio por última vez.
      </p>

      <button
        type="submit"
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          width: "100%",
          marginBottom: "10px",
        }}
      >
        Reportar mascota
      </button>

      <button
        type="button"
        onClick={() => console.log("Cancelar")}
        style={{
          backgroundColor: "gray",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          width: "100%",
        }}
      >
        Cancelar
      </button>
    </form>
  );
};

export default ReportarMascota;
