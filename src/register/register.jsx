import React from 'react';
import { Link } from 'react-router-dom';

export function Register() {
  return (
    <main className='container-fluid bg-light text-center container my-5'>
        <div className="row">
            <div className="col-md-8 mx-auto">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <h1 className="card-title text-center mb-4">Registration Form</h1>
                        <form action="formSubmit.html" method="post">
                            <div className="mb-3">
                                <label for="name" className="form-label">Name:</label>
                                <input type="text" className="form-control" id="name" name="varText"></input>
                            </div>
                            <div class="mb-3">
                                <label for="role" className="form-label">Role:</label>
                                <select className="form-select" id="role" name="varSelect">
                                    <option>Product Manager</option>
                                    <option>SWE</option>
                                    <option>Student</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label for="reason" class="form-label">Reason for use:</label>
                                <select className="form-select" id="reason" name="varSelect">
                                    <option>Work</option>
                                    <option>Personal Project</option>
                                    <option>School</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label for="username2" className="form-label">Username:</label>
                                <input type="text" className="form-control" id="username2" name="varText" required pattern="[Aa].*"></input>
                            </div>    
                            <div className="mb-3">
                                <label for="password" className="form-label">Password:</label>
                                <input type="password" className="form-control" id="password" name="varPassword" required pattern="[Aa].*"></input>
                            </div>
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                            <div className="text-center mt-3">
                                <Link to="/login" className="btn btn-link">Already have an account</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}

{/*  <!DOCTYPE html>
<html lang="en">
    <!-- Header -->
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Product Track - Register</title>
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


    <!-- Body Content-->
    <body>
        <!-- Head / Nav Bar-->
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
                                <a class="nav-link" href="../index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/landing_html/how_it_works.html">How it works</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/landing_html/login.html">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    
        <!-- Main Body of Content-->
        <main class="container my-5">
            <div class="row">
                <div class="col-md-8 mx-auto">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h1 class="card-title text-center mb-4">Registration Form</h1>
                            <form action="formSubmit.html" method="post">
                                <div class="mb-3">
                                    <label for="name" class="form-label">Name:</label>
                                    <input type="text" class="form-control" id="name" name="varText">
                                </div>
                                <div class="mb-3">
                                    <label for="role" class="form-label">Role:</label>
                                    <select class="form-select" id="role" name="varSelect">
                                        <option>Product Manager</option>
                                        <option>SWE</option>
                                        <option>Student</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="reason" class="form-label">Reason for use:</label>
                                    <select class="form-select" id="reason" name="varSelect">
                                        <option>Work</option>
                                        <option>Personal Project</option>
                                        <option>School</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="username2" class="form-label">Username:</label>
                                    <input type="text" class="form-control" id="username2" name="varText" required pattern="[Aa].*">
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password:</label>
                                    <input type="password" class="form-control" id="password" name="varPassword" required pattern="[Aa].*">
                                </div>
                                <div class="d-grid gap-2">
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                                <div class="text-center mt-3">
                                    <a href="login.html" class="btn btn-link">Already have an account</a>
                                </div>
                            </form>
                        </div>
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
                        <a href="../index.html" class="text-light me-3">Home</a>
                        <a href="/landing_html/how_it_works.html" class="text-light me-3">How it works</a>
                        <a href="/landing_html/login.html" class="text-light">Login</a>
                    </div>
                </div>
            </div>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </body>
</html>
*/}