import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function Home() {

  const { tasks } = useContext(TaskContext);

  return (
    <div className="p-8">
      <h1>
        Lista de tareas
      </h1>
      {tasks.map(task => (
        <div key={task._id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>{task.completed ? "Completada" : "Pendiente"}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;