import React, { useState, useEffect } from 'react';
import { BarChart } from "./analytics/bar"
import { PieChart } from './analytics/pie';
import { LineChart } from './analytics/line';


export function Dashboard() {
    /////
    const [socket, setSocket] = useState(null);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const ws = new WebSocket('ws://localhost:3000');
        
        ws.onopen = () => {
        console.log('WebSocket connection established');
        };
    
        ws.onmessage = (event) => {
        setMessages((prevMessages) => [...prevMessages, event.data]);
        };
    
        ws.onclose = () => {
        console.log('WebSocket connection closed');
        };
    
        setSocket(ws);
    
        return () => {
        ws.close();
        };
    }, []);
    
    const sendMessage = () => {
        if (socket && message) {
        socket.send(message);
        setMessage('');
        }
    };
    /////////
  return (
    <main className='container-fluid bg-light text-center'>
        <h1 className="card-title text-center mb-4 my-3">Your Dashboard</h1>        
        <div className="row">
        
                <div className="col-sm-4 mb-3">
                    <div className = "card" >
                        <div class="card-body">
                            <h5 class="card-title">Basic User Data</h5>
                            <LineChart />
                        </div>
                    </div>
                </div>

                <div className="col-sm-4 mb-3">
                    <div className = "card">
                        <div class="card-body">
                            <h5 class="card-title">Funnel Drop Off</h5>
                            <BarChart />
                        </div>
                    </div>
                </div>

                <div className="col-sm-4 mb-3">
                    <div className = "card">
                        <div class="card-body">
                            <h5 class="card-title">Daily Active Users</h5>
                            <PieChart />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className = "card" >
                        <div>
                        <h2>WebSocket Echo Test</h2>
                            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message"/>
                            <button onClick={sendMessage}>Send</button>
                            <ul>
                                {messages.map((msg, index) => (<li key={index}>{msg}</li>))}
                            </ul>
                            <p> this will echo back messages through the WebSocket</p>
                        </div>
                    </div>
                </div>
                
           
            {/* <div className="card mx-3 my-3"> 
                <h3 className="card-subtitle my-3">Key Metrics</h3>
                <div className="row center">
                    <div className="col mb-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Active Users</h5>
                                <p className="card-text display-4">1,234</p>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Completed Workflows</h5>
                                <p className="card-text display-4">5,678</p>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Avg. Time on Page</h5>
                                <p className="card-text display-4">2:45</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
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
        <title>Product Track - Tracking Dashboard</title>
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
        
        <main>
            <div class="row">
                <div class="col-lg-10 mx-auto">
                    
                    <h1 class="card-title text-center mb-4">Your Dashboard</h1>
                    
                    <p class="lead text-center mb-4">
                        This page will be the main analysis page where info graphics display their users data and workflows.
                    </p>
                    
                    <div class="text-center">
                        <img src="../pictures/producttrack.png" alt="potential dashboard design" class="img-fluid rounded">
                    </div>
                    
                    <div class="mt-4">
                        <h2 class="h4">Key Metrics</h2>
                        <div class="row">
                            <div class="col-md-3 mb-3">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Active Users</h5>
                                        <p class="card-text display-4">1,234</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-5 mb-3">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Completed Workflows</h5>
                                        <p class="card-text display-4">5,678</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Avg. Time on Page</h5>
                                        <p class="card-text display-4">2:45</p>
                                    </div>
                                </div>
                            </div>
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