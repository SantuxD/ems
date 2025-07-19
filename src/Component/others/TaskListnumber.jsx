import React from "react";

const TaskListnumber = () => {
  return (
    <div className="  flex mt-10 justify-between gap-5">
      <div className=" py-6 px-9 m-4 w-[50%] rounded-xl bg-violet-400">
        <h2 className="text-3xl font-semibold m-2">0</h2>
        <h3 className="text-xl font-medium flex ">New Task</h3>
      </div>

      <div className=" py-6 px-9 m-4 w-[50%] rounded-xl bg-red-400">
        <h2 className="text-3xl font-semibold m-2">1</h2>
        <h3 className="text-xl font-medium flex ">New Task</h3>
      </div>

      <div className=" py-6 px-9 m-4 w-[50%] rounded-xl bg-blue-400">
        <h2 className="text-3xl font-semibold m-2">2</h2>
        <h3 className="text-xl font-medium flex ">New Task</h3>
      </div>

      <div className=" py-6 px-9 m-4 w-[50%] rounded-xl bg-green-400">
        <h2 className="text-3xl font-semibold m-2">3</h2>
        <h3 className="text-xl font-medium flex ">New Task</h3>
      </div>
    </div>
  );
};

export default TaskListnumber;
