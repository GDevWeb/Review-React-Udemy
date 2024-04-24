import TaskItem from "./TaskItem";

function TaskList({ tasks, id, taskName, handleDelete }) {
  return (
    <ul className="taskList">
      {tasks.length > 0 ? (
        tasks.map((task) => <TaskItem key={task.id} task={task} />)
      ) : (
        <p>La liste des tâches est vide !</p>
      )}
    </ul>
  );
}

export default TaskList;
