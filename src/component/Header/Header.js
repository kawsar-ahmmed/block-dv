import React from 'react';
import './Header.css'
import { Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../Assets/Apexdv.svg'
import Banner from './Banner/Banner';

const Header = () => {
    return (
        <Container>
            <nav>
                <div className='menu'>
                    <div className="menu-img">
                        <img src={logo} alt="" />
                    </div>
                    <div className="menu-items">
                        <NavLink to='/home' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>Home</NavLink>
                        <NavLink to='/service' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>Service</NavLink>
                        <NavLink to='/review' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>Review</NavLink>
                        <NavLink to='/about' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>About</NavLink>
                        <NavLink to='/blog' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>Blog</NavLink>
                    </div>
                </div>
                
            </nav>
        </Container>
    );
};

export default Header;