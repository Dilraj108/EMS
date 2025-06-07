import React from 'react';

const FailedTask = ({ data }) => {
  return (
    <div className="bg-[#393E46] shrink-0 h-[300px] w-[300px] rounded-3xl p-4 text-[#EEEEEE] flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center">
          <h2 className="bg-[#00ADB5] px-2 py-1 rounded text-xs font-medium">{data.category}</h2>
          <h3 className="text-sm">{data.taskDate}</h3>
        </div>
        <h1 className="mt-4 text-xl font-semibold break-words">{data.taskTitle}</h1>
        <p className=" no-scrollbar text-sm mt-2 text-[#DDDDDD] break-words whitespace-pre-wrap overflow-y-auto max-h-[100px] pr-1">
          {data.taskDescription}
        </p>
      </div>
      <div className="flex justify-center mt-4 h-12 items-center">
        <button className="bg-[#F44336] px-3 py-1 text-sm rounded-full w-full hover:opacity-90 transition">
          Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
