import React, { useState, useEffect } from 'react';

const UserDataTable = ({ jsonFilePath }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(jsonFilePath)
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [jsonFilePath]);

  return (
    <table>
      <thead>
        <tr>
          <th>User ID</th>
          <th>Log In Time</th>
          <th>Flow Completed</th>
          <th>Number of Clicks</th>
        </tr>
      </thead>
      <tbody>
        {userData.map(user => (
          <tr key={user.userId}>
            <td>{user.userId}</td>
            <td>{user.loginTime}</td>
            <td>{user.flowCompleted ? 'Yes' : 'No'}</td>
            <td>{user.numberOfClicks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserDataTable;