var road = document.querySelector(".background");
var bike2 = document.getElementById("bike2");
var bike3 = document.getElementById("bike3");
var bike = document.getElementById("bike");
var baloon = document.getElementById("baloon");



var frames = [
    {transform: "translate(0%, 0%)"},
    {transform: "translate(-235%, 0%)"},
]
var timing = {
    duration: 3000,
    iterations: Infinity,
}    

var bike1frames = [
    {transform: "translate(0%)"},
    {transform: "translate(+100%)"},

]
var bike1timing = {
    duration: 4000,
    iterations: Infinity,
    direction: "alternate",
    easing: 'ease-in',

}
var bike2timing = {
    duration: 3000,
    iterations: Infinity,
    direction: "alternate",
    easing: 'ease-in',

}    

var bikeframes = [
    {transform: "translate(0px,0px)"},
    {transform: "translate(50px,-50px)"},
    {transform: "translate(0px,0px)"},
    {transform: "translate(-25px,25px)"},
    {transform: "translate(0px,0px)"},
    {transform: "translate(-40px,10px)"},
    {transform: "translate(0px,0px)"},
]
var biketiming = {
    delay: 1000,
    duration: 10000,
    iterations: Infinity,
    direction: "alternate"
}   

var baloonFrames = [
    {transform: "translate(50px,50px) scale(0.5)"},
    {transform: "translate(70px,50px) scale(0.7)"},
    {transform: "translate(120px,50px) scale(1)"},
    {transform: "translate(250px,50px) scale(1.3)"},
    {transform: "translate(350px,50px) scale(1.5)"},
    {transform: "translate(450px,50px) scale(1.4)"},
    {transform: "translate(550px,85px) scale(1.2)"},
    {transform: "translate(680px,50px) scale(0.9)"},


]

var baloonTimting = {
    duration: 30000,
    iterations: Infinity,
    direction: "alternate",

}

var MovingRoad = road.animate(frames, timing);
var MovingBike2 = bike2.animate(bike1frames, bike1timing);
var MovingBike3 = bike3.animate(bike1frames, bike2timing);
var MovingBike = bike.animate(bikeframes, biketiming);
var MovingBaloon = baloon.animate(baloonFrames, baloonTimting);


MovingRoad.currentTime = MovingRoad.effect.getTiming().duration / 2

setInterval(()=> {if(MovingRoad.playbackRate > 0.7){ MovingRoad.playbackRate *= 0.9 }}, 1000)

var driveFaster = () =>{
    MovingRoad.playbackRate *=1.1    }


document.addEventListener("click", driveFaster);
document.addEventListener("")