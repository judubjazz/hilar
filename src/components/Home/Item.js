import React from 'react'
import PropTypes from 'prop-types'
import ListToggle from './ListToggle'

const Item = ({ title, backdrop, score, overview,onClick,toggled }) => {
    // console.log('backDrop : ' + backdrop);
    return (
            <div className="Item" style={{backgroundImage: 'url(' + backdrop + ')'}}>
                <div className="overlay">
                    <div className="title">{title}</div>
                    <div className="rating">{score} / 10</div>
                    <div className="plot">{overview}</div>
                    <ListToggle onClick={onClick} toggled={toggled}/>
                </div>
            </div>
        );

};

Item.propTypes = {
  // backdrop: PropTypes.string.isRequired,
  // title: PropTypes.string.isRequired,
  // score: PropTypes.string.isRequired,
  // overview: PropTypes.string.isRequired,
  // onClick:PropTypes.func.isRequired,
  // toggled:PropTypes.bool.isRequired,
};

export default Item

