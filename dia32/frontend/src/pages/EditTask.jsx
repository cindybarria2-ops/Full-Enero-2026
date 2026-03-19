import { useContext, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";

function EditTask() {

    const { id } = useParams();
    const navigate = useNavigate();
    const { tasks, updateTask } = useContext(TaskContext);

    const task = tasks.find(t => t._id === id);

    const titleRef = useRef();
    const descriptionRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await updateTask(id, {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            completed: task.completed
        });

        navigate("/");
    };

    if (!task) return <p>Cargando...</p>;

    return (
        <div className="p-8">
            <h1>Editar tarea</h1>

            <form onSubmit={handleSubmit}>
                <input
                    defaultValue={task.title}
                    ref={titleRef}
                />

                <textarea
                    defaultValue={task.description}
                    ref={descriptionRef}
                />

                <button type="submit">Guardar cambios</button>
            </form>
        </div>
    );
}

export default EditTask;