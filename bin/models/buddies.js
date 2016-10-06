/* Auré/meet-express
*
* /bin/models/buddies.js - Buddies getter/setter
* 
* coded by auré
* started at 23/09/2016
*
*/

"use strict";

var fs = require("fs"),
	sDataFilePath = __dirname + "/../../data/buddies.json";

// sert à lire le fichier
// fNext va arreter la premiere function qd elle sera finie pour passer à la suivante
exports.get = function(fNext){

	// TODO read buddies.json
	fs.readFile(sDataFilePath, "utf-8", function(oError, sFileContent){

		var aBuddies = [];

		if(oError){
			return fNext(oError);
		}

		try{
			aBuddies = JSON.parse(sFileContent);

		}catch(oJSONError){

			return fNext(oJSONError);
		}	

		fNext(null, aBuddies);
	});

};

// sert à écrire dans le fichier
exports.set = function(aBuddies, fNext){

	// TODO write buddies.json
	fs.writeFile(sDataFilePath, JSON.stringify(aBuddies), "utf-8", fNext); 
	// 1e param = le chemin, 2e param = le contenu, 3e param = l'encodage, 4e param = arrete la fct
};