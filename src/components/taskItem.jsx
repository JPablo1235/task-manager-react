import { useContext } from "react";
import { TaskContext } from "../context/taskContext";


export default function TaskItem({ task }) {
const { deleteTask, completeTask } = useContext(TaskContext);


return (
<div style={{ border: "1px solid #ccc", padding: 10, marginTop: 10 }}>
<h3>{task.title}</h3>
<p>{task.description}</p>
<p>⏳ Vence: {task.dueDate}</p>
<p>📌 Prioridad: {task.priority}</p>
<p>📍 Estado: {task.status}</p>


{task.status !== "completada" && (
<button onClick={() => completeTask(task.id)}>✔ Completar</button>
)}


<button onClick={() => deleteTask(task.id)}>🗑 Eliminar</button>
</div>
);
}