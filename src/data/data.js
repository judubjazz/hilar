
var results = [];
var blue_hat_jpg = require('./blue_hat.jpg');
var blue_scarf_jpg = require('./blue_scarf.jpg');
var blue_sweater_jpg = require('./blue_sweater.jpg');
var native_spinning_jpg = require('./native_spinning.jpg');
var peru_landscape_jpg = require('./blue_hat.jpg');
var scarf_jpg = require('./scarf.jpg');


var blue_hat = {
	id:"1",
	original_title: "blue hat",
	overview : "a beautiful blue hat",
	vote_average: "7.5",
	backDrop : blue_hat_jpg,
};

var blue_scarf = {
	id:"2",
	original_title: "blue scarf",
	overview : "a beautiful blue scarf",
	vote_average: "7.5",
	backDrop : blue_scarf_jpg,
};

var blue_sweater = {
	id:"3",
	original_title: "blue sweater",
	overview : "a beautiful blue sweater",
	vote_average: "7.5",
	backDrop : blue_sweater_jpg,
};

var native_spinning = {
	id:"4",
	original_title: "native spinning",
	overview : "a beautiful native spinning",
	vote_average: "7.5",
	backDrop : native_spinning_jpg,
};

var peru_landscape = {
	id:"5",
	original_title: "blue hat",
	overview : "a beautiful peru landscape",
	vote_average: "7.5",
	backDrop : peru_landscape_jpg,
};

var scarf = {
	id:"6",
	original_title: "a scarf",
	overview : "another beautiful scarf",
	vote_average: "7.5",
	backDrop : scarf_jpg,
};

var data = {
	results:""
}

export default function f (){
	results.push(blue_scarf, blue_sweater, native_spinning, peru_landscape, scarf, blue_hat);
	data.results = results;
	return data	;	
	}

















	
