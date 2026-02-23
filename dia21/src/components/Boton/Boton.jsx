import React from "react";
const Boton = ({ onClick, label }) => {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onClick}>
      {label}
    </button>
  );
}
export default Boton;