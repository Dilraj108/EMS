import React from "react";

const TaskListItem = ({ data }) => {
  return (
   <div className="flex justify-between bg-[#393E46] p-4 rounded-lg shadow-md mt-5 gap-5 ">
  <div className="bg-[#00ADB5] w-[45%] rounded-xl px-6 py-4 text-[#EEEEEE]">
    <h1 className="text-3xl font-bold">{data.taskCounts.newTask}</h1>
    <h2 className="text-2xl font-semibold">New Tasks</h2>
  </div>

  <div className="bg-[#00897B] w-[45%] rounded-xl px-6 py-4 text-[#EEEEEE]">
    <h1 className="text-3xl font-bold">{data.taskCounts.completed}</h1>
    <h2 className="text-2xl font-semibold">Completed</h2>
  </div>

  <div className="bg-[#F9A825] w-[45%] rounded-xl px-6 py-4 text-[#222831]">
    <h1 className="text-3xl font-bold">{data.taskCounts.active}</h1>
    <h2 className="text-2xl font-semibold">Accepted</h2>
  </div>

  <div className="bg-[#D32F2F] w-[45%] rounded-xl px-6 py-4 text-[#EEEEEE]">
    <h1 className="text-3xl font-bold">{data.taskCounts.failed}</h1>
    <h2 className="text-2xl font-semibold">Failed</h2>
  </div>
</div>

  );
};

export default TaskListItem;
