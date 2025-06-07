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
    <div className="p-5 mt-2 rounded-xl  bg-[#393E46] text-[#EEEEEE] w-full shadow-md">
      <h2 className="text-xl font-bold mb-3">Add Employee</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-[#222831] p-5 rounded-xl"
      >
        <div>
          <label htmlFor="firstName" className="block mb-1 text-sm font-medium">
            Name:
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="px-3 py-2 w-full rounded bg-[#393E46] text-[#EEEEEE] border border-[#00ADB5] focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-3 py-2 w-full rounded bg-[#393E46] text-[#EEEEEE] border border-[#00ADB5] focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1 text-sm font-medium">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="px-3 py-2 w-full rounded bg-[#393E46] text-[#EEEEEE] border border-[#00ADB5] focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
          />
        </div>

        <button
          type="submit"
          className="bg-[#00ADB5] text-[#EEEEEE] px-4 py-2 rounded hover:opacity-90 transition"
        >
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
