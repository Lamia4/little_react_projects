import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <div className="headerRow">
      <h1 className="title">Kpop Bands</h1>
      <Nav className="Start">
        <NavItem>
          <Link to="/bts" activeClassName="active" >
          <NavLink>BTS</NavLink>
          </Link>
        </NavItem>
        <NavItem>
            <Link to="/blackpink">
            <NavLink>Blackpink</NavLink>
            </Link>
        </NavItem>
        <NavItem>
            <Link to="/izone">
            <NavLink>Izone</NavLink>
            </Link>
        </NavItem>
      </Nav>
    
      
    </div>
  );
}

export default Header
