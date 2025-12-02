import { Calendar } from "lucide-react";

const Stylecard = ({ item,Handelclick }) => {


  return (
    <div
    onClick={()=>Handelclick(item)}
      className="mt-10 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] rounded-lg"
    >
      <div className="space-y-5 p-5">
        <div className="flex justify-between item-center">
          <h1 className="text-xl font-semibold">{item.title}</h1>
          <button className="rounded-xl px-3 py-1 bg-gray-400">
            {item.status}
          </button>
        </div>
        <p className="text-gray-500">{item.description}</p>
        <div className="flex justify-between item-center">
          <span className="flex gap-10">
            <h1 className="text-gray-500">#{item.id}</h1>
            <h1>{item.priority}</h1>
          </span>
          <span className="flex gap-10">
            <h1 className="text-gray-500">{item.assignee}</h1>
            <h1 className="text-gray-500 flex gap-1">
              <Calendar />
              {item.date}
            </h1>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Stylecard;
