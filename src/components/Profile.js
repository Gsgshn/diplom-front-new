import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

function Profile() {
  const user = {
    name: 'Иван Иванов',
    email: 'user@example.com',
    avatar: 'https://via.placeholder.com/150'
  };

  const navigate = useNavigate();

  const handleSettingsClick = () => {
    navigate('/settings');
  };

  const handleUserListClick = () => {
    navigate('/users');
  };

  return (
    <div className="profile">
      <img src={user.avatar} alt="avatar" className="profile-avatar" />
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <button className="settings-button" onClick={handleSettingsClick}>Настройки</button>
      
    </div>
  );
}

export default Profile;
