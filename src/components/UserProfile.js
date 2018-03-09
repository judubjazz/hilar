import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({onClick}) => {
// console.log(searchTerm)
    return (
         <div className="UserProfile">
                <div className="User">
                    <a className="name" onClick={onClick}>Login</a>
                    <div className="image">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/profile/profile-512_1.jpg" alt="login"/>
                    </div>
                </div>
        </div>
    );
};

UserProfile.propTypes = {
    onClick: PropTypes.func.isRequired,

};

export default UserProfile;
