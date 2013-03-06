var image = document.getElementById("image");
var imageArray = ["images/slideshow/1.jpg", "images/slideshow/2.jpg", "images/slideshow/3.jpg", "images/slideshow/4.jpg", "images/slideshow/5.jpg"];
var imageIndex = 0;

function changeImage() {
	image.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

var intervalHandle = setInterval(changeImage,5000);

image.onclick =  function() {
	clearInterval(intervalHandle);
	document.getElementById("stopped").style.display="block";
};