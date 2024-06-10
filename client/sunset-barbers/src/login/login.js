import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login credentials:', credentials);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl bg-white" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <div>
          <label htmlFor="username" className="text-sm font-medium">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={credentials.username}
            onChange={handleChange}
            className="block w-full px-4 py-2 mt-2 border rounded-md focus:border-blue-400 focus:ring-blue-300"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={credentials.password}
            onChange={handleChange}
            className="block w-full px-4 py-2 mt-2 border rounded-md focus:border-blue-400 focus:ring-blue-300"
            required
          />
        </div>
        <button type="submit" className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring">
          Sign in
        </button>
        <p className="mt-4 text-sm text-center">
          Don't have an account? 
          <Link to="/register" className="text-blue-600 hover:underline">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
