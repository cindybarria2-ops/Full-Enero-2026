import React from "react";

const Usuarios = () => {
    const usuarios = [{ id: 1, nombre: "Juan", edad: 25 }, { id: 2, nombre: "María", edad: 30 }, { id: 3, nombre: "Pedro", edad: 20 }]
const buscarUsuario = () => {
    const input = document.querySelector("input");
    const nombre = input.value;
    const usuario = usuarios.find(u => u.nombre === nombre);
    console.log(usuario);
}

    return (
        <>
           <input type="text" placeholder="Buscar usuario..." className="mb-4 p-2 border border-gray-300 rounded-lg w-full"></input>
           <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={buscarUsuario}>Buscar</button> 
           <table className="min-w-full bg-white border border-gray-200">   
        <thead>
            <tr>    
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Nombre</th>
            <th className="py-2 px-4 border-b">Edad</th>
            </tr>
        </thead>
        <tbody>
            {usuarios.map((usuario) => (
            <tr key={usuario.id}>
                <td className="py-2 px-4 border-b">{usuario.id}</td>
                <td className="py-2 px-4 border-b">{usuario.nombre}</td>
                <td className="py-2 px-4 border-b">{usuario.edad}</td>
            </tr>
            ))}
        </tbody>
        </table>
        </>
    );
}   

export default Usuarios;