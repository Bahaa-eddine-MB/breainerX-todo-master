import { useRef, useEffect, useState } from "react";
import Input from "./Input";
import DropDownMenu from "./DropDownMenu";
import { X } from "lucide-react";

const EditModal = ({
  setShowModel,
  title,
  description,
  priority,
  date,
  setTasks,
  id
}) => {
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

  const [newTask, setNewTask] = useState({
    title: title || "",
    description: description || "",
    priority: priority || "Low",
    date: date || "",
    id: id || Date.now().toLocaleString(),
  });

  return (
    <div className=" z-50 fixed inset-0  overflow-hidden w-screen h-screen bg-black bg-opacity-45">
      <div
        ref={selectRef}
        className="bg-white rounded-lg shadow-md p-8 flex flex-col  gap-2 justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
      >
        <div className="flex justify-between items-center">
          <h4 className="text-2xl font-bold">Edit Task</h4>{" "}
          <X
            className="hover:cursor-pointer"
            size={16}
            onClick={() => {
              setShowModel(false);
            }}
          />
        </div>

        <p className="text-gray-500">
          Create a new task to add to your todo list.
        </p>
        <Input
          value={newTask.title}
          label={"Title"}
          placeholder={"Enter Task title"}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <div className="flex flex-col ">
          <label className="text-sm pb-2" htmlFor={"description"}>
            Description
          </label>
          <textarea
            value={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
            className="border-[1.5px] border-gray-400 rounded-md px-3 py-2 w-full"
            id={"description"}
            placeholder={"Enter Task description"}
          ></textarea>
          <div className="flex gap-4 mt-4">
            <DropDownMenu
              label={"Priority"}
              defaultTitle={newTask.priority}
              options={["Low", "Medium", "High"]}
              onOptionChose={(option) => {
                setNewTask({ ...newTask, priority: option });
              }}
            />
            <Input
              value={newTask.date}
              label={"Due Date"}
              type={"date"}
              placeholder={"Enter Due Date"}
              onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
            />
          </div>

          <button onClick={() => {
            setTasks((prevTasks) =>
              prevTasks.map((task) =>
                id === task.id ? newTask : task
              )
            );
            setShowModel(false);
          }} className="bg-black rounded-lg px-4 py-2  text-white self-end mt-8 transition-all duration-500 hover:opacity-70">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
