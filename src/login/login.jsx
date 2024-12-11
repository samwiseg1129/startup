import React from 'react';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className='container-fluid bg-light text-center container my-5'>
        <div className="row">
            <div className="col-md-6 mx-auto">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <h1 className="card-title text-center mb-4">Login</h1>
                        <div>
                          {authState === AuthState.Authenticated && (
                            <Authenticated userName={userName} onLogout={() => onAuthChange(null, AuthState.Unauthenticated)}/>
                          )}
                          {authState === AuthState.Unauthenticated && (
                            <Unauthenticated userName={userName} onLogin={(loginUserName) => onAuthChange(loginUserName, AuthState.Authenticated)}/>
                          )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
};
