const Task = ({ item , Handelbutton}) => {
  
  return (
    <div className="space-y-5 shadow-xl p-5">
      <h1 className="text-xl font-semibold mt-3">{item.title}</h1>
      <button onClick={()=>Handelbutton(item)} className="text-white text-xl bg-green-500 w-full py-2 rounded-xl">
        Complete
      </button>
    </div>
  );
};

export default Task;
