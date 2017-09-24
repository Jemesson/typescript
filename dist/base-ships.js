"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Spacecraft {
    constructor(propulsor) {
        this.propulsor = propulsor;
    }
    jumpIntoHyperspace() {
        console.log(`Entering hyperspace with ${this.propulsor}`);
    }
}
exports.Spacecraft = Spacecraft;
