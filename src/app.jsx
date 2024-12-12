import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Dashboard } from './dashboard/dashboard';
import { My_Profile } from './my_profile/my_profile';
import { Landing } from './landing/landing';
import { Login } from './login/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import Dashboard2 from './Dash2/dash2';
import { AuthState } from './login/authState';
import { Unauthenticated } from './login/unauthenticated';

function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

    return (
        <BrowserRouter>    
        <div className="bg-light">
        <header>
            <Nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand" to="landing">
                        <img src="./public/P.png" alt="Product Track Logo" width="50" height="50"></img>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="landing">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="dashboard">Dashboard</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="api_management">Api Management</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="dashboard2">Dashboard 2</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="my_profile">My Profile</NavLink>
                            </li> */}
                            {authState === AuthState.Unauthenticated && (
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='landing'>Home</NavLink>
                                </li>
                            )}
                            {authState === AuthState.Unauthenticated && (
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='login'>Login</NavLink>
                                </li>
                            )}
                            {authState === AuthState.Authenticated && (
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='dashboard'>Dashboard</NavLink>
                                </li>
                            )}
                            {authState === AuthState.Authenticated && (
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='dash2'>Clicker</NavLink>
                                </li>
                            )}
                            {authState === AuthState.Authenticated && (
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='my_profile'>My Profile</NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </Nav>
        </header>

        <Routes>
            <Route path='/' element={<Landing />} exact />
            <Route path='/landing' element={<Landing />} />
            <Route path='/login' element={<Login userName={userName} authState={authState} onAuthChange={(userName, authState) => {setAuthState(authState); setUserName(userName);}}/>}/>
            {/* <Route path='/login' element={<Login />} /> */}
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/dashboard2' element={<Dashboard2 />} />
            <Route path='/my_profile' element={<My_Profile userName={userName} onLogout={() => {setAuthState(AuthState.Unauthenticated); setUserName('');}}/>} />
            {/* <Route path='/my_profile' element={<My_Profile />} /> */}
            <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className="mt-auto bg-dark text-light py-4 mt-auto" >
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start">
                        <p>&copy; 2024 Product Track. All rights reserved.</p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <NavLink to="landing" className="text-light me-3">Home</NavLink>
                        <NavLink to="login" className="text-light">Login</NavLink>
                    </div>
                </div>
            </div>
        </footer>
        </div> 
        </BrowserRouter>
    );
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }

export default App;