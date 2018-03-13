import React from 'react';
import Image from 'react-image-resizer';
import HeroButton from './HeroButton'
import PropTypes from 'prop-types'

const background_image = require('../../data/peru_landscape.jpg');
const logo = require('../../data/logo.png');


// Hero
const Hero = ({onClick}) =>{
    return (
            <div id="hero" className="Hero" style={{backgroundImage: 'url(' + background_image + ')'}}>
                <div className="content">
                    <Image src={logo} alt="peru landscape" width={240} height={240}/>

                    <h2></h2>
                    <p>Buy the best productos from el Peru. Best precios garantee, ou argent remis</p>
                    <div className="button-wrapper">
                        <HeroButton primary={true} text="Buy now" onClick={onClick}/>
                        <HeroButton primary={false} text="+ My list" onClick={onClick}/>
                    </div>
                </div>
                <div className="overlay"></div>
            </div>
        );
};


Hero.propTypes = {
    onClick: PropTypes.func.isRequired,
};
export default Hero;