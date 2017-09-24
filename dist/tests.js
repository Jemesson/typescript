// functions
let isEnoughtToBeatMF = function (parsecs) {
    return parsecs < 12;
};
let fast = function inc(speed, inc = 1) {
    return speed + inc;
};
let distance = 14;
console.log(`Is ${distance} parsecs enough to beat Millenium Falcon? ${isEnoughtToBeatMF(distance) ? 'Yes' : 'No'}`);
console.log(fast(100) + "km/h");
// arrow functions
let call = (name) => console.log(`Do you copy, ${name}?`);
call('R2D2');
// tests
let message = "Help-me, Obi-Wan Kenobi. You're my only hope.";
console.log(message);
let episode = 4;
console.log("This is the episode: " + episode);
episode = episode + 1;
console.log("Episode: " + episode);
let favoritDroid;
favoritDroid = "BB-8";
console.log("My favorite droid is" + favoritDroid);
let nome = "Jemesson";
console.log("Hello guys my name is: " + nome);
