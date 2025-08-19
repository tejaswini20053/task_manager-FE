import { useState } from "react";

function TaskInput({onAdd}){
    const [value, setValue] = useState('');
    function handleSubmit(e){
        e.preventDefault();
        if (!value) return;
        onAdd(value);
        setValue('');

    }
    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={value}
            onChange={(e)=> setValue(e.target.value)}
            placeholder="Add the task.."
            />
            <button type="submit">Add</button>
            </form>
    );
}

export default TaskInput;