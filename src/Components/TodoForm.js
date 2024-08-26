import { useState } from "react";
import { useTodoContext } from "../Providers/Todoprovider";

//Add new todo items
const TodoForm = () => {
    const { getNumberOfTodoItems, addTodo} = useTodoContext();
    // storing the value of input field
    const [todoItem, setTodoItem] = useState("");
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (!todoItem) {
            return;
        }
        addTodo(todoItem);
        setTodoItem("");
    }
    return (
        <form onSubmit={handleOnSubmit}>
            <h3>Number of todo items: {getNumberOfTodoItems}</h3>
            <input type="text"
                value={todoItem}
                onChange={(e) => setTodoItem(e.target.value)}
            />
            {/* submit form */}
            <button type="submit">Submit</button>
        </form>
    );
}

export default TodoForm;