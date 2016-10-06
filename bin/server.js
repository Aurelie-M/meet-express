/* Auré/meet-express
*
* /bin/server.js - main app entry point
* 
* coded by auré
* started at 23/09/2016
*
*/

"use strict";

var express = require("express"),
	pug = require("pug"),
	responseTime = require("response-time"),
	bodyParser = require("body-parser"),
	logMiddleware = require("./middlewares/log.js"),
	mainRoutes = require("./routes/main"),
	oApp;

// setup express
// serveur express est dans oApp
oApp = express();

// config middlewares
// pour mesurer le temps de requete
oApp.use(responseTime());

// pour lire tous les types de fichier
oApp.use(bodyParser.urlencoded({

	"extended": true
}));

oApp.use(bodyParser.json());


// utilisé ce qu'il y a dans log.js
// il va aler voir s'il y a un export dans log.js et puis va l'executer
// s'il y a plusieurs exports, il execute que le dernier
oApp.use(logMiddleware);

// dossier qui va contenir nos css et html
oApp.use(express.static(__dirname + "/../static"));

// configure template engine
oApp.set("views", __dirname + "/views");
oApp.set("view engine", "pug"); // pas de require, le package va se faire seul

// fait une route
/*oApp.get("/", function(oRequest, oResponse){

	//oResponse.send("Hello, world !");
	oResponse.render("index", { 
		"name": "Auré"
	}); 
});*/
oApp.use(mainRoutes);

// pour écouter tous les evts sur un port spécial
oApp.listen(8080, function(){

	console.log("Express is listening on port 8080");
});