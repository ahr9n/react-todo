import * as React from "react";

import { TodoItem } from "./TodoItem";

export function TodoList({ todos, setTodoList }) {
  const [todoEdit, setTodoEdit] = React.useState(null);
  const [todoText, setTodoText] = React.useState("");

  function handleEditTodo(id, name) {
    setTodoEdit(id);
    setTodoText(name);
  }

  function handleSaveTodo(id) {
    if (!todoText) return;
    let newTodoList = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.name = todoText;
      }
      return todo;
    });
    setTodoList(newTodoList);
    setTodoEdit(null);
  }

  return (
    <div className="container flex mx-auto w-full items-center justify-center">
      <ul className="flex flex-col p-4">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            item={todo}
            todos={todos}
            setTodoList={setTodoList}
            todoText={todoText}
            todoEdit={todoEdit}
            setTodoText={setTodoText}
            handleSave={handleSaveTodo}
            handleEdit={handleEditTodo}
          />
        ))}
      </ul>
    </div>
  );
}
