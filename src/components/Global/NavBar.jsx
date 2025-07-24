import { User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";


const NavBar = () => {
      const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center    px-[10%] py-4 bg-white shadow-lg sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <h1 className="text-primary font-bold text-2xl">TodoMaster</h1>
        <div className="flex items-center gap-2 text-gray-600">
          <User />
          Welcome, Bahaa Eddine
        </div>
      </div>

      <button
        onClick={() => {
          navigate("/sign-in");
        }}
        className="transition-all duration-500 hover:bg-gray-200 flex items-center gap-2 border-[1.5px] text-sm text-gray-700 border-gray-400 rounded-md px-4 py-2"
      >
        <LogOut size={16} /> LogOut
      </button>
    </header>
  );
};

export default NavBar;
