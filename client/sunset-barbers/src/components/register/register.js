import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

function registerForm(){
    const [registercredentials, setRegisterCredentials] = useState({ username: '', password: '' });

    function handleRegistration(e) {
        const { name, value } = e.target;
        setRegisterCredentials(prevState => ({
          ...prevState,
          [name]: value
        }));
      }
    
    
      function handleRegistrationSubmit(e){
        e.preventDefault();
        navigate('/login');
      }

      
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl bg-white" onSubmit={handleRegistrationSubmit}>
          <h1 className="text-2xl font-bold text-center">Register</h1>
          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
            <input type="text" id="username" name="username" required className="block w-full p-2.5 mb-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your username" onChange={handleRegistration} />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
            <input type="password" id="password" name="password" required className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your password" onChange={handleRegistration} />
          </div>
          <button type="submit" className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg">Register</button>
        </form>
      </div>
    </>
  );
}

export default RegisterForm;