import TodoStats from "../../components/dashboard/TodoStats";
import DropDownMenu from "../../components/Global/DropDownMenu";
import Model from "../../components/Global/Model";
import NavBar from "../../components/Global/NavBar";
import { CircleCheck, Circle, Clock3, Calendar, Plus } from "lucide-react";
import { useState } from "react";

const DashboardPage = () => {
  const [showModel,setShowModel] = useState(false);

  return (
    <>
      <NavBar />
      <main className="bg-background  px-[10%] ">
      {showModel && <Model setShowModel={setShowModel} />}
        <div className="container mx-auto">
          <section className="flex  items-center gap-8 justify-between pt-16">
            <TodoStats
              Icon={<Circle size={34} className="text-primary" />}
              title="Total Tasks"
              count={1}
              color="text-black"
            />
            <TodoStats
              Icon={<CircleCheck size={34} className="text-green" />}
              title="Completed

"
              count={1}
              color="text-green"
            />
            <TodoStats
              Icon={<Clock3 size={34} className="text-orange" />}
              title="Pending"
              count={1}
              color="text-orange"
            />
            <TodoStats
              Icon={<Calendar size={34} className="text-red" />}
              title="High Priority"
              count={1}
              color="text-red"
            />
          </section>
          <section className="pt-12 flex justify-between items-center">
            <DropDownMenu
              options={["All Tasks", "Pending", "Completed", "High Priority"]}
              onOptionChose={(option) => console.log(option)}
            />
            <button onClick={()=>{
              setShowModel(true);
            }} className="text-white bg-black rounded-lg px-4 py-2 flex items-center gap-2 hover:opacity-70 transition-all duration-700">
              <Plus />
              Add Task
            </button>
          </section>
          <section></section>
        </div>
      </main>
    </>
  );
};

export default DashboardPage;
