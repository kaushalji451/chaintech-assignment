import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Signup = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setloading] = useState(false);

    // handle the form Submit
    const onSubmit = (data) => {
        setloading(true);
        try {
            // get existing user from localstorage
            const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

            // check if the user email id allredy exist or not
            const emailExists = storedUsers.some(user => user.email === data.email);

            // if email allredy exist
            if (emailExists) {
                alert("Email already used! Please try another one.");
                setloading(false);
                return;
            }

            // if not exist then add the user
            const updatedUsers = [...storedUsers, data];

            // save updated list back to the localstorage
            localStorage.setItem("users", JSON.stringify(updatedUsers));

            alert("Signup successful!");
            navigate("/profile", { state: data.email });

        } catch (error) {
            // if any error the show alert and console it
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
                <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Sign Up</h1>
                {/* username field */}
                <div className="flex flex-col">
                    <label htmlFor="username" className="font-medium">Username</label>
                    <input
                        type="text"
                        id="username"
                        {...register("username", { required: "Username is required" })}
                        placeholder="Enter your username"
                        className="border border-gray-300 rounded px-3 py-2"
                    />
                    {errors.username && <span className="text-red-600 text-sm">{errors.username.message}</span>}
                </div>
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
                {/* handle Submit button */}
                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full rounded-lg px-5 py-2.5 mt-4 font-medium text-white transition-all duration-200 
                       ${loading
                            ? "bg-slate-400 cursor-not-allowed opacity-70"
                            : "bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
                        }`}
                >
                    {loading ? "Submitting..." : "Signup"}
                </button>
                {/* login redirect button */}
                <div className='text-center'>
                    <p>Allredy Have an Account? &nbsp;
                        <Link to="/login" className='text-blue-500 underline'>Login</Link>
                    </p>
                </div>

            </form>
        </div>
    )
}

export default Signup
