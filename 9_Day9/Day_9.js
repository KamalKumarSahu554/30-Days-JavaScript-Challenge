// # Day9 - DOM Manipulation

// Activity 1: Selecting and Manipulatint Eliments
// Task 1:
let header = document.getElementById("head");
header.textContent = "DOM Manipulation";

// Task 2:
let p1 = document.querySelector(".para1");
p1.style.backgroundColor = "yellow";
/*=================================================*/

// Activity 2: Creating and Appending Elements
// Task 3:
let newDiv = document.createElement("div");
newDiv.textContent = "This is a new div";
document.body.appendChild(newDiv);

// Task 4:
let li = document.createElement("li");
li.innerText = "Contact";
document.querySelector("#list").append(li);
/*=================================================*/

// Activity 3: Removing Elements
// Task 5:
let removeDiv = document.getElementsByClassName("remove-div");
removeDiv[0].remove();

// Task 6:
let parent = document.querySelector(".parent");
let lastChild = parent.lastElementChild;
lastChild.remove();
/*=================================================*/

// Activity 4: Modifying Attributes and Classes
// Task 7:
let img = document.querySelector("img");
img.setAttribute(
  "src",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7yJpEo39N7-g9_RoI3GbRptKdvaAOlvij2Q&s"
);

// Task 8:
let aquaDiv = document.querySelector(".aqua");
aquaDiv.classList.add("red");
aquaDiv.classList.remove("blue");
/*=================================================*/

// Activity 5: Event Handling
// Task 9:
let para = document.querySelector(".para");
document.querySelector(".btn").addEventListener("click", () => {
  para.textContent = "This is Changed paragraph";
});

// Task 10:
let bdColor = document.querySelector(".bdColor");
bdColor.addEventListener("mouseover", () => {
  bdColor.style.border = "8px solid red";
});
/*=================================================*/
