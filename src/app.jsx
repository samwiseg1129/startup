import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (
        <div class="bg-light">
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
                <div class="container">
                    <a class="navbar-brand" href="index.html">
                        <img src="../pictures/P.png" alt="Product Track Logo" width="50" height="50"></img>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="index.html">Home</a>
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

        <main> App components go here</main>

        <footer class="bg-dark text-light py-4 mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start">
                        <p>&copy; 2024 Product Track. All rights reserved.</p>
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <a href="index.html" class="text-light me-3">Home</a>
                        <a href="/landing_html/how_it_works.html" class="text-light me-3">How it works</a>
                        <a href="/landing_html/login.html" class="text-light">Login</a>
                    </div>
                </div>
            </div>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        </div> 
    );
}