import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setloading] = useState(false);

  // handleSubmit Button
  const onSubmit = (data) => {
    setloading(true);
    try {
      // get existing user from localstorage
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

      // check the user exist or not 
      const useExist = storedUsers.some(user => user.email === data.email && user.password == data.password);

      // if user exist
      if (useExist) {
        alert("Login successful!");
        navigate("/profile", { state: data.email });
      } else {
        alert("Inter the Currect Email id or Password.");
      }
    } catch (error) {
      // if any error then show alert and console it
      console.error("Error saving user:", error);
      alert("Something went wrong while saving!");
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-200 min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-xl rounded-xl p-8 space-y-4 w-96"
      >
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Login</h1>
        {/* email id field */}
        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
            })}
            placeholder="Enter your email"
            className="border border-gray-300 rounded px-3 py-2"
          />
          {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
        </div>
        {/* password field */}
        <div className="flex flex-col">
          <label htmlFor="password" className="font-medium">Password</label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Password must be at least 6 characters long" }
            })}
            placeholder="Enter your password"
            className="border border-gray-300 rounded px-3 py-2"
          />
          {errors.password && <span className="text-red-600 text-sm">{errors.password.message}</span>}
        </div>
        {/* submit button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full rounded-lg px-5 py-2.5 mt-4 font-medium text-white transition-all duration-200 
            ${loading
              ? "bg-slate-400 cursor-not-allowed opacity-70"
              : "bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
            }`}
        >
          {loading ? "Submitting..." : "Login"}
        </button>
        {/* signup page redirect button */}
        <div className='text-center'>
          <p>Dont Have an Account? &nbsp;
            <Link to="/" className='text-blue-500 underline'>Signup</Link>
          </p>
        </div>

      </form>
    </div>
  )
}

export default Login
