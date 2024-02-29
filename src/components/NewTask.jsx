import { useState } from "react";

export default function NewTask({onAdd}) {
    const [enteredTask, setEnteredTask] = useState('');

    function handleTaskChange(event) {
        setEnteredTask(event.target.value);
        event.preventDefault();
    }

    function handleClick() {
        if(!enteredTask.trim()) return;
        onAdd(enteredTask);
        setEnteredTask('');
    }

    return (
        <div className="flex items-center gap-4">
            <input 
            type="text" 
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            value={enteredTask}
            onChange={handleTaskChange}
            />
            <button className="text-stone-700  hover:text-stone-950 font-bold" onClick={handleClick}>Add Task</button>
        </div>
    );
}