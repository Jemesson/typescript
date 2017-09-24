"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_ships_1 = require("./base-ships");
class MilleniumFalcon extends base_ships_1.Spacecraft {
    constructor() {
        super('Hyperdrive');
        this.cargoContainers = 6;
    }
    jumpIntoHyperspace() {
        if (Math.random() > 0.5) {
            super.jumpIntoHyperspace();
        }
        else {
            console.log("Failed to jump into hyperspace");
        }
    }
}
exports.MilleniumFalcon = MilleniumFalcon;
