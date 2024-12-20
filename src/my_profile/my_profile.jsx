import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthState } from '../login/authState';

export function My_Profile(props) {
   
    const navigate = useNavigate()
    
    function logout() {
        fetch(`/api/auth/logout`, {
          method: 'delete',
        })
          .catch(() => {
            // Logout failed. Assuming offline
          })
          .finally(() => {
            localStorage.removeItem('userName');
            props.onLogout();
            navigate('/')
          });
    }
    const ip = localStorage.getItem('ip')
    
  return (
    <main className='container-fluid bg-light text-center container my-5'>
        <div className="row">
            <div className="col-lg-8 mx-auto">
                <h1 className="card-title text-center mb-4">Your Profile</h1>
                <div className="mt-4">
                    <h2 className="h4">Account Details</h2>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <strong>Username:</strong> <span id="username">{props.userName}</span>
                        </li>
                        <li className="list-group-item">
                            <strong>Your Ip Address:</strong> <span id="accountType">{ip}</span>
                        </li>
                        <li className="list-group-item">
                            <strong>Account Type:</strong> <span id="accountType">Free</span>
                        </li>
                    </ul>
                </div>
                <div className="d-grid gap-2 mt-4">
                    {/* <button className="btn btn-primary" type="button">Edit Profile</button>
                    <button className="btn btn-outline-danger" type="button">Change Password</button> */}
                    <button className="btn btn-outline-primary" type="button" onClick={() => logout()}>Log Out</button>
                </div>
            </div>
        </div>
    </main>
  );
}
{/*
    <!DOCTYPE html>
<html lang="en">
    <!-- Header -->
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Product Track - My Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <style>
            body {
                display: flex;
                flex-direction: column;
                min-height: 100vh;
            }
            main {
                flex: 1;
            }
        </style>
    </head>


    <body>
        <!-- Header / Nav bar-->
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
                <div class="container">
                    <a class="navbar-brand" href="../index.html">
                        <img src="../pictures/P.png" alt="Product Track Logo" width="50" height="50">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="dashboard.html">Dashboard</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="api_management.html">API Management</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="query.html">Query</a>
                            </li><li class="nav-item">
                                <a class="nav-link" href="myprofile.html">My Profile</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <!-- Body / Content-->
        <main class="container my-5">
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <h1 class="card-title text-center mb-4">Your Profile</h1>
                    <div class="mt-4">
                        <h2 class="h4">Account Details</h2>
                        <ul class="list-group">
                            <li class="list-group-item">
                                <strong>Username:</strong> <span id="username">JohnDoe123</span>
                            </li>
                            <li class="list-group-item">
                                <strong>Email:</strong> <span id="email">johndoe@example.com</span>
                            </li>
                            <li class="list-group-item">
                                <strong>Account Type:</strong> <span id="accountType">Premium</span>
                            </li>
                        </ul>
                    </div>
                    <div class="d-grid gap-2 mt-4">
                        <button class="btn btn-primary" type="button">Edit Profile</button>
                        <button class="btn btn-outline-danger" type="button">Change Password</button>
                        <button class="btn btn-outline-primary" type="button">Log Out</button>
                    </div>
                </div>
            </div>
        </main>

        <!-- Footer -->
        <footer class="bg-dark text-light py-4 mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start">
                        <p>&copy; 2024 Product Track. All rights reserved.</p>
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <a href="dashboard.html" class="text-light me-3">Dashboard</a>
                        <a href="api_management.html" class="text-light me-3">API Management</a>
                        <a href="query.html" class="text-light me-3">Query</a>
                        <a href="myprofile.html" class="text-light me-3">My Profile</a>
                    </div>
                </div>
            </div>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </body>
</html>
 */}