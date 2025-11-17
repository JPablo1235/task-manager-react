import { useState, useContext } from "react";
import { TaskContext } from "../context/taskContext";


export default function TaskForm() {
const { addTask } = useContext(TaskContext);
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [dueDate, setDueDate] = useState("");
const [priority, setPriority] = useState("media");


const handleSubmit = (e) => {
e.preventDefault();


addTask({ title, description, dueDate, priority });
setTitle("");
setDescription("");
setDueDate("");
setPriority("media");
};


return (
<form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
<input
type="text"
placeholder="Título"
value={title}
onChange={(e) => setTitle(e.target.value)}
required
/>
<br />
<textarea
placeholder="Descripción"
value={description}
onChange={(e) => setDescription(e.target.value)}
/>
<br />
<input
type="date"
value={dueDate}
onChange={(e) => setDueDate(e.target.value)}
/>
<br />
<select value={priority} onChange={(e) => setPriority(e.target.value)}>
<option value="alta">Alta</option>
<option value="media">Media</option>
<option value="baja">Baja</option>
</select>
<br />
<button type="submit">Agregar Tarea</button>
</form>
);
}