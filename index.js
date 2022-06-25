/*
for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", addSound);
}

function addSound() {
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

document.addEventListener("keydown", keyDetect);
function keyDetect(event){
  makeSound(event.key);
  buttonAnimation(event.key);
}

function makeSound(key){
  switch (key) {
    case "w":
      var btn1 = new Audio("sounds/tom-1.mp3");
      btn1.play();
      break;

    case "a":
      var btn2 = new Audio("sounds/tom-2.mp3");
      btn2.play();
      break;

    case "s":
      var btn3 = new Audio("sounds/tom-3.mp3");
      btn3.play();
      break;
    case "d":
      var btn4 = new Audio("sounds/tom-4.mp3");
      btn4.play();
      break;

    case "j":
      var btn5 = new Audio("sounds/snare.mp3");
      btn5.play();
      break;

    case "k":
      var btn6 = new Audio("sounds/crash.mp3");
      btn6.play();
      break;

    case "l":
      var btn7 = new Audio("sounds/kick-bass.mp3");
      btn7.play();
      break;
    default: console.log(event.key);

  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
*/

for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", addSound);
}

function addSound() {
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

document.addEventListener("keydown", keyDetect);

function keyDetect(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
}

function makeSound(key) {
  switch (key) {
    case "w":
      var sound1 = new Audio("tom-1.mp3");
      sound1.play();
      break;
    case "a":
      var sound2 = new Audio("tom-2.mp3");
      sound2.play();
      break;
    case "s":
      var sound3 = new Audio("tom-3.mp3");
      sound3.play();
      break;
    case "d":
      var sound4 = new Audio("tom-4.mp3");
      sound4.play();
      break;
    case "j":
      var sound5 = new Audio("snare.mp3");
      sound5.play();
      break;
    case "k":
      var sound6 = new Audio("crash.mp3");
      sound6.play();
      break;
    case "l":
      var sound7 = new Audio("kick-bass.mp3");
      sound7.play();
      break;
    default:
      console.log(event.key);

  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
