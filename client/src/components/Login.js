import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:4000/login", { email, password });
    } catch {
      alert("Login Failed");
    }
  };
  return (
    <div className="mt-4 flex grow items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center">Login </h1>
        <form className="mt-4 max-w-md  mx-auto" onSubmit={handleLogin}>
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
            Don't have an Account yet?{" "}
            <Link to={"/register"} className="underline text-black ">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
