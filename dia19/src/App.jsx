import React from "react";
import ListaFrutas from "./components/ListaFrutas";
import ListaTareas from "./components/ListaTareas";

function App() {
  const frutas = ["Manzana", "Banana", "Naranja", "Mango"];

  const tareas = [
    { nombre: "Estudiar React", completada: true },
    { nombre: "Hacer ejercicio", completada: false },
    { nombre: "Leer un libro", completada: true },
  ];

  return (
    <div>
      <ListaFrutas frutas={frutas} />
      <ListaTareas tareas={tareas} />
    </div>
  );
}

export default App;
