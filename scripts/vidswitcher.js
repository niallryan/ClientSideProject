var railroadLink, familytreevidLink, video, sprawl, cantgoback, cantgoback2, stones, sleepitoff

var vidsource = ["http://www.youtube.com/embed/WF3Pt4-tUjE", "http://www.youtube.com/embed/XamU1tjE3gU", "http://www.youtube.com/embed/bUQ7sZhK5rQ", "http://www.youtube.com/embed/HjCgPQKuUwo", "http://player.vimeo.com/video/8908278?badge=0",
					"http://player.vimeo.com/video/10316794?badge=0", "http://player.vimeo.com/video/12377205?badge=0" ]

railroadLink = document.getElementById("railroad");
familytreevidLink = document.getElementById("familytreevid");
sprawlLink = document.getElementById("sprawl");
cantgobackLink = document.getElementById("cantgoback");
cantgoback2Link = document.getElementById("cantgoback2");
stonesLink = document.getElementById("stones");
sleepitoffLink = document.getElementById("sleepitoff");
video = document.getElementById("switchvideo");

railroadLink.onclick = function() {
	video.setAttribute("src", vidsource[0]);
	return false;
};

familytreevidLink.onclick = function() {
	video.setAttribute("src", vidsource[1]);
	return false;
};

sprawlLink.onclick = function() {
	video.setAttribute("src", vidsource[2]);
	return false;
};

cantgobackLink.onclick = function() {
	video.setAttribute("src", vidsource[3]);
	return false;
};

cantgoback2Link.onclick = function() {
	video.setAttribute("src", vidsource[4]);
	return false;
};

stonesLink.onclick = function() {
	video.setAttribute("src", vidsource[5]);
	return false;
};

sleepitoffLink.onclick = function() {
	video.setAttribute("src", vidsource[6]);
	return false;
};