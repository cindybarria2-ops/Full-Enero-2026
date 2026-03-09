import React, { useState, useRef, useEffect } from "react";

function ContadorConPrevio() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(null);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  const incrementar = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Contador actual: {count}</h2>
      <h3>Contador anterior: {prevCount.current}</h3>

      <button onClick={incrementar}>
        Incrementar
      </button>
    </div>
  );
}

export default ContadorConPrevio;