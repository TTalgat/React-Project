import Headings from "./components/Headings";
import Button from "./components/Button";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Todo from "./components/Todo";
import './App.css';
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<any>(null);

  interface Todo {
    title: string;
    id: number;
    completed: boolean;
  }

  const handleDelete = (index: number) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
}

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,region,area")
      .then((response) => response.json())
      .then((res) => setTodos(res.slice(0, 10)))
      .catch((err) => setError(err));
  }, []);

  return (
    <div className="container">
      <Headings />
      <br />
      <Button onClick={() => console.log("Clicked")}>Success</Button>
      <br />
      {todos.length > 0 ? (
        todos.map((todo: Todo, index) => <Todo todo={todo} index = {index}handleDelete={handleDelete }/>)
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
