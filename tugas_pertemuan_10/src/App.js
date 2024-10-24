import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <React.Suspense fallback= {<div>Loading...</div>}>
      <div className='App'>
        <h1>User</h1>
        {/*MENU*/}
        <ul className='"nav nav-tabs'>
          <li className='nav-item'>
            <NavLink to = "/" className = "nav-link" exact = "true">
            Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to = "/users/show" className = "nav-link">
            User
            </NavLink>
          </li>
        </ul>
        {/*MAIN*/}
        <div className='main'>
          <Routes>
            {routes.map((route, i) => {
              const {path , Component } = route;
              return <Route key = {i} path = {path} element = {<Component />}/>;
            })}
          </Routes>
        </div>
      </div>

    </React.Suspense>
  )
}

export default App;
