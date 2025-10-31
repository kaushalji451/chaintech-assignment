import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userData = location.state;
  const [user, setUser] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // get all the user from localstorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    //find the user with matching email id
    const foundUser = storedUsers.find(u => u.email === userData);
    // if user found
    if (foundUser) {
      setUser(foundUser);
    } else {
      // if not found redirect to login page
      navigate("/login");
    }
  }, [navigate, userData]);

  if (!user) return null;

// handle edit profile button that redirect to editprofile page with data
  let handleEditProfile = () => {
    navigate("/EditProfile", { state: user });
  }

  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-200 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-xl p-8 w-96 space-y-6">
        <h1 className="text-2xl font-bold text-center text-blue-600">User Profile</h1>
        {/* username */}
        <div className="flex flex-col space-y-2">
          <label className="font-semibold text-gray-700">Username</label>
          <p className="border border-gray-300 rounded px-3 py-2 bg-gray-50">{user.username}</p>
        </div>
        {/* email id */}
        <div className="flex flex-col space-y-2">
          <label className="font-semibold text-gray-700">Email</label>
          <p className="border border-gray-300 rounded px-3 py-2 bg-gray-50">{user.email}</p>
        </div>
        {/* password */}
        <div className="flex flex-col space-y-2">
          <label className="font-semibold text-gray-700">Password</label>
          <div className="flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              value={user.password}
              readOnly
              className="border border-gray-300 rounded-l px-3 py-2 w-full bg-gray-50"
            />
            {/* show password button */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="bg-blue-600 text-white px-3 py-2 rounded-r hover:bg-blue-700"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {/* edit profile button */}
          <button onClick={handleEditProfile} className='bg-blue-600 text-white px-3 py-2 rounded-r hover:bg-blue-700 mt-4'>
            Edit Profile
          </button>

        </div>
      </div>
    </div>
  );
};

export default Profile;
