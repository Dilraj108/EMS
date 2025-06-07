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
              active: false,
              newTask: true,
              completed: false,
              failed: false,
            },
          ],
          taskCounts: {
            ...emp.taskCounts,
            newTask: emp.taskCounts.newTask + 1,
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
    <div className="p-6 mt-7 rounded-xl bg-[#393E46] text-[#EEEEEE] w-full shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Create New Task</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap justify-between gap-6"
      >
        {/* Left Side */}
        <div className="w-full md:w-[48%]">
          <div className="mb-4">
            <label className="block mb-1 text-sm">Task Title</label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder="Enter task title"
              className="w-full px-3 py-2 rounded bg-[#222831] border border-[#00ADB5] text-[#EEEEEE] outline-none focus:ring-2 focus:ring-[#00ADB5]"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm">Date</label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              className="w-full px-3 py-2 rounded bg-[#222831] border border-[#00ADB5] text-[#EEEEEE] outline-none focus:ring-2 focus:ring-[#00ADB5]"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm">Assign To</label>
            <select
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className="w-full px-3 py-2 rounded bg-[#222831] border border-[#00ADB5] text-[#EEEEEE] outline-none focus:ring-2 focus:ring-[#00ADB5]"
            >
              <option value="">Select Employee</option>
              {employees.map((emp, index) => (
                <option key={index} value={emp.firstName}>
                  {emp.firstName}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="e.g. Web Dev"
              className="w-full px-3 py-2 rounded bg-[#222831] border border-[#00ADB5] text-[#EEEEEE] outline-none focus:ring-2 focus:ring-[#00ADB5]"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-[48%] flex flex-col">
          <label className="mb-1 text-sm">Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 px-3 py-2 rounded bg-[#222831] border border-[#00ADB5] text-[#EEEEEE] outline-none resize-none focus:ring-2 focus:ring-[#00ADB5]"
          ></textarea>

          <button
            type="submit"
            className="bg-[#00ADB5] text-[#EEEEEE] mt-5 py-3 rounded hover:opacity-90 transition"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
