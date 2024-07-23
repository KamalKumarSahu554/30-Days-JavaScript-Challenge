// Activity 1:
let header = document.getElementById("head");
header.innerText = "Hello Sir!";

let p1 = document.querySelector(".para");
p1.style.backgroundColor = "yellow";

// Activity 2:
let newDiv = document.createElement("div");
newDiv.innerHTML = "This is a div";
document.body.appendChild(newDiv);

let ul = document.querySelector("#list");
let li = document.createElement("li");
li.innerHTML = "Contact";
ul.appendChild(li);

// Activity 3:
document.body.removeChild(newDiv);
