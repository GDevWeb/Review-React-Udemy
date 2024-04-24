function TaskItem({ task, id, handleDelete }) {
  return (
    <li key={task.id}>
      <p className="taskName">Nom de la tâche : {task.taskName}</p>
      <p onClick={() => handleDelete(task.id, task.taskName)}>❌</p>
    </li>
  );
}

export default TaskItem;
