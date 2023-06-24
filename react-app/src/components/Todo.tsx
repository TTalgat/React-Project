import React from "react";
import { TodoType } from "../types/Todo.types";

interface Props {
  todo: TodoType;
  index: number;
  handleDelete: (id: number) => void;
}

const Todo: React.FC<Props> = ({ todo, index, handleDelete }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.completed ? "line-through" : "" }}
    >
      {todo.title}
      <div>
        <button onClick={() => handleDelete(index)}>Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
