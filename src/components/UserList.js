import React, { useState, useEffect } from 'react';
import './UserList.css';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://localhost:7247/api/Account/GetAllAccount`);
            setUsers(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching documents:', error);
        }           
    };
    fetchData();
}, []); 

  return (
    <div className="user-list">
      <h2>Список пользователей</h2>
      <div className="user-cards">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <p><strong>Имя:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
