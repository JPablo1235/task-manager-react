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

        {/* Texto en la esquina inferior izquierda */}
        <div
          style={{
            position: "fixed",
            bottom: 10,
            left: 10,
            fontSize: "12px",
            opacity: 0.8,
            background: "white",
            padding: "5px 10px",
            borderRadius: "6px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
          }}
        >
          Universidad de La Salle <br />
          Presentado por: Juan Pablo Sanchez Nieto
        </div>
      </div>
    </TaskProvider>
  );
}
