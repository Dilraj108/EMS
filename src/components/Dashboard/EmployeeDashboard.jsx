import React, { useContext, useEffect, useState } from "react";
import Header from "../others/Header";
import TaskListItem from "../others/TaskListItem";
import TaskList from "../TaskList/TaskList";
import { AuthContext } from "../../context/AuthProvider";

const EmployeeDashboard = (props) => {
  const { updatedEmployees, employees } = useContext(AuthContext);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const foundUser = employees.find((emp) => emp.id === props.data.id);
    if (foundUser) {
      setLoggedInUser(foundUser);
    }
  }, [employees]);

  const onMarkCompleted = (taskIndex) => {
    const updatedTasks = loggedInUser.tasks.map((task, index) => {
      if (index === taskIndex) {
        return {
          ...task,
          active: false,
          completed: true,
          failed: false,
          newTask: false,
        };
      }
      return task;
    });

    const updatedUser = {
      ...loggedInUser,
      tasks: updatedTasks,
      taskCounts: {
        ...loggedInUser.taskCounts,
        completed: loggedInUser.taskCounts.completed + 1,
        active: loggedInUser.taskCounts.active - 1,
        newTask: loggedInUser.tasks[taskIndex].newTask
          ? loggedInUser.taskCounts.newTask - 1
          : loggedInUser.taskCounts.newTask,
      },
    };

    const updatedEmployeesList = employees.map((emp) =>
      emp.id === updatedUser.id ? updatedUser : emp
    );

    updatedEmployees(updatedEmployeesList);
    setLoggedInUser(updatedUser); // update UI immediately
  };

  // Wait until loggedInUser is available
  if (!loggedInUser) return <div className="text-white p-5">Loading...</div>;

  return (
    <div className="p-10 bg-gray-600 h-screen">
      <Header changeUser={props.changeUser} data={loggedInUser} />
      <TaskListItem data={loggedInUser} />
      <TaskList data={loggedInUser} onMarkCompleted={onMarkCompleted} />
    </div>
  );
};

export default EmployeeDashboard;
