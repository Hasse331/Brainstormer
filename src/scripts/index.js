import { saveData, loadData } from "./callbacks.js";

const addField = document.getElementById("add-field");
const ideaList = document.getElementById("idea-list");

// Buttons:
const addBtn = document.getElementById("add-btn");
const nextBtn = document.getElementById("next-btn");
const resetBtn = document.getElementById("reset");
const saveBtn = document.getElementById("save-to-txt-btn");
const loadBtn = document.getElementById("load-btn");

let number = 0;

addBtn.addEventListener("click", () => {
  const inputValue = addField.value;

  number++;
  document.getElementById("idea-number").textContent = "#" + number;

  if (number >= 100) {
    document.getElementById(
      "info"
    ).textContent = `#${number} ideas added! Press next or keep adding more ideas.`;
  }
  addField.value = "";
  ideaList.value += `#${number}. ${inputValue} \n`;
});

resetBtn.addEventListener("click", () => {
  number = 0;
  document.getElementById("idea-number").textContent = "#" + 1;
  document.getElementById("info").textContent = "";
  document.getElementById("bottom-info").textContent = "";
  document.getElementById("idea-list").value = "";
});

saveBtn.addEventListener("click", () => saveData(number));
loadBtn.addEventListener("click", () => {
  let newNumber = loadData(number);
  number = newNumber;

  console.log("Updated number:", number);
});

nextBtn.addEventListener("click", function () {});
