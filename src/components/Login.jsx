import React from 'react';

const Login = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 via-purple-800 to-black text-white py-10 px-6 text-center rounded-lg mt-10">
      <h2 className="text-3xl font-semibold mb-6">Login</h2>
      
      <form className="space-y-6">
        <div>
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-3 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        
        <div>
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-3 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        
        <div>
          <input 
            type="text" 
            placeholder="Phone" 
            className="w-full p-3 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        
        <button className="w-full bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-md font-semibold">
          Enroll
        </button>
      </form>
    </div>
  );
};

export default Login;
