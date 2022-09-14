import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./actions/action";

function App() {
  const [counter, setCounter] = useState(0);
  const [todo, setTodo] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const todoSubmitHandler = () => {
    if (todo !== "") {
      dispatch(addTodo(counter, todo));
      setCounter(counter + 1);
      setTodo("");
    }
  };

  return (
    <div className="todoapp">
      <h1>Todo</h1>
      <div className="todo">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </div>
      <button onClick={todoSubmitHandler}>Add todo</button>
      <div className="todos">
        <ul>
          {todos?.map((todo) => (
            <li key={todo.id}>
              <p>{todo.task}</p>
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;