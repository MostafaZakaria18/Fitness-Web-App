import React from 'react';
import './styleso.css'

const userEmail = localStorage.getItem('email');


const NaviBar = () => {
  return (
             <div>
                 <nav> 
                    <div class="logo">Tadreba</div>
                    <ul class="nav-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="MuscleMenu">Programs</a></li>
                        <li><a href = "Recipes">Recipes</a></li>
                        <li class="dropdown">
                            <a href="#">Register</a>
                            <div class="dropdown-content">
                                <a href="signup">Sign Up</a>
                                <a href="signin">Sign In</a>
                            </div>
                        </li>
                        {userEmail && <li><a href="User">User Profile</a></li>}
                    </ul>
                            <div class="menu-toggle">&#9776;</div> 
                        </nav> 
                    </div> 
                    
  );
};

export default NaviBar;
