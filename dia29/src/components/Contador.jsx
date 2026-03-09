import React, { useState, useRef, useEffect } from "react";

function ContadorConRenders() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>

      <p>Número de renders: {renderCount.current}</p>
    </div>
  );
}

export default ContadorConRenders;