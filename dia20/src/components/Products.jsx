import React from "react";

const Products = () => {
    const products = [{ id: 1, nombre: "Laptop", precio: 1200 }, { id: 2, nombre: "Celular", precio: 800 }, { id: 3, nombre: "Tablet", precio: 500 }]
   
   const filterProduct = products.filter(product => product.precio > 700)
    return (
        <>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>  
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Nombre</th>
            <th className="py-2 px-4 border-b">Precio</th>
          </tr>
        </thead>
        <tbody>
          {filterProduct.map((product) => (
            <tr key={product.id}>
              <td className="py-2 px-4 border-b">{product.id}</td>
              <td className="py-2 px-4 border-b">{product.nombre}</td>
              <td className="py-2 px-4 border-b">${product.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>

        </>
    );
}

export default Products;
