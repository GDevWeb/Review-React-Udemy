import { useState } from "react";
import TaskList from "./TaskList";
function TaskForm() {
  // 1.State :
  // State pour la liste des tâches :
  const [tasks, setTasks] = useState([
    { id: "00", taskName: "Déposer les filles à l'école" },
    { id: "01", taskName: "Cours de développement web" },
    { id: "02", taskName: "Déjeuner avec les filles" },
  ]);

  // State pour le nom de la tâche et la validation du formulaire :
  const [taskName, setTaskName] = useState("");
  const [showValidation, setShowValidation] = useState(false);

  // 2.Comportement :
  // Setter le nom de la tâche :
  const handleInput = (e) => {
    const taskNameValue = e.target.value;
    setTaskName(taskNameValue);
    setShowValidation(false); // Réinitialiser la validation lorsqu'un changement est détecté dans l'input
  };

  // Soumission du formulaire :
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted !");

    // Validation du formulaire :
    if (taskName.trim() === "") {
      setShowValidation(true);
      return;
    }

    // Ajout d'une tâche à la liste :
    const id = new Date().getTime();
    const newTask = { id: id.toString(), taskName: taskName };
    setTasks([...tasks, newTask]);

    // Reset du formulaire :
    setTaskName("");
  };

  // Suppression de la tâche :
  const handleDelete = (taskId, taskName) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    console.log(`Suppression de la tâche : ${taskName}`);
  };

  //3. Render :
  return (
    <>
      <h1>La To-do liste</h1>
      <form id="formToDoList" onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label htmlFor="taskName">Ajouter une tâche à faire</label>
          <input
            type="text"
            id="taskName"
            placeholder="nom de la tâche"
            value={taskName}
            onChange={handleInput}
          />
          {showValidation && (
            <p className="invalidInput">Ajouter du contenu pour la tâche</p>
          )}
          <button>Ajouter</button>
        </div>
      </form>
      <TaskList tasks={tasks} task={taskName} handleDelete={handleDelete} />
    </>
  );
}

export default TaskForm;
