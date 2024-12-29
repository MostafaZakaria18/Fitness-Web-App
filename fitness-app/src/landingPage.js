import React, { useEffect } from 'react';
import './styleso.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavigationBar = () => {

  const goToSignUp = () => {
    window.location.href = "/SignUp";
  };

  const goToMusleMenu = () => {
    window.location.href = "/MuscleMenu";
  };
  useEffect(() => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    
    if (menuToggle && nav) {
      menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
      });
    }

    const hideOverlay = setTimeout(() => {
      const overlay = document.getElementById("welcomeOverlay");
      if (overlay) {
        overlay.style.display = "none";
      }
    }, 3000);

    return () => {
      if (menuToggle) {
        menuToggle.removeEventListener('click', () => {
          nav.classList.toggle('active');
        });
      }
      clearTimeout(hideOverlay);
    };
  }, []);
  return (
    <body>
      <div className="welcome-overlay" id="welcomeOverlay">
        <p>Welcome to Our Fitness Web</p>
      </div>

      <header>
        {/* Uncomment and adjust nav section as needed */}
        {/* 
        <nav>
          <div className="logo">Fitness Web</div>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Programs</a></li>
            <li className="dropdown">
              <a href="#">Register</a>
              <div className="dropdown-content">
                <a href="/SignUp">Sign Up</a>
                <a href="#">Sign In</a>
              </div>
            </li>
          </ul>
          <div className="menu-toggle">&#9776;</div>
        </nav>
        */}
      </header>

      <main>
        <div className="content">
          <h1>Build Perfect Body With Clean Mind</h1>
          <p>
            Achieving a strong body starts with a strong, focused mind. When we commit 
            to a balanced lifestyle, both mental clarity and physical strength grow hand 
            in hand. Each step taken towards fitness brings not only physical rewards 
            but also a sense of inner peace and resilience. Embrace this journey wholeheartedly, 
            and watch as both body and mind transform.
          </p>
          <button className='started-button' onClick={goToSignUp}>Get Started</button>
        </div>
      </main>

      <footer>
        <div className="social-media">
          <a href="#">
            <img src="https://img.freepik.com/premium-photo/twitter-logo-icon-illustration-vector_895118-5895.jpg?semt=ais_hybrid" alt="Twitter" />
          </a>
          <a href="#">
            <img src="https://cdn-icons-png.flaticon.com/256/124/124010.png" alt="Facebook" />
          </a>
          <a href="#">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" alt="Instagram" />
          </a>
        </div>
      </footer>
    </body>
  );
};

export default NavigationBar;
