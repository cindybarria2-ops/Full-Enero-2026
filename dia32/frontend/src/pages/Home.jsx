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
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Lista de tareas</h1>

      {taskList.map(task => (
        <div key={task._id} className="border p-4 mb-3 rounded">

          <h3 className="font-semibold">{task.title}</h3>
          <p>{task.description}</p>

          <p className={task.completed ? "text-green-600" : "text-red-500"}>
            {task.completed ? "Completada" : "Pendiente"}
          </p>

          <div className="flex gap-2 mt-2">
            <button
              onClick={() => toggleTask(task)}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              Estado
            </button>

            <Link to={`/edit/${task._id}`}>
              <button className="bg-yellow-500 text-white px-2 py-1 rounded">
                Editar
              </button>
            </Link>

            <button
              onClick={() => deleteTask(task._id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
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