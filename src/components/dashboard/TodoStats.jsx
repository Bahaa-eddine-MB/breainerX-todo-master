const TodoStats = ({ title, count, Icon,color }) => {
  return (
    <div className={`flex items-center justify-between bg-white p-6 border-[1.5px] border-gray-300 rounded-lg w-[20%]`}>
      <div>
        <h2 className= "text-gray-500">{title}</h2>
        <p className={`${color} text-3xl font-semibold`}>{count}</p>
      </div>

      {Icon}
    </div>
  );
};

export default TodoStats;
