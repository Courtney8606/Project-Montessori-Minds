import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end>Home</NavLink>
        </li>
        <li>
          <NavLink to="/test">Test Page</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;