import { useRef, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

function NewTask() {
    const titleRef = useRef();
    const descriptionRef = useRef();

    const { createTask } = useContext(TaskContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newTask = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            completed: false
        };

        await createTask(newTask);

        navigate("/");
    };

    return (
        <div className="p-8">
            <h1>Nueva tarea</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título:</label>
                    <input type="text" ref={titleRef} />
                </div>
                <div>
                    <label>Descripción:</label>
                    <textarea ref={descriptionRef}></textarea>
                </div>
                <button type="submit">Crear tarea</button>
            </form>
        </div>
    );
}

export default NewTask;