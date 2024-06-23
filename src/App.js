import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavigationMenu from './components/NavigationMenu';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';
import ProfileSettings from './components/ProfileSettings';
import UserList from './components/UserList';
import RegistrationForm from './components/RegistrationForm'; // Добавляем импорт

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationMenu />
        <div className="main-content">
          <header className="App-header">
            <Routes>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegistrationForm />} /> {/* Добавляем маршрут для страницы регистрации */}
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<ProfileSettings />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
          </header>
        </div>
      </div>
    </Router>
  );
}

export default App;
