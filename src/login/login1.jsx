

import React from 'react';
import { Link } from 'react-router-dom';

export function Login() {
  return (
    <main className='container-fluid bg-light text-center container my-5'>
        <div className="row">
            <div className="col-md-6 mx-auto">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <h1 className="card-title text-center mb-4">Login</h1>
                        <form>
                            <div className="mb-3">
                                <label for="text" className="form-label">Username:</label>
                                <input type="text" className="form-control" id="text" name="varText" required></input>
                            </div>
                            <div class="mb-3">
                                <label for="password" className="form-label">Password:</label>
                                <input type="password" className="form-control" id="password" name="varPassword" required></input>
                            </div>
                            <div className="d-grid gap-2">
                                <Link to="/dashboard" className="btn btn-primary">Submit</Link>
                            </div>
                            <div className="text-center mt-3">
                                <Link to="/register" className="btn btn-link">Register</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}