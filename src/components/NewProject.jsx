import { useRef } from "react"; 
import Input from "./Input";

export default function NewProject({onAdd}) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    };

    return (
        <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li>
            <button className="text-stone-800 hover:text-stone-950 border-2 rounded-md px-6 py-2 hover:border-stone-900">cancel</button>
            </li>
            <li>
            <button 
            className="px-6 py-2 rounded-md bg-stone-800 hover:bg-stone-900 text-stone-50"
            onClick={handleSave}
            >save</button>
            </li>
        </menu>
            <div>
                <Input type='text' ref={title} label='title' />
                <Input ref={description} label='Description' textarea/>
                <Input type='date' ref={dueDate} label='Due Date' />
            </div>
        </div>
    );
}