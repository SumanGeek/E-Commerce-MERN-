import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mt-4 flex grow items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center">Login </h1>
        <form className="mt-4 max-w-md  mx-auto">
          <input type="email" placeholder="Enter Your Email" />
          <input type="password" placeholder="Enter Your Password" />
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
