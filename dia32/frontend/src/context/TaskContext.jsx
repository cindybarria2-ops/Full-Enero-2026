import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {

    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
        const res = await fetch("http://localhost:3000/tasks");
        const data = await res.json();
        setTasks(data);
    };

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <TaskContext.Provider value={{ tasks }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;