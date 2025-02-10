const userInput = document.getElementById("user-input").value;
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const resultDiv = document.getElementById("results-div");

checkButton.addEventListener("click", () => {
  if (!userInput) {
    alert("Please provide a phone number");
  }
});

clearButton.addEventListener("click", () => {
  document.getElementById("user-input").value = "";
});
