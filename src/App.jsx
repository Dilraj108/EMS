import React, { useContext, useState, useEffect } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";
import { setLocalStorage } from "./utils/LocalStorage";

const App = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const {employees} = useContext(AuthContext);
  

  useEffect(() => {
  if (!localStorage.getItem("employees") || !localStorage.getItem("admin")) {
    setLocalStorage();
  }

  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    try {
      const parsedUser = JSON.parse(loggedInUser);
      setUser(parsedUser.role);
      setIsLoggedIn(parsedUser.data);
    } catch (error) {
      console.error("Failed to parse loggedInUser:", error);
      localStorage.removeItem("loggedInUser"); 
    }
  }
}, []);

const handleLogin = (email, password) => {
  if (email === "admin@example.com" && password === "123") {
    console.log("admin");
    setUser("admin");
    localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    return true;
  } else if (employees && employees.length > 0) {
    const employee = employees.find(
      (emp) => emp.email === email && emp.password === password
    );
    if (employee) {
      console.log("employee");
      setIsLoggedIn(employee);
      setUser("employee");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee })
      );
      return true;
    }
  }

  return false;
};


  return (
    <>
      {!user ? <Login handlelogin={handleLogin} /> : ""}
      {user === "admin" ? (
        <AdminDashboard changeUser={setUser}/>
      ) : user === "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={isLoggedIn} />
      ) : (
        ""
      )}
    </>
  );
};

export default App;
