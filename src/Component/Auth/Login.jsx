import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submitHandler = (e) => {
    console.log("Form submitted...");
    e.preventDefault();
    console.log("email:", email);
    console.log("password:", password);

    setemail("");
    setpassword("");
  };
  return (
    <div className="flex w-screen items-center justify-center h-screen ">
      <div className="border-2 border-violet-500 rounded-lg p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col justify-center items-center gap-4 p-4"
        >
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className=" outline: none bg-transparent border-2 rounded-full py-3 px-5 placeholder:text-gray-400 border-violet-300 text-xl"
            type="email"
            placeholder="Enter your email"
            required
          />
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="outline:none bg-transparent border-2 rounded-full py-3 px-5 placeholder:text-gray-400 border-violet-300 text-xl"
            type="password"
            placeholder="Enter password"
            required
          />
          <button className="rounded-full py-3 w-full border-none text-xl text-white outline-none bg-violet-400  hover:bg-violet-500 cursor-pointer mt-5">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
