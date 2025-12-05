console.log('Hello!');
/*
const deleteButton = document.querySelector('#deleteButton');
console.log(deleteButton);

function deleteButtonClick() {
  console.log('knapp Click');

  const header = document.querySelector('#header');
  console.log(header);

  const main = document.querySelector('#main');
  console.log(main);

  header.classList.add('hidden');
  main.classList.add('hidden');
}

deleteButton.addEventListener('click', deleteButtonClick);
*/

const addFront = document.querySelector("#addFront")
const removeFront = document.querySelector("#removeFront")
const addBack = document.querySelector("#addBack")
const removeBack = document.querySelector("#removeBack")

let list = [];


function dynamicList() {
  event.preventDefault();

  const textInput = document.querySelector("#textInput").value;
  const displayList = document.querySelector("#displayList")
  

  if (event.target.id === "addFront") {
      list.unshift(textInput);

  } else if (event.target.id === "removeFront") {
      list.shift();
      
  } else if (event.target.id === "addBack") {
      list.push(textInput);
    
      
  } else if (event.target.id === "removeBack") {
      list.pop();
      
  } else {
      console.log("Noe gikk galt")
  }

  
  if (list.length < 1) {
    displayList.textContent = ""
    const placeholder = document.createElement("placeholder")
    placeholder.textContent = "Det er ingenting å gjøre her :("
    displayList.appendChild(placeholder)
    console.log("true")
    
  } else {
    displayList.textContent = "" 
    console.log("false")}
    
    list.forEach(function(item) {
      event.preventDefault()
      const listItem = document.createElement("li"); // Create a new <li> element
      listItem.textContent = item; // Set its text content
      displayList.appendChild(listItem); // Append it to the <ul>
      const line = document.createElement("hr");
      listItem.appendChild(line);
    });
}

/*
function dynamicList() {
  event.preventDefault();

  const textInput = document.querySelector("#textInput").value;
  const displayList = document.querySelector("#displayList");

  if (event.target.id === "addFront") {
      list.unshift(textInput);
      displayList.textContent = list;
  } else if (event.target.id === "removeFront") {
      list.shift();
      displayList.textContent = list;
  } else if (event.target.id === "addBack") {
      list.push(textInput);
      displayList.textContent = list;
  } else if (event.target.id === "removeBack") {
      list.pop();
      displayList.textContent = list;
  } else {
      console.log("Noe gikk galt")
  }
    
} */

addFront.addEventListener("click", dynamicList);
removeFront.addEventListener("click", dynamicList);
addBack.addEventListener("click", dynamicList);
removeBack.addEventListener("click", dynamicList);

const emptyList = document.querySelector("#emptyList")

function emptyListAction () {
 const list = []
}

emptyList.addEventListener("click", emptyListAction)






