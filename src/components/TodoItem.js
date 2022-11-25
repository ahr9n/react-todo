import * as React from "react";
import { FaRegTrashAlt, FaRegCheckSquare, FaRegSquare } from "react-icons/fa";
import { RiCalendarTodoFill } from "react-icons/ri";
import { Button } from "./Button";

export function TodoItem({ item, handleRemove }) {
  const [complete, setComplete] = React.useState(false);
  function handleSetComplete() {
    setComplete(!complete);
  }

  return (
    <li className="border-gray-400 flex flex-row mb-2">
      <div className="bg-gray-200 rounded-md flex flex-1 items-center p-4 hover:bg-gray-100 transition duration-500 ease-in-out">
        <div className="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">
          <RiCalendarTodoFill
            size={20}
            className="hover:fill-white transition duration-300 ease-in-out"
          />
        </div>
        <div className="flex-1 pl-1 mr-16">
          <div
            className={`font-medium ${
              complete ? "line-through text-green" : ""
            }`}
          >
            {item.name}
          </div>
        </div>
        <div className="">
          <div className="text-gray-600 text-xs">{item.createdAt}</div>
          <div className="flex-1 content-between">
            <Button onClick={() => handleSetComplete(item.id)}>
              {complete ? (
                <FaRegCheckSquare size={16} className="fill-green" />
              ) : (
                <FaRegSquare
                  size={16}
                  className="hover:fill-dark-green transition duration-300 ease-in-out"
                />
              )}
            </Button>
            <Button
              type="submit"
              className="ml-2"
              onClick={() => handleRemove(item.id)}
            >
              <FaRegTrashAlt
                size={16}
                className="hover:fill-red transition duration-300 ease-in-out"
              />
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
}
