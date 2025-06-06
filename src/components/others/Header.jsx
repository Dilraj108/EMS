import React from "react";

const Header = ( props)=> {
  const logoutUser = () => {
    localStorage.setItem("loggedInUser","");
    props.changeUser("");
    
  };
  return (
    <>
      <div className="flex justify-between items-end ">
        <h1 className="text-2xl font-semibold">
          hello,
          <br /> <span className="text-3xl font-medium">{props.data?props.data.firstName:"admin"}</span>{" "}
        </h1>
        <button onClick={logoutUser} className="bg-red-600 text-2xl font-bold text-white p-4 border-2 rounded-2xl transition duration-150 ease-in-out">
          Logout
        </button>
      </div>
    </>
  );
};

export default Header;
