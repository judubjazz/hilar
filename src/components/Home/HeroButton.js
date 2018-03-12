import React from 'react'
import PropTypes from 'prop-types'


const HeroButtton = ({onClick, primary, text}) => {
    return (
        <a href="#" className="Button" onClick={onClick}
           data-primary={primary}>{text}</a>
    );
};

HeroButtton.propTypes = {
    onClick: PropTypes.func.isRequired,
    primary: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
};

export default HeroButtton

