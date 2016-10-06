/* Auré/meet-express
*
* /bin/routes/main.js - main routes
* 
* coded by auré
* started at 23/09/2016
*
*/

"use strict";

var oRouter = require("express").Router(),
	fHomePageController = require("../controllers/home"),
	fHadBuddyController = require("../controllers/add");

oRouter.get("/", fHomePageController);
oRouter.post("/", fHadBuddyController);

module.exports = oRouter;