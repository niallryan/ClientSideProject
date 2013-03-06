// This will change the background colour of the news div on the home page to white when the cursor is
// hovering over it and back to its set value when the cursor leaves the div.

// Why? Because I can. And to make it a bit easier to read, I suppose.

var news = document.getElementById("News");

//get original background-colors
var newscolor = news.getAttribute("background-color");

	
news.onmouseover = function() {
	news.style.background="white";
}

news.onmouseout = function() {
	news.style.background=newscolor;
}