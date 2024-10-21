import React from 'react';
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import routes from './route';


function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className="App">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <NavLink to="" className="navbar-brand" exact="true">
              Navbar
            </NavLink>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
          <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/product" className="nav-link">
            Product
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/register" className="nav-link">
            Registrasi
          </NavLink>
        </li>
      </ul>
    </div>
    </nav>

    <div className="main">
      <Routes>
        {
          routes.map((route, i) => {
            const { path, Component } = route;
            return (
              <Route key={i} path={path} element={<Component />} />
            );
          })}
      </Routes>
    </div>
  </div>
  </React.Suspense>
  );
}

export default App;