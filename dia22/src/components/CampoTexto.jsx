import React, { useState } from "react";

function CampoTexto() {
  const [texto, setTexto] = useState("");

  const manejarCambio = (event) => {
    setTexto(event.target.value);
  };

  return (
    <div>
      <h2>Escribe algo:</h2>

      <input
        type="text"
        value={texto}
        onChange={manejarCambio}
        placeholder="Escribe aquí..."
      />

      <p>Texto actual: {texto}</p>
    </div>
  );
}

export default CampoTexto;