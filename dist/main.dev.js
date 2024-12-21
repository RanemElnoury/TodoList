"use strict";

var userInput = document.getElementById("userInput");
var homeContent = document.getElementById("homeContent");
var searchInput = document.getElementById("searchInput");
var items = [];

if (localStorage.getItem("allItems") != null) {
  items = JSON.parse(localStorage.getItem("allItems"));
  displayItem();
}

function addItem() {
  if (userInput.value !== "") {
    items.push(userInput.value);
    userInput.value = "";
    displayItem();
    localStorage.setItem("allItems", JSON.stringify(items));
  } else {
    console.log("input is required");
  }
}

function deleteItem(index) {
  items.splice(index, 1);
  displayItem();
  localStorage.setItem("allItems", JSON.stringify(items));
}

function displayItem() {
  var cartona = "";
  items.forEach(function (item, ind) {
    cartona += "\n<div\n          class=\"home-item mb-2 rounded-pill text-dark mx-auto w-25 bg-danger d-flex justify-content-between align-items-center\">\n          <p id=\"item\" class=\"m-0 p-0\">".concat(item, "</p>\n          <i  class=\"fa-sharp fa-solid fa-trash\" onClick= \"deleteItem (").concat(ind, ")\"></i>\n        </div>\n");
  });
  homeContent.innerHTML = cartona;
}

searchInput.addEventListener("input", function (event) {
  searchItems(event.target.value);
});

function searchItems(value) {
  var cartona = "";
  items.forEach(function (item, ind) {
    if (item.toLowerCase().includes(value.toLowerCase())) {
      cartona += "\n            <div\n                      class=\"home-item mb-2 rounded-pill text-dark mx-auto w-25 bg-danger d-flex justify-content-between align-items-center\">\n                      <p id=\"item\" class=\"m-0 p-0\">".concat(item.toLowerCase().replace(value, "<span style=\"color: white; font-weight: bolder;\">".concat(value, "</span>")), "</p>\n                      <i  class=\"fa-sharp fa-solid fa-trash\" onClick= \"deleteItem (").concat(ind, ")\"></i>\n                    </div>\n            ");
    }
  });
  homeContent.innerHTML = cartona;
}