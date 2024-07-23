// Activity 1:
let header = document.getElementById("head");
header.textContent = "DOM Manipulation";

let p1 = document.querySelector(".para1");
p1.style.backgroundColor = "yellow";

// Activity 2:
let newDiv = document.createElement("div");
newDiv.textContent = "This is a new div";
document.body.appendChild(newDiv);

let li = document.createElement("li");
li.innerText = "Contact";
document.querySelector("#list").append(li);

// Activity 3:
let removeDiv = document.getElementsByClassName("remove-div");
removeDiv[0].remove();

let parent = document.querySelector(".parent");
let lastChild = parent.lastElementChild;
lastChild.remove();

// Activity 4:
let img = document.querySelector("img");
img.setAttribute(
  "src",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7yJpEo39N7-g9_RoI3GbRptKdvaAOlvij2Q&s"
);

let aquaDiv = document.querySelector(".aqua");
aquaDiv.classList.add("red");
aquaDiv.classList.remove("blue");
