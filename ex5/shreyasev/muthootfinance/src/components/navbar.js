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
                        <Link to="/">Home</Link>
                    </div>
                    <div className='services nav-btn'>
                        <Link to = "/services">Services</Link>
                    </div>
                    <div className='corporate nav-btn'>
                        <Link to="/corporate">Corporate</Link>
                    </div>
                </nav>
            
        </div>
    )
}

export default Navbar;