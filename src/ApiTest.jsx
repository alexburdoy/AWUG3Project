import React, { useEffect, useState } from 'react';
import './ApiTest.css';

// https://randomuser.me/api/?results=50

const URL_BASE = 'https://randomuser.me/api';

const User = ({ user }) => {
  return (
    <div className="user">
      <div className="avatar">
        <img src={user.picture.thumbnail} />
      </div>
      <div>
        <div className="name">
          {user.name.first} {user.name.last}
        </div>
        <div className="email">{user.email}</div>
      </div>
    </div>
  );
};

export default function ApiTest() {
  const [users, setUsers] = useState(null);

  const loadUsers = async () => {
    const response = await fetch(`${URL_BASE}/?results=50`);
    const json = await response.json();
    setUsers(json.results);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  if (users === null) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {users.map((user) => (
        <User user={user} />
      ))}
    </div>
  );
}
