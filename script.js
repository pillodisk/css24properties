var toggleButton = document.getElementById("toggleButton");
var content = document.getElementById("content");

// Add a click event listener to the button
toggleButton.addEventListener("click", function() {
  // Toggle the display of the content element
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
});

