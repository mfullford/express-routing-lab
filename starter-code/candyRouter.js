var express = require('express');
var bodyParser = require('body-parser');
router = express.Router();

var candies = [
{"id":1,"name":"Chewing Gum","color":"Red"},
{"id":2,"name":"Pez","color":"Green"},
{"id":3,"name":"Marshmallow","color":"Pink"},
{"id":4,"name":"Candy Stick","color":"Blue"}
];

//What would need to go into candies
//in order to pass our first test?

//Get all the arrays
router.get('/', function(req,res) {
	res.json(candies);
});

// Get just one of the candies
router.get('/:id', function(req, res) {
	console.log("This SHOWs a single candy based on the id!");
	// Return element where id is equal to request paramater id
	let myCandy = candies.filter(function(element) {
	// Make sure id = id and parameter
		return element.id == req.params.id;
	});
	// Return first array
	res.json(myCandy[0]);
});

// POST a new candy
router.post('/', function(req, res) {
	console.log("This CREATEs a new candy!");
	// push request candies array
	candies.push(req.body);
	// Show message 
	res.json("Candy Saved");
});

// PUT index postman request
router.put('/:id', function(req, res) {
	console.log("This UPDATEs a single candy based on the id!");
	let myCandy = candies.filter(function(element) {
		return element.id == req.params.id;
	});
	// Ceclare index variable equals first index of array
	let index = candies.indexOf(myCandy[0]);
	// Set id property to request parameters id
	candies[index].id = req.params.id;
	// Set name property to request body name
	candies[index].name = req.body.name;
	// Set color property to request body color
	candies[index].color = req.body.color;
	// Show message, updated candy
	res.json("Candy Updated");
});

// Delete a candy
router.delete('/:id', function(req, res) {
	console.log("Destroy one candy");
	let myCandy = candies.filter(function(element) {
		//make sure the id's are equal again!
		return element.id == req.params.id;
	});
	let index = candies.indexOf(myCandy[0]);
	// Remove index of candies array
	candies.splice(index, 1);
	// Show message, candy has been deleted
	res.json("Deleted candy");
});

// export function
module.exports = router;
