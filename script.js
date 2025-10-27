// Select elements from the page
const greeting = document.getElementById("greeting");
const button = document.getElementById("changeButton");

// Add an event listener to the button
button.addEventListener("click", function() {
  // Change the text
  greeting.textContent = "You clicked the button!";

  // Change the color randomly
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  greeting.style.color = randomColor;
});
