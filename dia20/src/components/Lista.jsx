import React from "react";
const Lista = () => {
const listadeTareas = [{ id: 1, texto: "Hacer ejercicio" }, { id: 2, texto: "Leer un libro" }, { id: 3, texto: "Aprender React" }]
    const [tareas, setTareas] = React.useState( listadeTareas)
     const botonEliminarTarea = (id) => {
        setTareas(tareas.filter(tarea => tarea.id !== id))
    }
     
   
    return (
        <>
        <ul className="list-disc pl-5">
            {tareas.map((tarea) => (
                <li key={tarea.id} className="mb-2">{tarea.texto} 
                <button onClick={() => botonEliminarTarea(tarea.id)} className="ml-2 px-2 py-1 bg-red-500 text-white rounded">Eliminar</button></li>
            ))}
        </ul>
        </>
    );
}

export default Lista;