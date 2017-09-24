import {Spacecraft, Containership} from './base-ships'
import {MilleniumFalcon} from './star-fighters'

let falcon = new MilleniumFalcon()
falcon.jumpIntoHyperspace()

let goodForTheJob = (ship: Containership) => falcon.cargoContainers > 2
console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'y': 'n'} `)
