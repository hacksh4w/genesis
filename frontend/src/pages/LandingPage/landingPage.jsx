import React, { useState, useEffect } from 'react';
import shape from '../../assets/shape.png';
import family from '../../assets/fam.png';
import './LandingPage.css'; // Create a CSS file for styling and import it
function LandingPage(){
  return(
   <div className='mainone'>
    <main>
    <div className='big-wrapper light'>
        <img src={shape} className='shape' />

        <header className='heading'>
            <div className='container'>
                <div className='logo'>

                    <h3>logo</h3>
                </div>

               

                <div className='overlay'></div>

                <div className='hamburger-menu'>
                    <div className='bar'></div>
                </div>
            </div>
            </header>

        <div className='showcase-area'>
            <div className='container'>
                <div className='left'>
                    <div className='big-title'>
                        <h1>Your Doorway To Start</h1>
                        <h1>A New Family.</h1>
                    </div>
                    <p className='text'>
                        "Step into our Family Creation Center, a compassionate haven where dreams of parenthood come to life. Whether through sperm donation or the beautiful journey of child adoption, our dedicated team is here to guide you on the extraordinary path to building the family you've always envisioned."
                    </p>
                    <div className='cta'>
                        <a href="#" className='btn'>Get started</a>
                    </div>
                </div>

                <div className='right'>
                    <img src={family} className='person' />
                </div>
            </div>
        </div>

        <div className='bottom-area'>
            <div className='container'>
                <button className='toggle-btn'>
                    <i className='far fa-moon'></i>
                    <i className='far fa-sun'></i>
                </button>
            </div>
        </div>
    </div>
    </main>
    </div>

  )
}

export default LandingPage;
