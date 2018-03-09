import React from 'react';
import Image from 'react-image-resizer';

let logo = require('../data/logo2.png');

// Logo
export default class Logo extends React.Component{
	render() {
		return (
			<div id="logo" className="Logo">
			  <Image
 				 src={logo}
 				 alt="apples in the bowl"
 			 	 width={230}
 			 	 height={50}
 				 //style={style.image}
		     />
			</div>
		);
	}
};

