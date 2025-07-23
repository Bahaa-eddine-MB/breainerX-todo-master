import "./style.css"

const Button = ({ onClick, text, Icon, isLoading }) => {
  return (
    <button
      onClick={onClick}
      className="transition-all hover:opacity-80 duration-700 bg-primary text-white flex items-center justify-center py-[6px]  px-4  gap-4 rounded-lg"
    >
      {isLoading ? <span className="loader"></span> : Icon}{" "}
      {isLoading ? "Loading" : text}
    </button>
  );
};

export default Button;
