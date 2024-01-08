import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleUser = () => {
    axios.post("/register", name, email, password);
  };
  return (
    <div className="mt-4 flex grow items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center">Register </h1>
        <form className="mt-4 max-w-md  mx-auto" onSubmit={handleUser}>
          <input
            type="email"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-600">
            All ready Have an account?{" "}
            <Link to={"/login"} className="underline text-black ">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
