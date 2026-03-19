import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {

    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
        const res = await fetch("http://localhost:3000/tasks");
        const data = await res.json();
        setTasks(data);
    };

    const createTask = async (task) => {
        await fetch("http://localhost:3000/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task),
        });
        getTasks();
    };

    const deleteTask = async (id) => {
        await fetch(`http://localhost:3000/tasks/${id}`, {
            method: "DELETE",
        });
        getTasks();
    };

    const updateTask = async (id, updatedTask) => {
        await fetch(`http://localhost:3000/tasks/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedTask),
        });
        getTasks();
    };

    const toggleTask = async (task) => {
        await fetch(`http://localhost:3000/tasks/${task._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...task,
                completed: !task.completed
            }),
        });
        getTasks();
    };

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTask,
            updateTask,
            toggleTask
        }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;