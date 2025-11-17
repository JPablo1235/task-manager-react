import TaskForm from "./components/taskForm";
import TaskList from "./components/taskList";
import { TaskProvider } from "./context/taskContext";


export default function App() {
return (
<TaskProvider>
<div style={{ width: "600px", margin: "auto", paddingTop: 30 }}>
<h1>Gestor de Tareas</h1>
<TaskForm />
<TaskList />
</div>
</TaskProvider>
);
}