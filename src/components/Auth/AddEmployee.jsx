import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AddEmployee = ({ closeForm }) => {
  const [formData, setformData] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const { employees, updatedEmployees } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, email, password } = formData;

    if (!firstName || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    const newid =
      employees.length > 0 ? employees[employees.length - 1].id + 1 : 1;

    const newEmployee = {
      id: newid,
      ...formData,
      tasks: [],
      taskCounts: {
        active: 0,
        newTask: 0,
        completed: 0,
        failed: 0,
      },
    };

    const updatedEmployeesList = [...employees, newEmployee];
    updatedEmployees(updatedEmployeesList);

    alert("Employee added successfully!");
    setformData({
      firstName: "",
      email: "",
      password: "",
    });
    if (closeForm) {
      closeForm();
    }
  };

  return (
    <div className="p-5 mt-7 rounded bg-red-400 w-full">
      <h2 className="text-xl font-bold mb-3">Add Employee</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 bg-amber-200 p-4 rounded"
      >
        <div>
          <label htmlFor="firstName">Name:</label>
          <br />
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="px-2 py-1 w-full"
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-2 py-1 w-full"
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="px-2 py-1 w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-white text-black px-4 py-2 rounded hover:bg-gray-100"
        >
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
