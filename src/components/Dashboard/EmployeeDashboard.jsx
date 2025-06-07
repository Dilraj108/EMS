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
  const onMarkAccepted = (taskIndex) => {
  const updatedTasks = loggedInUser.tasks.map((task, index) => {
    if (index === taskIndex) {
      return {
        ...task,
        newTask: false,
        active: true,
        completed: false,
        failed: false,
      };
    }
    return task;
  });

  const updatedUser = {
    ...loggedInUser,
    tasks: updatedTasks,
    taskCounts: {
      ...loggedInUser.taskCounts,
      newTask: loggedInUser.taskCounts.newTask - 1,
      active: loggedInUser.taskCounts.active + 1,
    },
  };

  const updatedEmployeesList = employees.map((emp) =>
    emp.id === updatedUser.id ? updatedUser : emp
  );

  updatedEmployees(updatedEmployeesList);
  setLoggedInUser(updatedUser); // update UI immediately
};


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
    setLoggedInUser(updatedUser); 
  };
   const onMarkFailed = (taskIndex) => {
    const updatedTasks = loggedInUser.tasks.map((task, index) => {
      if (index === taskIndex) {
        return {
          ...task,
          active: false,
          completed: false,
          failed: true,
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
        failed: loggedInUser.taskCounts.failed + 1,
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
    setLoggedInUser(updatedUser); 
  };
  
  if (!loggedInUser) return <div className="text-white p-5">Loading...</div>;

  return (
    <div className="p-10 bg-[#222831] text-white h-screen">
      <Header changeUser={props.changeUser} data={loggedInUser} />
      <TaskListItem data={loggedInUser} />
      <TaskList data={loggedInUser} onMarkCompleted={onMarkCompleted} onMarkFailed={onMarkFailed} onMarkAccepted={onMarkAccepted}/>
    </div>
  );
};

export default EmployeeDashboard;
