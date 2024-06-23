import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationMenu.css';

function NavigationMenu() {
  return (
    <nav className="navigation-menu">
      <ul>
        <li>
          <NavLink to="/profile" activeClassName="active-link">Профиль</NavLink>
        </li>
        <li>
          <NavLink to="/settings" activeClassName="active-link">Настройки</NavLink>
        </li>
        <li>
          <NavLink to="/users" activeClassName="active-link">Список пользователей</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
