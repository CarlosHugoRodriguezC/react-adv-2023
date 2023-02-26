import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';

import logo from '../assets/react.svg';
import { routes } from './routes';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='React Logo' />
          <ul>
            {routes.map(({ name, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
                >
                  {name}
                </NavLink>
              </li>
            ))}
            {/* <li>
              <NavLink
                to='/home'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to='/users'
              >
                Users
              </NavLink>
            </li> */}
          </ul>
        </nav>

        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          {/* <Route path='about' element={<h1>About Page</h1>} />
          <Route path='users' element={<h1>Users Page</h1>} />
          <Route path='home' element={<h1>Home Page</h1>} /> */}

          <Route path='/*' element={<Navigate to='/register' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
