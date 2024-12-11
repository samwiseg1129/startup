import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
  const [userName, setUserName] = useState(props.userName);
  const [password, setPassword] = useState('');
  const [displayError, setDisplayError] = useState(null);

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
        const response = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify({ email: userName, password: password }),
        headers: {'Content-type': 'application/json; charset=UTF-8'},
        });
        if (response?.status === 200) {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
        } else {
        const body = await response.json();
        setDisplayError(`⚠ Error: ${body.msg}`);
        }
    }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" type="email" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="your@email.com" required/>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" required/>
      </div>
      <Button variant="primary" onClick={() => loginUser()} disabled={!userName || !password}>
        Login
      </Button>
      <Button variant="secondary" onClick={() => createUser()} disabled={!userName || !password}>
        Create
      </Button>
      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </form>
  );
}
