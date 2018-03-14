import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserProfile = (user) => {
// console.log(user);
let username = user.user;
if (username !== undefined) {
    username = user.user.user
}else{
    username='user'
}


    return (
         <div className="UserProfile">
                <div className="User">
                    {/*<a className="name" onClick={onClick}>login</a>*/}
                    {user.user && <div className='name'>{username}</div>}
                    {!user.user && <Link to="/login" className="name">login</Link>}
                    <div className="image">
                        <img src="https://d2az0yupc2akbm.cloudfront.net/vanguardistas.publicview/4.108/static/images/socialmedia/yahoo.gif" alt="login"/>
                    </div>
                </div>
        </div>
    );
};

UserProfile.propTypes = {
    // user: PropTypes.object.isRequired,

};


export default UserProfile;
