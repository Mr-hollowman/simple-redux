import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, deleteTodo, updateTodo } from "./redux/CounterSlice";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const myTodo = useSelector((state) => state.myTodo);

  const [add, setTodo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({
    id: "",
    todo: "",
    todoError: null,
  });

  const { id, todo, todoError } = data;
  const update = () => {
    if (todo === "") {
      setData({ ...data, todoError: "you have to write something" });
      return;
    }
    dispatch(updateTodo({ todo, id }));
    setIsEditing(false);
  };

  const onEdit = (id, todo) => {
    setIsEditing(true);
    setData({
      ...data,
      id,
      todo,
    });
  };
  
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      [`${e.target.name}Error`]: null,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo(add));
    e.target.reset();
  };
  return (
    <div className="App">
      {isEditing ? (
        <div>
          <input
            type={"text"}
            value={todo}
            name="todo"
            onChange={handleChange}
          />
          <button onClick={() => update()}>update</button>
          {todoError ? <div>{todoError}</div> : null}
        </div>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <input type={"text"} onChange={(e) => setTodo(e.target.value)} />
            <button type="submit">Add Todo</button>
          </form>
          {myTodo.map((item) => {
            return (
              <div key={item.id}>
                <span>{item.id}. </span>
                <span>{item.todo}</span>
                <button onClick={() => dispatch(deleteTodo(item.id))}>
                  delete
                </button>
                <button onClick={() => onEdit(item.id, item.todo)}>Edit</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;


