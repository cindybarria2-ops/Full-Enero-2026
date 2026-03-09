import React, { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Escribe algo..."
      />
      <button onClick={handleFocus}>
        Enfocar input
      </button>
    </div>
  );
}

export default InputFocus;