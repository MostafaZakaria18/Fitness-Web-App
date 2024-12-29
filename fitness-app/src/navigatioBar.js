import React from 'react';
import './styleso.css'

const NaviBar = () => {
  return (
             <div>
                 <nav> 
                    <div class="logo">Fitness Web</div>
                    <ul class="nav-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="#">Programs</a></li>
                        <li class="dropdown">
                            <a href="#">Register</a>
                            <div class="dropdown-content">
                                <a href="signup">Sign Up</a>
                                <a href="signin">Sign In</a>
                            </div>
                        </li>
                    </ul>
                            <div class="menu-toggle">&#9776;</div> 
                        </nav> 
                    </div> 
                    
  );
};

export default NaviBar;
