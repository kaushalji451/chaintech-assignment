import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const EditProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userData = location.state;
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!userData) {
      navigate("/profile");
    }
  }, [userData, navigate]);


  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      username: userData?.username || '',
      email: userData?.email || '',
      password: userData?.password || '',
    },
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    try {
      // get all user from localstorage
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

      // find the index of the cureent user using email id 
      const userIndex = storedUsers.findIndex(u => u.email === userData.email);

      if (userIndex !== -1) {
        // update the user infomation
        storedUsers[userIndex] = data;

        // save user into the localstorage
        localStorage.setItem("users", JSON.stringify(storedUsers));

        alert("Profile updated successfully");
        navigate("/profile", { state: data.email });
      } else {
        alert("User not found!");
      }
    } catch (error) {
      // if some error the show the alert and console it
      console.error("Error updating profile:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-200 min-h-screen flex items-center justify-center">
      <form className="bg-white shadow-xl rounded-xl p-8 w-96 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-2xl font-bold text-center text-blue-600">Edit Profile</h1>
        {/* username filed */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="username" className="font-semibold text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            {...register("username", { required: "Username is required" })}
            placeholder="Enter your username"
            className="border border-gray-300 rounded px-3 py-2 bg-gray-50"
          />
          {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
        </div>
        {/* email id field */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="font-semibold text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Email Id is required" })}
            placeholder="Enter your email"
            className="border border-gray-300 rounded px-3 py-2 bg-gray-50"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>
        {/* password field */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="password" className="font-semibold text-gray-700">Password</label>
          <div className="flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password", { required: "Password is required" })}
              className="border border-gray-300 rounded-l px-3 py-2 w-full bg-gray-50"
            />
            {/* hide or show the password */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="bg-blue-600 text-white px-3 py-2 rounded-r hover:bg-blue-700"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
        </div>
        {/* submit button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 mt-4"
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
