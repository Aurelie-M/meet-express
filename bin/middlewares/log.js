/* Auré/meet-express
*
* /bin/middlewares/log.js - simple logging middleware
* 
* coded by auré
* started at 23/09/2016
*
*/

"use strict";

// rend dispo depuis l'exterieur ce qu'on va mettre comme valeur
module.exports = function(oRequest, oResponse, fNext){
	console.log("(" + oRequest.method + ")" + oRequest.url );
	fNext();
};