import React from "react";

const ComoFunciona = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>¿Cómo funciona?</h2>
      <p>Perdiste a tu mascota o viste una que parece perdida… ¡No te preocupes! Esta página está pensada para ayudarte a reencontrarte con tu compañero peludo o ayudar a alguien más a hacerlo.</p>
      <h3>Si perdiste a tu mascota:</h3>
      <ul>
        <li>Publicá un reporte con una foto clara, nombre, descripción y el lugar donde se perdió.</li>
        <li>Podés agregar detalles como si lleva collar, si es amigable, y cualquier dato que ayude a reconocerla.</li>
        <li>Tu publicación aparecerá en el mapa y en la lista de mascotas perdidas, para que otras personas puedan verla.</li>
      </ul>
      <h3>Si viste una mascota perdida:</h3>
      <ul>
        <li>Buscá en la sección de mascotas perdidas para ver si alguien ya está buscándola.</li>
        <li>Si encontrás una coincidencia, podés dejar un comentario o contactar directamente a la persona que la busca.</li>
        <li>Si no encontrás ninguna coincidencia, creá un reporte de avistamiento con foto, ubicación y detalles del animal.</li>
      </ul>
      <p>Entre todos podemos ayudar a reunir a las familias con sus mascotas. ¡Gracias por ser parte de esta red solidaria!</p>
    </div>
  );
};

export default ComoFunciona; 