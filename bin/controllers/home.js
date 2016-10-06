/* Auré/meet-express
*
* /bin/controllers/home.js - Server main page
* 
* coded by auré
* started at 23/09/2016
*
*/

"use strict";

var Buddies = require("../models/buddies");

module.exports = function(oRequest, oResponse){

	Buddies.get(function(oError, aBuddies){

		if(oError){
			console.log("Error: ", oError);

			//TODO manage errors
		}

		// Pour supprimer un buddy
		if(oRequest.query.clean != null){

			return Buddies.set([], function(oSaveError){
				
				if(oSaveError){
					console.log("SaveError: ", oSaveError);
				}

				oResponse.render("index", {
					"buddies": []
				});
			});
		}

		oResponse.render("index", {

			"buddies": aBuddies || []
		});

	});
	
};