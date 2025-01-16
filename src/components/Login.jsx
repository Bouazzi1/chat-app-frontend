import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';
    import { FaUser, FaLock, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
    
    function Login({ onLogin }) {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const navigate = useNavigate();
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onLogin();
        navigate('/');
      };
    
      return (
        <div className="flex justify-center items-center h-screen bg-background dark:bg-background-dark">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 w-96 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary to-secondary opacity-20 transform skew-y-6 -translate-y-1/4"></div>
            <h2 className="text-2xl font-bold mb-6 text-text dark:text-text-dark text-center relative z-10">Login</h2>
            <form onSubmit={handleSubmit} className="relative z-10">
              <div className="mb-4">
                <label className="block text-text dark:text-text-dark text-sm font-bold mb-2 flex items-center" htmlFor="username">
                  <FaUser className="mr-2" />
                  Username / Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-text dark:text-text-dark leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700"
                  id="username"
                  type="text"
                  placeholder="Username / Email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-text dark:text-text-dark text-sm font-bold mb-2 flex items-center" htmlFor="password">
                  <FaLock className="mr-2" />
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-text dark:text-text-dark leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button
                  className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline flex items-center"
                  type="submit"
                >
                  Log In Now
                  <span className="ml-2 text-xl">&gt;</span>
                </button>
              </div>
              <div className="text-center text-gray-500 dark:text-gray-400 mt-4">
                <p className="mb-2">log in via</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                    <FaInstagram size={20} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                    <FaFacebook size={20} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                    <FaTwitter size={20} />
                  </a>
                </div>
              </div>
              <div className="text-center mt-4">
                <a href="/register" className="inline-block align-baseline font-bold text-sm text-primary hover:text-primary-dark">
                  Register
                </a>
              </div>
            </form>
          </div>
        </div>
      );
    }
    
    export default Login;
