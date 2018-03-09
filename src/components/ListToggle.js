import React from 'react'
import PropTypes from 'prop-types'

const ListToggle = ({ onClick, toggled, text }) => {
    return (
            <div onClick={onClick} data-toggled={toggled} className="ListToggle">
                <div>
                    <i className="fa fa-fw fa-plus"></i>
                    <i className="fa fa-fw fa-check"></i>
                </div>
            </div>
        );

}

ListToggle.propTypes = {
  onClick: PropTypes.func.isRequired,
  toggled: PropTypes.bool.isRequired,
}

export default ListToggle

