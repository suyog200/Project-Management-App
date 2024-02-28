import Input from "./Input";

export default function NewProject() {
    return (
        <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li>
            <button className="text-stone-800 hover:text-stone-950 border-2 rounded-md px-6 py-2 hover:border-stone-700">cancel</button>
            </li>
            <li>
            <button className="px-6 py-2 rounded-md bg-stone-800 hover:bg-stone-900 text-stone-50">save</button>
            </li>
        </menu>
            <div>
                <Input label='title' />
                <Input label='Description' textarea/>
                <Input label='Due Date' />
            </div>
        </div>
    );
}