import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserProfile = () => {
// console.log(searchTerm)
    return (
         <div className="UserProfile">
                <div className="User">
                    {/*<a className="name" onClick={onClick}>login</a>*/}
                    <Link to="/login" className="name">login</Link>
                    <div className="image">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/profile/profile-512_1.jpg" alt="login"/>
                    </div>
                </div>
        </div>
    );
};

// UserProfile.propTypes = {
//     onClick: PropTypes.func.isRequired,
//
// };

export default UserProfile;
