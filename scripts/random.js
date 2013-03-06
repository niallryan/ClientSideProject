// Javascriptkit.com (1997) Generating a random number in JavaScript. [online] Available at:
// http://www.javascriptkit.com/javatutors/randomnum.shtml [Accessed: 06 Dec 2012].

// Displays a link if a randomly generated number is less than or equal to 3.

var randomNumber = Math.floor(Math.random()*11);
var link = document.getElementById("secret");

if (randomNumber <= 3) {
	link.style.display="block";
};