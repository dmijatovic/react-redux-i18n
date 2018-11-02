import React, { Component } from 'react';

import { NavLink  } from 'react-router-dom';
import { Clock } from '../component';
import './NavBar.scss';
import routes from '../router/routes';

class NavBar extends Component {
  createLinks = () => {
    let links=[];
    routes.forEach( item => {
      if (item.label){
        links.push(
          <li className="link-item"
            key={item.path}>
            <NavLink
              className="link-item"
              key={item.path}
              to={item.path}
              activeClassName="selected">
                {item.label}
            </NavLink>
          </li>
        )
      }
    })
    //debugger
    return links;
  }
  render() {
    return (
      <nav className="app-navbar">
        <section className="app-navbar-body">
          <ul className="nav-menu">
            { this.createLinks() }
          </ul>

          <Clock/>

        </section>
      </nav>
    );
  }
}

export default NavBar;