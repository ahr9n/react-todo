import * as React from "react";
import {
  FaRegEdit,
  FaRegSave,
  FaRegTrashAlt,
  FaRegCheckSquare,
  FaRegSquare,
} from "react-icons/fa";
import { RiCalendarTodoFill } from "react-icons/ri";
import { Button } from "./Button";
import { Input } from "./Input";
import BasicModal from "./BasicModal";

export function TodoItem({
  item,
  todos,
  setTodoList,
  todoText,
  todoEdit,
  setTodoText,
  handleSave,
  handleEdit,
}) {
  const [complete, setComplete] = React.useState(false);
  const [removeId, setRemoveId] = React.useState("");
  const [show, setShow] = React.useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleClickRemove = (todo) => {
    setRemoveId(todo.id);
    setShow(true);
  };

  const handleRemoveTrue = () => {
    setTodoList(todos.filter((todo) => todo.id !== removeId));
    setShow(false);
  };

  function handleSetComplete() {
    setComplete(!complete);
  }

  return (
    <li className="border-gray-400 flex flex-row mb-2" key={item.id}>
      <BasicModal
        show={show}
        handleRemove={handleRemoveTrue}
        handleClose={handleClose}
      />
      <div className="bg-gray-200 rounded-md flex flex-1 items-center p-4 hover:bg-gray-100 transition duration-500 ease-in-out">
        <div className="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">
          <RiCalendarTodoFill
            size={20}
            className="hover:fill-white transition duration-300 ease-in-out"
          />
        </div>
        {todoEdit === item.id ? (
          <div className="flex-1 content-between">
            <Input
              className="w-full h-12 px-4 py-1 rounded-md border border-gray-100 text-gray-800 focus:outline-none"
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
              placeholder={item.name}
            />
            <FaRegSave
              className="w-full h-8 px-4 py-1 rounded-md my-3 bg-green text-white hover:bg-opacity-90"
              onClick={() => handleSave(item.id)}
            ></FaRegSave>
          </div>
        ) : (
          <>
            <div className="flex-1 pl-1 mr-16">
              <div
                className={`font-medium ${
                  complete ? "line-through text-green" : ""
                }`}
              >
                {item.name}
              </div>
            </div>
            <div className="text-gray-600 text-xs">{item.createdAt}</div>
            <Button onClick={() => handleEdit(item.id, item.name)}>
              <FaRegEdit size={16} className="w-8" />
            </Button>
            <Button onClick={() => handleSetComplete(item.id)}>
              {complete ? (
                <FaRegCheckSquare size={16} className="w-8 fill-green" />
              ) : (
                <FaRegSquare
                  size={16}
                  className="w-8 hover:fill-dark-green transition duration-300 ease-in-out"
                />
              )}
            </Button>
            <Button
              type="submit"
              className="ml-2"
              onClick={() => handleClickRemove(item)}
            >
              <FaRegTrashAlt
                size={16}
                className="hover:fill-red transition duration-300 ease-in-out"
              />
            </Button>
          </>
        )}
      </div>
    </li>
  );
}
