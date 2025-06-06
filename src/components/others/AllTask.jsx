import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const data = useContext(AuthContext);
  console.log("data", data.employees);
  return (
    <div className="bg-gray-400 p-5 mt-5 rounded h-48 overflow-auto ">
      <div className="bg-red-400 py-2 px-4 rounded mb-2 flex justify-between text-white ">
        <h2 className=" text-lg font-medium w-1/5 ">Employee name</h2>
        <h3 className=" text-lg font-medium w-1/5 ">New task</h3>
        <h5 className=" text-lg font-medium w-1/5 ">Active task</h5>
        <h5 className=" text-lg font-medium w-1/5 ">Completed task</h5>
        <h5 className=" text-lg font-medium w-1/5 ">Failed task</h5>
      </div>
      <div>
        {data.employees.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-red-400 py-2 px-4 rounded mb-2 flex justify-between "
            >
              <h2 className="text-lg font-medium  w-1/5 ">{item.firstName}</h2>
              <h3 className="text-lg font-medium  w-1/5 text-blue-600">{item.taskCounts.active}</h3>
              <h5 className="text-lg font-medium  w-1/5 text-yellow-700">{item.taskCounts.newTask}</h5>
              <h5 className="text-lg font-medium  w-1/5 text-white">{item.taskCounts.completed}</h5>
              <h5 className="text-lg font-medium  w-1/5 text-red-700">{item.taskCounts.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
