// functions
let isEnoughtToBeatMF = function(parsecs: number): boolean {
  return parsecs < 12
}
let fast = function inc(speed: number, inc: number = 1): number {
  return speed + inc
}
let distance = 14

console.log(`Is ${distance} parsecs enough to beat Millenium Falcon? ${isEnoughtToBeatMF(distance) ? 'Yes': 'No'}` )
console.log(fast(100) + "km/h")

// arrow functions
let call = (name: string) => console.log(`Do you copy, ${name}?`)
call('R2D2')

// tests
let message: string = "Help-me, Obi-Wan Kenobi. You're my only hope."
console.log(message)

let episode: number = 4
console.log("This is the episode: "+ episode)

episode = episode+1
console.log("Episode: "+ episode)

let favoritDroid: string
favoritDroid = "BB-8"
console.log("My favorite droid is" + favoritDroid)

let nome: string = "Jemesson"
console.log("Hello guys my name is: " + nome)
