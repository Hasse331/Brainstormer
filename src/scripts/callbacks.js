const fs = require("fs");

export function loadData(number) {
  const filePath = "LATEST BRAINSTORMING";
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    document.getElementById("info").textContent = "";
    const firstThreeDigits = data.slice(0, 3);
    number = parseInt(firstThreeDigits, 10);
    document.getElementById("idea-number").textContent = "#" + number;
    document.getElementById("idea-list").value = data;
  } catch (err) {
    document.getElementById("info").textContent =
      "An error occurred: " + err.message;
  }
  return number;
}

export function saveData(number) {
  console.log(number);
  console.log("askdkasd");
  const filePath = "LATEST BRAINSTORMING";
  const stringNumber = number.toString();
  fs.writeFile(
    filePath,
    `${stringNumber} (<-This is loading number of ideas. You can change it manually and remove duplicates.)\n\n ${
      document.getElementById("idea-list").value
    }`,
    "utf-8",
    (err) => {
      if (err) {
        console.log("Some fucking error occurred: ", err);
      } else {
        document.getElementById("bottom-info").textContent =
          "Text saved successfully";
      }
    }
  );
}
