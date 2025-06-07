import React from "react";

const Header = (props) => {
  const logoutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  };

  return (
    <div className="flex justify-between items-center bg-[#393E46] px-6 py-4 rounded-xl shadow">
      <h1 className="text-2xl font-semibold text-[#EEEEEE] leading-tight">
        Hello,
        <br />
        <span className="text-3xl font-medium text-[#00ADB5]">
          {props.data ? props.data.firstName : "admin"}
        </span>
      </h1>

      <button
        onClick={logoutUser}
        className="text-[#EEEEEE] bg-[#222831] border border-[#00ADB5] px-5 py-2 rounded-2xl 
                   hover:bg-[#00ADB5] hover:text-[#222831] transition-all duration-200 
                   text-base font-medium shadow-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
