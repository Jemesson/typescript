"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const star_fighters_1 = require("./star-fighters");
let falcon = new star_fighters_1.MilleniumFalcon();
falcon.jumpIntoHyperspace();
let goodForTheJob = (ship) => falcon.cargoContainers > 2;
console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'y' : 'n'} `);
