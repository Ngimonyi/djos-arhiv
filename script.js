const express = require('express');
const path = require('path'); // Import the path module
const app = express();
const port = 3000;

// Define a route to serve the JavaScript file
app.get('/', (req, res) => {
  // Use path.join() to construct the correct file path
  const filePath = path.join(__dirname, 'js', 'script.js');

  // Send the JavaScript file
  res.sendFile(filePath);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});





  
<script type="text/javascript" src="js/script.js"></script>
    
 // When the user scrolls the page, execute myFunction
 window.onscroll = function() {
  myFunction();
};

// Get the navbar
var mainHeader = document.getElementById("mainHeader");

// Get the offset position of the navbar
var sticky = mainHeader.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    mainHeader.classList.add("sticky");
  } else {
    mainHeader.classList.remove("sticky");
  }
}
       