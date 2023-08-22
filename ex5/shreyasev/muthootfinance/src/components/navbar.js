import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return (
        <div className='header'>
            <div className='title'>
                <h1>Muthoot Finance</h1>
            </div>
            
                <nav className='navBar'>
                    <div className='home nav-btn'>
                        <Link className = 'link' to="/">HOME</Link>
                    </div>
                    <div className='services nav-btn'>
                        <Link className='link' to = "/services">SERVICES</Link>
                    </div>
                    <div className='corporate nav-btn'>
                        <Link className='link' to="/corporate">CORPORATE</Link>
                    </div>
                </nav>
            
        </div>
    )
}

export default Navbar;