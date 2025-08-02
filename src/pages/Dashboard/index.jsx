import TodoCard from "../../components/dashboard/TodoCard";
import TodoStats from "../../components/dashboard/TodoStats";
import DropDownMenu from "../../components/Global/DropDownMenu";
import Model from "../../components/Global/Model";
import NavBar from "../../components/Global/NavBar";
import { CircleCheck, Circle, Clock3, Calendar, Plus } from "lucide-react";
import { useState,useEffect } from "react";
import api from "../../lib/axiosApi";

const DashboardPage = () => {
  const [showModel, setShowModel] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All Tasks");


  async function fetchTasks() {
    try {
      
      const result = await api.get(
        `tasks`
      );
      
      setTasks(result.data);
      
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }

  useEffect(() => {
    fetchTasks();
  },[])




  return (
    <>
      <NavBar />
      <main className="bg-background  px-[10%] ">
        {showModel && <Model setTasks={setTasks} setShowModel={setShowModel} />}
        <div className="container mx-auto">
          <section className="flex  items-center gap-8 justify-between pt-16">
            <TodoStats
              Icon={<Circle size={34} className="text-primary" />}
              title="Total Tasks"
              count={tasks.length}
              color="text-black"
            />
            <TodoStats
              Icon={<CircleCheck size={34} className="text-green" />}
              title="Completed"
              count={tasks.filter((task) => task.isCompleted).length}
              color="text-green"
            />
            <TodoStats
              Icon={<Clock3 size={34} className="text-orange" />}
              title="Pending"
              count={tasks.filter((task) => !task.isCompleted).length}
              color="text-orange"
            />
            <TodoStats
              Icon={<Calendar size={34} className="text-red" />}
              title="High Priority"
              count={tasks.filter((task) => task.priority === "high").length}
              color="text-red"
            />
          </section>
          <section className="pt-12 flex justify-between items-center">
            <DropDownMenu
              options={["All Tasks", "Pending", "Completed", "High Priority"]}
              defaultTitle={"All Tasks"}
              onOptionChose={(option) => {
                setFilter(option);
              }}
            />
            <button
              onClick={() => {
                setShowModel(true);
              }}
              className="text-white bg-black rounded-lg px-4 py-2 flex items-center gap-2 hover:opacity-70 transition-all duration-700"
            >
              <Plus />
              Add Task
            </button>
          </section>
          <section className="mt-12 pb-16 flex flex-col gap-6">
            {tasks
              .filter((task) => {
                if (filter === "All Tasks") return true;
                if (filter === "Pending") return !task.isCompleted;
                if (filter === "Completed") return task.isCompleted;
                if (filter === "High Priority") return task.priority === "high";
              })
              .map((task) => (
                <TodoCard
                  key={task._id}
                  id={task._id}
                  title={task.title}
                  setTasks={setTasks}
                  description={task.description}
                  priority={task.priority}
                  date={task.date}
                  isCompleted={task.isCompleted}
                />
              ))}
          </section>
        </div>
      </main>
    </>
  );
};

export default DashboardPage;
