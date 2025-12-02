import { use, useState } from "react";
import Stylecard from "./Stylecard";
import { Car } from "lucide-react";
import Card from "./Card";
import Task from "./Task";
const Main = ({ Promisfetch }) => {
  const data = use(Promisfetch);

  const [task, settask] = useState([]);

  const Handelclick = (item) => {
    // task statuse e data patabo
    const Newtask = [...task, item];
    settask(Newtask);
  };
console.log(task)
  return (
    <>
      <Card
      Totaltask ={task.length}
      ></Card>
      <div className="w-11/12 mx-auto py-20 grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-8 ">
          <h1 className="text-3xl font-semibold text-gray-800">
            Customer Tickets
          </h1>
          <h2 className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            {data.map((item) => (
              <Stylecard
                Handelclick={Handelclick}
                item={item}
                key={item.id}
              ></Stylecard>
            ))}
          </h2>
        </div>

        <div className="lg:col-span-4 space-y-4">
          <div className=" h-50 p-5">
            <h1 className="text-3xl font-semibold text-gray-800">
              Task Status
            </h1>
            {
              task.map(item=> (<Task key={item.id} item={item}></Task>))
            }
          </div>
          <div className="shadow-xl h-50 p-5">
            <h1 className="text-3xl font-semibold text-gray-800">
              Resolved Task
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
