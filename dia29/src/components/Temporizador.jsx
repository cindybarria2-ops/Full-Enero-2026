import React, { useState, useRef } from "react";

function Temporizador() {
  const [segundos, setSegundos] = useState(0);
  const intervalRef = useRef(null);

  const iniciar = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000);
  };

  const detener = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div>
      <h2>Segundos: {segundos}</h2>

      <button onClick={iniciar}>
        Iniciar
      </button>

      <button onClick={detener}>
        Detener
      </button>
    </div>
  );
}

export default Temporizador;