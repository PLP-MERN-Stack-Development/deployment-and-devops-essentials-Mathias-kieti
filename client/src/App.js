// client/src/App.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Replace with your backend API URL
    const API_URL = process.env.REACT_APP_API_URL;

    axios
      .get(`${API_URL}/api/users`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("API Error:", err));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Hello MERN Frontend!</h1>
      <h2>Users from backend:</h2>
      {users.length === 0 ? (
        <p>No users found or loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
