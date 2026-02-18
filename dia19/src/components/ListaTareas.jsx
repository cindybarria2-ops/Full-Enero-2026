const ListaTareas = ({ tareas }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto mt-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">
        Lista de Tareas
      </h2>

      {tareas.length === 0 ? (
        <p className="text-red-500 font-medium">
          No hay tareas disponibles
        </p>
      ) : (
        <ul className="space-y-2">
          {tareas.map((tarea, index) => (
            <li
              key={index}
              className={`px-4 py-2 rounded-lg flex justify-between items-center ${
                tarea.completada
                  ? "bg-blue-100 text-blue-800"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              <span
                className={`${
                  tarea.completada ? "line-through" : ""
                }`}
              >
                {tarea.nombre}
              </span>

              <span>
                {tarea.completada ? "✅" : "❌"}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaTareas;
