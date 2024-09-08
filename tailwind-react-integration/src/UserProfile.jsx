import React from "react";
function UserProfile() {
  return (
    <div className="user-profile sm:p-4 md:p-8 sm:max-w-xs sm:max-w-sm bg-gray-100 p-8 max-w-sm mx-auto, my-20 rounded-lg shadow-lg ">
      <img className="sm:w-24 h-24 md: rounded-full w-36 h-36 mx-auto" src="https://via.placeholder.com/150" alt="User" />
      <h1 className="sm:text-lg md:text-xl text-xl text-blue-800 my-4">John Doe</h1>
      <p className="sm:text-sm md:w-36 h-36 text-base text-gray-600 text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;