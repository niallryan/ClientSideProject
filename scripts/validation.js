$(document).ready( function() {
	$('#mailinglist').submit( function() {
		if( !isEmail( this.email.value ) ) {
			$('#email').css('background-color','#f7bebe');
			$('#emailTip').toggle(1000);
			return false;
		}
	});
});

$(document).ready( function() {
	$('#email').blur( function() {
		$('#email').css('background-color','#fff');
		$('#emailTip').hide();
	});
});

$(document).ready( function() {
	$('#contactform').submit( function() {
		if( !isName( this.firstName.value ) ) {
			$('#firstName').css('background-color','#f7bebe');
			$('#nameTip').toggle(1000);
			return false;
		}
	});
});

$(document).ready( function() {
	$('#firstName').blur( function() {
		$('#firstName').css('background-color','#fff');
		$('#nameTip').hide();
	});
});

$(document).ready( function() {
	$('#contactform').submit( function() {
		if( !isName( this.lastName.value ) ) {
			$('#lastName').css('background-color','#f7bebe');
			$('#lastnameTip').toggle(1000);
			return false;
		}
	});
});

$(document).ready( function() {
	$('#lastName').blur( function() {
		$('#lastName').css('background-color','#fff');
		$('#lastnameTip').hide();
	});
});

function isEmail(string) {
	
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 

	if (emailPattern.test(string)) {
		return true;
	} else {
		return false;
	}
}

function isName(string) {

	var namePattern = /^[A-Z   \.\-']{2,20}$/i;
	
	if (namePattern.test(string)) {
		return true;
	} else {
		return false;
	}
}
//This next chunk of code won't work for me... can't figure out why.

//var fmToCheck = document.getElementById("emailForm");
//var emailField = document.getElementById("email");

//fmToCheck.onsubmit = isEmail(emailField.value);


//function isEmail(string)
//{
//	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 

//	if (emailPattern.test(string))
//	{
//		return true;
//	}
//	else 
//	{
//		alert("Please enter a valid email address.");
//		return false; // Stops form details from being submitted
//	}
//}