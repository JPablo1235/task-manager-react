import { useContext, useState } from "react";
import { TaskContext } from "../context/taskContext";
import TaskItem from "./taskItem";


export default function TaskList() {
const { tasks } = useContext(TaskContext);
const [search, setSearch] = useState("");
const [filterStatus, setFilterStatus] = useState("");
const [filterPriority, setFilterPriority] = useState("");


const filtered = tasks.filter((t) => {
return (
(t.title.toLowerCase().includes(search.toLowerCase()) ||
t.description.toLowerCase().includes(search.toLowerCase())) &&
(filterStatus ? t.status === filterStatus : true) &&
(filterPriority ? t.priority === filterPriority : true)
);
});


return (
<div>
<h2>Mis tareas</h2>


<input
type="text"
placeholder="Buscar..."
value={search}
onChange={(e) => setSearch(e.target.value)}
/>


<select onChange={(e) => setFilterStatus(e.target.value)}>
<option value="">Estado</option>
<option value="pendiente">Pendiente</option>
<option value="completada">Completada</option>
</select>


<select onChange={(e) => setFilterPriority(e.target.value)}>
<option value="">Prioridad</option>
<option value="alta">Alta</option>
<option value="media">Media</option>
<option value="baja">Baja</option>
</select>


{filtered.map((task) => (
<TaskItem key={task.id} task={task} />
))}
</div>
);
}