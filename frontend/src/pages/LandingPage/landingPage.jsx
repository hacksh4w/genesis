import React, { useEffect } from 'react';
import shape from '../../assets/shape.png';
import '@fortawesome/fontawesome-free/css/all.css';
import family from '../../assets/fam.png';
import SignIn from '../SignIn/SignIn';
import './LandingPage.css'; // Create a CSS file for styling and import it
import { Link } from 'react-router-dom';

function LandingPage() {
  useEffect(() => {
    // Your JavaScript code here
    var toggle_btn;
    var big_wrapper;
    var hamburger_menu;

    function declare() {
      toggle_btn = document.querySelector(".toggle-btn");
      big_wrapper = document.querySelector(".big-wrapper");
      hamburger_menu = document.querySelector(".hamburger-menu");
    }

    const main = document.querySelector("main");

    declare();

    let dark = false;

    function toggleAnimation() {
      // Clone the wrapper
      dark = !dark;
      let clone = big_wrapper.cloneNode(true);
      if (dark) {
        clone.classList.remove("light");
        clone.classList.add("dark");
      } else {
        clone.classList.remove("dark");
        clone.classList.add("light");
      }
      clone.classList.add("copy");
      main.appendChild(clone);

      document.body.classList.add("stop-scrolling");

      clone.addEventListener("animationend", () => {
        document.body.classList.remove("stop-scrolling");
        big_wrapper.remove();
        clone.classList.remove("copy");
        // Reset Variables
        declare();
        events();
      });
    }

    function events() {
      toggle_btn.addEventListener("click", toggleAnimation);
      hamburger_menu.addEventListener("click", () => {
        big_wrapper.classList.toggle("active");
      });
    }

    events();
  }, []); // empty dependency array to run the effect only once

  return (
    <div className='mainone'>
      <main>
        <div className='big-wrapper light'>
          <img src={shape} className='shape' />

          <header className='heading'>
            <div className='container1'>
              <div className='logo'>
                <h3>logo</h3>
                <button className='toggle-btn'>
                <i className='far fa-moon'></i>
                <i className='far fa-sun'></i>
              </button>
              </div>

              <div className='overlay'></div>

              <div className='hamburger-menu'>
                <div className='bar'></div>
              </div>
            </div>
          </header>

          <div className='showcase-area'>
            <div className='container1'>
              <div className='left'>
                <div className='big-title'>
                  <h1>Your Doorway To Start</h1>
                  <h1>A New Family.</h1>
                </div>
                <p className='text'>
                  "Step into our Family Creation Center, a compassionate haven where dreams of parenthood come to life. Whether through sperm donation or the beautiful journey of child adoption, our dedicated team is here to guide you on the extraordinary path to building the family you've always envisioned."
                </p>
                <div className='cta'>
                 <Link to={'/signin'} className='btn1'>
                    Get started
                    </Link>
                </div>
              </div>

              <div className='right'>
                <img src={family} className='person' alt="Family" />
              </div>
            </div>
          </div>

          <div className='bottom-area'>
            <div className='container1'>
            Copyright © 2023 Love Finds a Home ®
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
