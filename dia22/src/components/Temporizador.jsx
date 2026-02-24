import React, { useState, useEffect } from "react";

function Temporizador() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos((prevSegundos) => prevSegundos + 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      <h2>Segundos transcurridos: {segundos}</h2>
    </div>
  );
}

export default Temporizador;