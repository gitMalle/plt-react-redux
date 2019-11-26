import React, { useEffect } from "react";
import { store } from "./store";
import { saveTodo, completeTodo } from "./actions";
import { useSelector } from "react-redux";

const App = () => {
  const title = useSelector(state => state.title);
  const completed = useSelector(state => state.completed);

  useEffect(() => {
    const fetchTodo = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const jsonData = await res.json();
      store.dispatch(saveTodo(jsonData));
    };
    fetchTodo();
    store.subscribe(() => console.log(store.getState()));
  }, []);

  const handleClick = () => {
    store.dispatch(completeTodo());
  };

  return (
    <div>
      <h2>{title}</h2>
      <h3>{`Completed: ${completed}`}</h3>
      <button onClick={handleClick}>COMPLETE TODO</button>
      <p>See console for state changes</p>
    </div>
  );
};

export default App;
