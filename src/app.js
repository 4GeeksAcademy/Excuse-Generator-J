/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];
window.onload = function generador() {
  //write your code here

  let whos = Math.floor(Math.random() * who.length);
  let actions = Math.floor(Math.random() * action.length);
  let whats = Math.floor(Math.random() * what.length);
  let whens = Math.floor(Math.random() * when.length);

  let excusas =
    who[whos] + " " + action[actions] + " " + what[whats] + " " + when[whens];

  document.getElementById("excusa").innerHTML = excusas;
};
