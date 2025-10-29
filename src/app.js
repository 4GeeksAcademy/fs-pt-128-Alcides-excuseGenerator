import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function getRmandomNumber(minimo, maximo) {
  return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

function randomExcuse(unArray) {
  let max = unArray.length - 1;
  let min = 0;
  console.log(max, min, unArray);

  let random = getRmandomNumber(min, max);
  return unArray[random];
}

window.onload = function () {
  //write your code here
  document.querySelector("#excuse").innerHTML = randomExcuse(who) + " " + randomExcuse(action) + " " + randomExcuse(what) + " " + randomExcuse(when)
}

