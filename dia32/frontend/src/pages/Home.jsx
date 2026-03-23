import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { Link } from "react-router-dom";

function Home() {

  const { tasks, deleteTask, toggleTask } = useContext(TaskContext);

  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    setTaskList(tasks);
  }, [tasks]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Lista de tareas</h1>

      {taskList.map(task => (
        <div key={task._id} className="bg-white shadow-md rounded-lg p-5 mb-4 hover:shadow-lg transition">

          <h3 className="font-semibold text-lg text-gray-800">{task.title}</h3>
          <p className="text-gray-600 mt-1">{task.description}</p>

          <p className={task.completed
            ? "text-green-600 font-semibold mt-2"
            : "text-red-500 font-semibold mt-2"}>
            {task.completed ? "Completada" : "Pendiente"}
          </p>

          <div className="flex gap-2 mt-2">
            <button
              onClick={() => toggleTask(task)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition"
            >
              Estado
            </button>

            <Link to={`/edit/${task._id}`}>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded transition">
                Editar
              </button>
            </Link>

            <button
              onClick={() => deleteTask(task._id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}

      <Link to="/new-task">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Nueva tarea
        </button>
      </Link>
    </div>
  );
}

export default Home;