// # Day10 - Event Handling

// Activity 1: Basic Event Handling
// Task 1:
let textBtn = document.querySelector(".textBtn");
let para = document.querySelector(".para");
textBtn.addEventListener("click", () => {
  para.textContent =
    "Speak Confidently: Don't fear mistakes. Find a language partner or join a conversation group. Speaking regularly boosts your confidence and improves your skills.";
});

// Task 2:
let img = document.querySelector(".img");
img.addEventListener("dblclick", () => {
  img.style.display = "none";
});
/*=================================================*/

// Activity 2: Mouse Events
// Task 3:
let box = document.querySelector(".box");
box.addEventListener("mouseover", () => box.classList.add("bgColor"));

// Task 4:
let text = document.querySelector(".text");
text.addEventListener("mouseout", () => {
  text.style.backgroundColor = "transparent";
});
/*=================================================*/

// Activity 3: Keyboard Events
// Task 3:
let keyDown = document.querySelector(".keyDown");
keyDown.addEventListener("keydown", () => {
  console.log("keydown pressed");
});
// Task 4:
let keyUp = document.querySelector(".keyUp");
const displayParagraph = document.getElementById("displayParagraph");
keyUp.addEventListener("keyup", () => {
  let currentValue = keyUp.value;
  displayParagraph.textContent = currentValue;
});
/*=================================================*/

// Activity 4: Form Event
// Task 7:
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = new FormData(document.querySelector("form"));
  formData.forEach((value, key) => {
    console.log(`${key}:${value}`);
  });
});

//Task 8:
document.getElementById("mySelect").addEventListener("change", (event) => {
  document.getElementById(
    "selectedValue"
  ).innerText = `selected option is: ${event.target.value}`;
});
/*=================================================*/

//Activity 5: Event Delegation
//Task 9:
document.getElementById("ull").addEventListener("click", (pp) => {
  if (pp.target && pp.target.nodeName === "li") {
    console.log("Clicked list item text:", pp.target.textContent);
  }
});
