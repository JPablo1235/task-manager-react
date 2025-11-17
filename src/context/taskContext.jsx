import { createContext, useState } from "react";


export const TaskContext = createContext();


export const TaskProvider = ({ children }) => {
const [tasks, setTasks] = useState([]);


const addTask = (task) => {
setTasks([...tasks, { ...task, id: Date.now(), status: "pendiente" }]);
};


const updateTask = (id, updatedTask) => {
setTasks(tasks.map((t) => (t.id === id ? { ...t, ...updatedTask } : t)));
};


const deleteTask = (id) => {
setTasks(tasks.filter((t) => t.id !== id));
};


const completeTask = (id) => {
setTasks(tasks.map((t) => (t.id === id ? { ...t, status: "completada" } : t)));
};


return (
<TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask, completeTask }}>
{children}
</TaskContext.Provider>
);
};