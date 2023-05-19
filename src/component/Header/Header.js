import React from 'react';
import './Header.css'
import { Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../Assets/Apexdv.svg'

const Header = () => {
    return (
        <Container>
            <nav>
                <div className='menu'>
                    <div className="menu-img">
                        <img src={logo} alt="" />
                    </div>
                    <div className="menu-items">
                        <NavLink to='/home'>Home</NavLink>
                        <NavLink to='/service'>Service</NavLink>
                        <NavLink to='/review'>Review</NavLink>
                        <NavLink to='/about'>About</NavLink>
                        <NavLink to='/blog'>Blog</NavLink>
                    </div>
                </div>
            </nav>
        </Container>
    );
};

export default Header;