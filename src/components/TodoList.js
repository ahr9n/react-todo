import * as React from "react";

import { TodoItem } from "./TodoItem";

export function TodoList({ todos, handleRemoveTodo }) {
  return (
    <div className="container flex mx-auto w-full items-center justify-center">
      <ul className="flex flex-col p-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} item={todo} handleRemove={handleRemoveTodo} />
        ))}
      </ul>
    </div>
  );
}
