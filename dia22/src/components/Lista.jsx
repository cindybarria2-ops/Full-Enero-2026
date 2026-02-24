import React, { useState } from "react";

function Lista() {
  const [elementos, setElementos] = useState([]);
  const [nuevoElemento, setNuevoElemento] = useState("");

  const agregarElemento = () => {
    if (nuevoElemento.trim() === "") return;

    setElementos((prevElementos) => [...prevElementos, nuevoElemento]);
    setNuevoElemento("");
  };

  return (
    <div>
      <h2>Mi Lista</h2>

      <input
        type="text"
        value={nuevoElemento}
        onChange={(e) => setNuevoElemento(e.target.value)}
        placeholder="Escribe un elemento"
      />

      <button onClick={agregarElemento}>
        Agregar
      </button>

      <ul>
        {elementos.map((elemento, index) => (
          <li key={index}>{elemento}</li>
        ))}
      </ul>
    </div>
  );
}

export default Lista;