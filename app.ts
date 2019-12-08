import {Containership} from './base-ships'
import {MilleniumFalcon} from './star-fighters'
import * as _ from 'lodash'

console.log(_.pad("typescript examples", 40, "="))
console.log("#####Its My Millenium Falcon. Welcome to my ship!#####");

let ship = new MilleniumFalcon()
ship.jumpIntoHyperspace()

let falcon = new MilleniumFalcon()
falcon.jumpIntoHyperspace()

const goodForTheJob = (ship: Containership) => falcon.cargoContainers > 2
console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'yeah': 'noo'} `)
