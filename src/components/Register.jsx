import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import app from "../firebase/firebase.config";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const auth = getAuth(app);

  const handleRegister = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      // navigat to login page
      navigate("/login");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Sign Up
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password:
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="Enter your Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 cursor-pointer"
          >
            Sign up
          </button>
        </form>

        {/* social login */}
        <div className='text-center space-y-4'>
          <p className=''>Or Signup With</p>
          <div className='flex justify-center items-center space-x-5'>
            <button className='flex justify-center items-center px-4 py-2 space-x-2 bg-red-500 hover:bg-red-600 rounded text-white cursor-pointer'><FaGoogle /><span>Google</span></button>
            <button className='flex justify-center items-center px-4 py-2 space-x-2 bg-blue-700 hover:bg-blue-800 rounded text-white cursor-pointer'><FaFacebook /><span>Facebook</span></button>
            <button className='flex justify-center items-center px-4 py-2 space-x-2 bg-gray-800 hover:bg-gray-900 rounded text-white cursor-pointer'><FaGithub /><span>Github</span></button>
          </div>
        </div>

        <p className="text-sm text-center text-gray-600">
          Alreary have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            {" "}
            Log In{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
