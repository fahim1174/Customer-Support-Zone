import { use, useState } from "react";
import Stylecard from "./Stylecard";
import Card from "./Card";
import Task from "./Task";
import { toast } from "react-toastify";
import Resolved from "./Resolved";
const Main = ({ Promisfetch }) => {
  const Alldata = use(Promisfetch);
const [data, setdata] = useState(Alldata)
  const [task, settask] = useState([]);
  const [resolved, setresolved] = useState([]);

  const Handelclick = (item) => {
    //  toast Cheak
    const cheak = task.find((data) => data.id == item.id);
    if (cheak) {
    toast("Repeat Progress !");
    return; 
  }
  toast("Progress In!");
  
    // task statuse e data patabo
    const Newtask = [...task, item];
    settask(Newtask);
  };

  const Handelbutton = (item) => {
    toast("Compleat !")
    //  Resolved e item patabo
    const Newresolved = [...resolved, item];
    setresolved(Newresolved);

    // task status diya delet korbo
    const Remaintask = task.filter((data) => data.id !== item.id);
    settask(Remaintask)

    // tickit diya remove
    const Remaindata = data.filter((data)=> data.id!== item.id)
    setdata(Remaindata)
  };
  return (
    <>
      <Card Totaltask={task.length} Totalresolved={resolved.length}></Card>
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

        <div className="lg:col-span-4 space-y-10">
          <div className="shadow p-5">
            <h1 className="text-3xl font-semibold text-gray-800">
              Task Status
            </h1>
            {task.map((item) => (
              <Task
                Handelbutton={Handelbutton}
                key={item.id}
                item={item}
              ></Task>
            ))}
          </div>
          <div className="shadow-xl p-5">
            <h1 className="text-3xl font-semibold text-gray-800">
              Resolved Task
            </h1>
            {
              resolved.map(item=>(<Resolved item={item}></Resolved>))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
