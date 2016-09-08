'use strict';

/**
 * Module dependencies.
 */
var express = require('express'),
	bodyParser = require('body-parser'),
	path = require('path');

module.exports = function(init) {
	// Initialize express app
	var app = express();
	
	// Set view engine
	app.set('view engine', 'ejs')
	
	// Request body parsing middleware should be above methodOverride
	app.use(bodyParser.urlencoded({extended: true}))
	
		/// Setting the app router and static folder
	app.use(express.static(path.resolve('./public')));
	
	// Return Express server instance
	return app;
};