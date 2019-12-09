"use strict";
exports.__esModule = true;
var star_fighters_1 = require("./star-fighters");
var _ = require("lodash");
console.log(_.pad("typescript examples", 40, "="));
console.log("#####Its My Millenium Falcon. Welcome to my ship!#####");
var ship = new star_fighters_1.MilleniumFalcon();
ship.jumpIntoHyperspace();
var falcon = new star_fighters_1.MilleniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return falcon.cargoContainers > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'yeah' : 'noo') + " ");
var status = false;
while (true) {
    console.log(status);
    status = !status;
}
