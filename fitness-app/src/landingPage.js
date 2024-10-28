import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './styleso.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';



const NavigationBar = () => {

    const goToSignUp = () => {
        window.location.href="/SignUp";
      };
  return (
    <body>
            <div class="welcome-overlay" id="welcomeOverlay">
                <p>Welcome to Our Fitness Web</p>
            </div>
             <header>
                 {/* <nav> 
                    <div class="logo">Fitness Web</div>
                    <ul class="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Programs</a></li>
                        <li class="dropdown">
                            <a href="#">Register</a>
                            <div class="dropdown-content">
                                <a href="signup">Sign Up</a>
                                <a href="#">Sign In</a>
                            </div>
                        </li>
                    </ul>
                            <div class="menu-toggle">&#9776;</div> 
                        </nav>  */}
                    </header> 
                    <main>
                         <div class="content"> 
                            <h1>Build Perfect Body With Clean Mind</h1>
                             <p>Achieving a strong body starts with a strong, 
                                focused mind. When we commit to a balanced lifestyle,
                                 both mental clarity and physical strength grow hand in hand.
                                  Each step taken towards fitness brings not only physical rewards
                                   but also a sense of inner peace and resilience. Embrace this journey 
                                   wholeheartedly, and watch as both body and mind transform.</p>
                              <button className='started-button' onClick ={goToSignUp}>Get Started</button>

                             </div> 
                           
                             </main>
                              <footer>
                                 <div class="social-media">
                                     <a href="#"><img src="https://img.freepik.com/premium-photo/twitter-logo-icon-illustration-vector_895118-5895.jpg?semt=ais_hybrid" alt="Twitter"/></a> 
                                     <a href="#"><img src="https://cdn-icons-png.flaticon.com/256/124/124010.png" alt="Facebook"/></a> 
                                     <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" alt="Instagram"/></a>
                                     </div> 
                                    </footer> 
                                    <script src="scripto.js"></script>
                                 </body>
  );
};

export default NavigationBar;
