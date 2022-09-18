import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="parallax-effect br2 shadow-2" perspective={500} style={{ height: 150, width: 150}}>
                <div className="inner-element">
                    <img style={{paddingTop: '25px'}} alt='logo' src={brain}/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;