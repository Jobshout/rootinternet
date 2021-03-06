      'use strict';

/**
 * Module dependencies.
 */
var express = require('express'),
	bodyParser = require('body-parser'),
	passwordHash = require('password-hash'),
	cookieParser = require('cookie-parser'),
	path = require('path');

module.exports = function(init) {
	// Initialize express app
	var app = express();

	app.use(cookieParser());
		
	// Set view engine
	app.set('view engine', 'ejs')
	
	// Request body parsing middleware should be above methodOverride
	app.use(bodyParser.urlencoded({extended: true}))
	
	// CookieParser should be above session
	app.use(cookieParser());
	
	/// Setting the app router and static folder
	app.use(express.static(path.resolve('./views/assets')));
	
	app.use('/list', express.static(path.resolve('./views/assets')));
	
	// Return Express server instance
	return app;
};