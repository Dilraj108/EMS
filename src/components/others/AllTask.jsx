import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const { employees } = useContext(AuthContext);

  return (
    <div className="bg-[#393E46] p-5 mt-5 rounded-xl max-h-80 text-[#EEEEEE] shadow-md">
      
      <div className="bg-[#00ADB5] py-2 px-4 rounded-t-md flex justify-between font-semibold text-sm sticky top-0 z-10">
        <h2 className="w-1/5">Employee Name</h2>
        <h3 className="w-1/5 text-center">New</h3>
        <h5 className="w-1/5 text-center">Active</h5>
        <h5 className="w-1/5 text-center">Completed</h5>
        <h5 className="w-1/5 text-center">Failed</h5>
      </div>

     
      <div className="max-h-64 overflow-y-auto no-scrollbar">
        {employees.map((item, index) => (
          <div
            key={index}
            className="bg-[#222831] py-2 px-4 flex justify-between items-center text-sm mb-2 rounded"
          >
            <h2 className="w-1/5 truncate">{item.firstName}</h2>
            <h3 className="w-1/5 text-center text-yellow-400">
              {item.taskCounts.newTask}
            </h3>
            <h5 className="w-1/5 text-center text-blue-400">
              {item.taskCounts.active}
            </h5>
            <h5 className="w-1/5 text-center text-green-400">
              {item.taskCounts.completed}
            </h5>
            <h5 className="w-1/5 text-center text-red-500">
              {item.taskCounts.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
