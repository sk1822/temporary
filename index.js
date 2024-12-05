// Add input element inside form, before button, to take fruit description
let form = document.querySelector("form");
let inputElement = document.createElement("input");
let button = document.querySelector("button");
form.insertBefore(inputElement, button);
inputElement.id = "description";

// Show the fruit description in italics on the next line
const fruits = document.querySelector(".fruits");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const fruitsToAdd = document.getElementById("fruit-to-add");
  const newLi = document.createElement("li");
  const newLiText = document.createTextNode(fruitsToAdd.value);
  newLi.appendChild(newLiText);//appnedchild adds as latest element as child but addbefore adds at desired place
  newLi.className = "fruit";

  const deleteBtn = document.createElement("button");
  const deleteBtnText = document.createTextNode("x");
  deleteBtn.appendChild(deleteBtnText);
  deleteBtn.className = "delete-btn";
  newLi.appendChild(deleteBtn);

  let para = document.createElement("p");
  const description = document.getElementById("description");
  let paraText = document.createTextNode(description.value);
  para.appendChild(paraText);
  newLi.appendChild(para);
  para.style.fontStyle = "italic";

  fruits.appendChild(newLi);

  const editBtn = document.createElement("button");
  const editBtnText = document.createTextNode("Edit");
  editBtn.appendChild(editBtnText);
  editBtn.className = "edit-btn";
  newLi.appendChild(editBtn);

  // Clear input fields after adding
  fruitsToAdd.value = "";
  description.value = "";
});

// Filter functionality
const filter = document.getElementById("filter");

filter.addEventListener("keyup", function (event) {
  const fruitEntered = event.target.value.toLowerCase();
  const fruitItems = document.getElementsByClassName("fruit");
  // console.log(fruitItems[3].children[1].textContent.toLowerCase());
  for (let i = 0; i < fruitItems.length; i++) {
    const currentFruitText = fruitItems[i].firstChild.textContent.toLowerCase();
    let currentDescriptionText = "";
    if (fruitItems[i].children[1] !== undefined) {
      currentDescriptionText =
        fruitItems[i].children[1].textContent.toLowerCase();
    }
    console.log(typeof currentFruitText);
    console.log("hii");
    // const secondFruitText = fruitItems[i].para.value.toLowerCase();
    // console.log(currentFruitText);
    // console.log(secondFruitText);
    if (
      currentFruitText.indexOf(fruitEntered) !== -1 ||
      currentDescriptionText.indexOf(fruitEntered) !== -1
    ) {
      fruitItems[i].style.display = "flex";
    } else {
      fruitItems[i].style.display = "none";
    }
  }
});
