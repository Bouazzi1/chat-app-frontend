import React, { useState, useEffect } from 'react';
    import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
    import Login from './components/Login';
    import Register from './components/Register';
    import Chat from './components/Chat';
    import './App.css';
    
    function App() {
      const [isAuthenticated, setIsAuthenticated] = useState(false);
      const [theme, setTheme] = useState('light');
    
      useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
          setTheme(storedTheme);
        }
      }, []);
    
      useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
      }, [theme]);
    
      const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
      };
    
      const handleLogin = () => {
        setIsAuthenticated(true);
      };
    
      const handleLogout = () => {
        setIsAuthenticated(false);
      };
    
      return (
        <Router>
          <div className={`app ${theme === 'dark' ? 'dark' : ''}`}>
            <nav className="bg-gray-100 dark:bg-gray-800 p-4 flex justify-between items-center">
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">Chat App</h1>
              <button onClick={toggleTheme} className="text-gray-800 dark:text-white">
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              </button>
            </nav>
            <Routes>
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/register" element={<Register onRegister={handleLogin} />} />
              <Route path="/" element={isAuthenticated ? <Chat onLogout={handleLogout} /> : <Login onLogin={handleLogin} />} />
            </Routes>
          </div>
        </Router>
      );
    }
    
    export default App;
