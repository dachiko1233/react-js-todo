import { useState } from "react";

export default function TodoInout(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;
  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter ToDo..."
      />

      <button
        onClick={() => {
          if (!todoValue.trim()) return;
          handleAddTodos(todoValue);
        }}
      >
        Add
      </button>
    </header>
  );
}
