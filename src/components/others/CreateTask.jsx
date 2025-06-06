import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const { employees, updatedEmployees } = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskTitle || !taskDescription || !taskDate || !asignTo || !category) {
      alert("Please fill all fields");
      return;
    }

    const NewupdatedEmployees = employees.map((emp) => {
      if (emp.firstName === asignTo) {
        return {
          ...emp,
          tasks: [
            ...emp.tasks,
            {
              taskTitle,
              taskDescription,
              taskDate,
              category,
              active: true,
              newTask: true,
              completed: false,
              failed: false,
            },
          ],
          taskCounts: {
            ...emp.taskCounts,
            newTask: emp.taskCounts.newTask + 1,
            active: emp.taskCounts.active + 1,
          },
        };
      }
      return emp;
    });

    updatedEmployees(NewupdatedEmployees);

    setTaskTitle("");
    setCategory("");
    setAsignTo("");
    setTaskDate("");
    setTaskDescription("");
  };

  return (
    <div className="p-5 mt-7 rounded bg-gray-400">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap items-start justify-between w-full"
      >
        <div className="w-1/2">
          <div>
            {" "}
            <h3 className="text-sm text-white mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-1  w-4/5 rounded outline-none bg-transparent px-2 border-[1px] border-gray-800 mb-4 "
              type="text"
              placeholder="create task"
            />
          </div>

          <div>
            {" "}
            <h3 className="text-sm text-white mb-0.5">date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-1  w-4/5 rounded outline-none bg-transparent px-2 border-[1px] border-gray-800 mb-4 "
              type="date"
            />
          </div>
          <div>
            {" "}
            <h3 className="text-sm text-white mb-0.5">assign to</h3>
            <select
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className="text-sm py-1  w-4/5 rounded outline-none bg-transparent px-2 border-[1px] border-gray-800 mb-4"
            >
              <option value="">select employee</option>
              {employees.map((emp, index) => {
                return (
                  <option key={index} value={emp.firstName}>
                    {emp.firstName}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <h3 className="text-sm text-white mb-0.5">category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-1  w-4/5 rounded outline-none bg-transparent px-2 border-[1px] border-gray-800 mb-4 "
              type="text"
              placeholder="dev app"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start ">
          <h3 className="text-sm text-white mb-0.5">description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-800 "
            name=""
            id=""
          ></textarea>

          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 rounded text-sm mt-4 w-full">
            create task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
