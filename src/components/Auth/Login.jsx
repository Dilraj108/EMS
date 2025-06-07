import React, { useState } from "react";

const Login = ({ handlelogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const submitHandler = (e) => {
  e.preventDefault();
  const isValid = handlelogin(email, password);
  if (!isValid) {
    alert("Invalid email or password!");
  }
  setEmail("");
  setPassword("");
};


  return (
    <div className="flex justify-center items-center h-screen bg-[#222831]">
      <div className="bg-[#393E46] p-10 rounded-2xl shadow-xl w-[400px] border border-[#00ADB5] ring-1 ring-[#00ADB5]">
        <form onSubmit={submitHandler} className="flex flex-col gap-6">
          <h2 className="text-[#EEEEEE] text-2xl text-center font-semibold">
             Login
          </h2>

          <input
            className="w-full text-[#EEEEEE] placeholder:text-[#CCCCCC] py-2 px-4 rounded-md outline-none border border-[#00ADB5] bg-transparent focus:ring-2 focus:ring-[#00ADB5]"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="w-full text-[#EEEEEE] placeholder:text-[#CCCCCC] py-2 px-4 rounded-md outline-none border border-[#00ADB5] bg-transparent focus:ring-2 focus:ring-[#00ADB5]"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-transparent text-[#EEEEEE] border border-[#00ADB5] rounded-md py-2 px-6 hover:bg-[#00ADB5] hover:text-[#222831] transition-all duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
