import React, { useState } from "react";

const Login = ({handlelogin}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    handlelogin(email, password);
    
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex justify-center items-center h-screen bg-green-50">
      <div className="border-2  p-20 rounded-3xl  border-emerald-300 bg-black">
        <form
          action=""
          onSubmit={submitHandler}
          className="flex flex-col justify-evenly items-center h-96 w-96"
        >
          <input
            className="border-2 rounded-full border-emerald-300 py-2 text-center outline-none text-xl bg-transparent text-white placeholder:text-white"
            type="email"
            placeholder="enter your email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="border-2 rounded-full border-emerald-300 py-2 text-center outline-none text-xl bg-transparent text-white placeholder:text-white"
            type="password"
            placeholder="enter your password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name="password"
          />
          <button
            className="border-2 rounded-full border-emerald-300 py-2 px-5 w-48 mb-0  text-center outline-none text-xl bg-transparent text-white placeholder:text-white hover:bg-emerald-300 hover:text-black transition-all duration-100"
            type="submit"
          >
            login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
