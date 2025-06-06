import React, { useState } from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";
import AddEmployee from "../Auth/AddEmployee";

const AdminDashboard = (props) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };
  const closeForm = () => {
    setShowForm(false);
  }
  return (
    <div className="h-screen p-7 w-full bg-gray-300">
      <Header changeUser={props.changeUser} />
      <button onClick={toggleForm} className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">
        {showForm ? "Hide Add Employee Form" : "Show Add Employee Form"}
      </button>
         <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          showForm ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <AddEmployee closeForm={closeForm} />
      </div>
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
