/* Auré/meet-express
*
* /bin/controllers/add.js - Add buddy controller
* 
* coded by auré
* started at 23/09/2016
*
*/

"use strict";

var Buddies = require("../models/buddies");

module.exports = function(oRequest, oResponse){

	// recupere les buddies
	Buddies.get(function(oError, aBuddies){

		var POST = oRequest.body,
			sName = (POST.name || "").trim(), // trim va supprimer tous les espaces vides à gch et à droite
			sDescription = (POST.description || "").trim(),
			oNewBuddy;

		if(oError){

			console.log("Error:", oError);
		}

		if(!sName || !sDescription){

			return oResponse.render("index", {

				"buddies" : aBuddies || [],
				"hasError" : true,
				"post":{
					"name": sName,
					"description": sDescription
				}
			});
		}

		// si tout est ok, on creer le nv buddy
		oNewBuddy = {
			"name" : sName,
			"description": sDescription
		};

		// on rajoute le nv buddy aux anciens buddies (en dernier)
		aBuddies.push(oNewBuddy);

		Buddies.set(aBuddies, function(oSaveError){

			if(oRequest.get("X-Requested-With") === "XMLHttpRequest"){

				return oResponse.json({
					"name": sName,
					"description": sDescription,
					"avatar": "http://api.adorable.io/avatars/90" + sName + ".png" ,
					"alt": 'Avatar de' + sName
				});
			}

			oResponse.render("index", {

				"buddies": aBuddies || [],
				"hasError": !!oSaveError,
				"post": {}
			});
		});
	});
};