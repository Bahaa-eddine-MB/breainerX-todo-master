import { Calendar, SquarePen, Trash } from "lucide-react";
import { useState } from "react";
import EditModal from "../Global/EditToDoModal";
import api from "../../lib/axiosApi";

const TodoCard = ({
  title,
  description,
  priority,
  date,
  isCompleted,
  setTasks,
  id,
}) => {
  const [completed, setCompleted] = useState(isCompleted);

  const [show, setShow] = useState(false);

  async function deleteTask() {
    try {
      await api.delete(`/tasks/${id}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (error) {
      console.log("Error deleting task:", error);
    }
  }

  async function updateIsCompletedTask() {
    try {
      await api.put(
        `/tasks/${id}`,
        {
          ...{
            title,
            description,
            priority,
            date,
          },
          isCompleted: !completed,
        }
      );
      setTasks((prevTasks) =>
        prevTasks.map((task) => (id === task._id ? { ...task, isCompleted: !completed } : task))
      );
      setCompleted(!completed);
    } catch (error) {
      console.log("Error updating task:", error);
    }
  }

  return (
    <>
      {show && (
        <EditModal
          id={id}
          setTasks={setTasks}
          date={date}
          description={description}
          priority={priority}
          title={title}
          setShowModel={setShow}
        />
      )}
      <div
        className={`${
          completed && "opacity-70"
        } flex flex-col gap-6 px-6 py-4 bg-white border-[1.5px] border-gray-300 rounded-md`}
      >
        <div className="flex justify-between items-center">
          <div className="grid grid-cols-2  gap-2 items-center">
            <input
              className="row-span-2 h-6"
              type="checkbox"
              name="done"
              checked={completed}
              id="done"
              onChange={() => {
                updateIsCompletedTask();
              }}
            />
            <h3
              className={`${
                completed ? "line-through" : ""
              } font-semibold text-xl`}
            >
              {title}
            </h3>
            <p className={`${completed ? "line-through" : ""} `}>
              {description}
            </p>
          </div>
          <aside className="flex gap-4 items-center">
            <SquarePen
              onClick={() => setShow(!show)}
              className="transition-all duration-300 hover:cursor-pointer w-8 h-8 hover:bg-gray-200 p-2 rounded-md"
              size={16}
            />
            <Trash
              onClick={() => {
                deleteTask();
              }}
              className="text-red transition-all duration-300 hover:cursor-pointer w-8 h-8 hover:bg-gray-200 p-2 rounded-md"
              size={16}
            />
          </aside>
        </div>
        <div className="flex items-center justify-start pl-8 gap-8">
          <span
            className={`${
              priority === "high"
                ? " text-[#991b1b] bg-[#fecaca] border-red"
                : priority === "medium"
                ? "text-orange bg-accent-orange border-orange"
                : "bg-accent-green text-green border-green"
            } px-4  text-sm hover:cursor-pointer  border-[1.5px] rounded-full `}
          >
            {priority}
          </span>
          <p className="flex items-center gap-2 text-gray-500">
            {" "}
            <Calendar size={16} /> {date}
          </p>
        </div>
      </div>
    </>
  );
};

export default TodoCard;
