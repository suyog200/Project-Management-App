import NewTask from "./NewTask";

export default function Task({ tasks, onAdd, onDelete}) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      NEW TASK
      <NewTask onAdd={onAdd}/>
      {tasks.length == 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any task yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-2 mt-8 rounded bg-stone-200">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-5">
              <span>{task.text}</span>
              <button className="text-stone-700 hover:text-red-500" onClick={() => onDelete(task.id)}>Clear</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
