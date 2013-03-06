var familytreeStyleLink, bearleaderStyleLink;

familytreeStyleLink = document.getElementById("familytree");
bearleaderStyleLink = document.getElementById("bearleader");

function setActiveStyleSheet (styleId) {
	
	var i = 0;
	var linkItem, linkArray;
	
	linkArray = document.getElementsByTagName("link");
		
	for ( i = 0; i < linkArray.length; i++ ) {
		linkItem = linkArray[i];
		if (linkItem.getAttribute("rel").indexOf("style") != -1 && linkItem.getAttribute("title") ) {
			linkItem.disabled = true;
					
			if (linkItem.getAttribute("title") === styleId ) {
				linkItem.disabled = false;
			}
		}
	}
}

function getActiveStyleSheet () {
	
	var i = 0;
	var linkItem, linkArray;
	
	linkArray = document.getElementsByTagName( "link" );
	
	for ( i = 0; i < linkArray.length; i++ ) {
		
		linkItem = linkArray[i];
		
		if (linkItem.getAttribute("rel").indexOf("style") != -1 && linkItem.getAttribute("title") && !linkItem.disabled ) {
			return linkItem.getAttribute("title");
		}
	}
	return null;
}

function createCookie ( name, value, days ) {
	var expires;
	
	if (days) {
		var date = new Date();
		date.setTime ( date.getTime() + (days*24*60*60*1000) );
		expires = "; expires=" + date.toGMTString();
	} else {
		expires = "";
	}
	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie ( name ) {
	var nameEquals = name + "=";
	var cookieArray = document.cookie.split(';');
	var i = 0;
	
	for ( i = 0; i < cookieArray.length; i++ ) {
		
		var c = cookieArray[i];
		
		while ( c.charAt(0) == ' ' ) {
			c = c.substring ( 1, c.length );
		}
		
		if ( c.indexOf ( nameEquals ) == 0 ) {
			return c.substring ( nameEquals.length, c.length );
		}
	}
	return null;
}

familytreeStyleLink.onclick = function() {
	setActiveStyleSheet ( this.id );
	
	// Set Header Image for Family Tree Stylesheet
	document.getElementById("headimg").setAttribute("src", "images/headerimage.png");
};

bearleaderStyleLink.onclick = function() {
	setActiveStyleSheet ( this.id );
	
	// Set Header Image for Bear Leader Stylesheet
	// Only works if user changes to Bear Leader style on home page, original header image is displayed on other pages otherwise.
	// Have ran out of time to get this working properly, it's a bit beyond me at this stage.
	document.getElementById("headimg").setAttribute("src", "images/headerimage2.jpg");
};

window.onload = function() {
		var cookie = readCookie ("style");
		var title;
		
		if (cookie) {
			title = cookie;
			setActiveStyleSheet(title);
		}
}

window.onunload = function() {
		var title = getActiveStyleSheet();
		
		createCookie("style", title, 30);

}
