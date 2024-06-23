import React, { useState } from 'react';
import './ProfileSettings.css';

function ProfileSettings() {
  const [name, setName] = useState('Иван Иванов');
  const [email, setEmail] = useState('user@example.com');
  const [avatar, setAvatar] = useState('https://via.placeholder.com/150');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь вы можете отправить данные на сервер для сохранения
    setMessage('Настройки сохранены');
  };

  return (
    <form onSubmit={handleSubmit} className="profile-settings-form">
      <h2>Настройки профиля</h2>
      <div className="form-group">
        <label>Имя:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Ссылка на аватар:</label>
        <input
          type="url"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
      </div>
      <button type="submit" className="save-button">Сохранить</button>
      {message && <p className="message">{message}</p>}
    </form>
  );
}

export default ProfileSettings;
