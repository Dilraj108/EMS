import React from "react";

const AcceptTask = ({ data , index,onMarkCompleted}) => {
  console.log(data);
  return (
    <div className="bg-amber-400 shrink-0 h-full w-[300px] rounded-3xl p-2 r  ">
      <div className="flex justify-between items-center ">
        <h2 className=" bg-amber-600 px-2 py-1 rounded text-sm">
          {data.category}
        </h2>
        <h3 className="text-sm">{data.taskDate}</h3>
      </div>
      <h1 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h1>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="flex justify-between mt-5  h-12 items-center">
        <button onClick={()=>onMarkCompleted(index)} className="bg-green-500 px-2 py-1 text-sm rounded-full hover:bg-green-800 transition-colors duration-300">
          completed
        </button>
        <button className="bg-red-500 px-2 py-1 text-sm rounded-full">
          failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
