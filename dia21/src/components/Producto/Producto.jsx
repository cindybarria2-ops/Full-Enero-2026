import React from "react";
const Producto = ({ productName, precio }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ul className="text-4xl font-bold mb-4">
        <li className="text-lg mb-2">Nombre: {productName}</li>
        <li className="text-lg mb-2">Precio: ${precio}</li>
      </ul>
    </div>
  );
}
export default Producto;