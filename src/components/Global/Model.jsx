import { useRef, useEffect } from "react";
import Input from "./Input";
import DropDownMenu from "./DropDownMenu";

const Model = ({ setShowModel }) => {
  const selectRef = useRef(null);
  function handleClickOutside(event) {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setShowModel(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className=" z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen bg-black bg-opacity-45">
      <div
        ref={selectRef}
        className="bg-white rounded-lg shadow-md p-8 flex flex-col  gap-2 justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
      >
        <h4 className="text-2xl font-bold">Add New Task</h4>
        <p className="text-gray-500">
          Create a new task to add to your todo list.
        </p>
        <Input label={"Title"} placeholder={"Enter Task title"} />
        <div className="flex flex-col ">
          <label className="text-sm pb-2" htmlFor={"description"}>
            Description
          </label>
          <textarea
            className="border-[1.5px] border-gray-400 rounded-md px-3 py-2 w-full"
            id={"description"}
            placeholder={"Enter Task description"}
          ></textarea>
          <div className="flex gap-4 mt-4">
            <DropDownMenu
              label={"Priority"}
              options={["Low", "Medium", "High"]}
            />
            <Input
              label={"Due Date"}
              type={"date"}
              placeholder={"Enter Due Date"}
            />
          </div>

          <button className="bg-black rounded-lg px-4 py-2  text-white self-end mt-8 transition-all duration-500 hover:opacity-70">
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model;
