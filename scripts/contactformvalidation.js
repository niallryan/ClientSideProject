// Modified code from:

// Modern JavaScript : develop and design
// ULLMAN, L. E. (2012). Modern JavaScript: develop and design. Berkeley, CA, Peachpit Press.

// doesn't work, can't figure out why.

function validateForm(e) {
	'use strict';
	
	if (typeof e == 'undefined') e = window.event;

	var firstName = U.$('firstName');
	var initial = U.$('initial');
	var lastName = U.$('lastName');
	var email2 = U.$('email2');
	var error = false
	
	if  (/^[A-Z   \.\-']{2,20}$/i.test(firstName.value)) {
		removeErrorMessage('firstName');
	} else {
		addErrorMessage('firstName', 'Please enter your first name.');
		error = true;
	}

	if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(email2.value)) {
		removeErrorMessage('email2');
	} else {
		addErrorMessage('email2', 'Please enter your email address.');
		error = true;
	}
	
	if (error) {
		if (e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}
		return false;
	}
	
}

function toggleSubmit() {
	'use strict';
	var submit = U.$('submit2');
	
	if (U.$('checkBox').checked) {
		submit.disabled = false;
	} else {
		submit.disabled = true;
	}
}

window.onload = function() {
	'use strict';
	
	U.addEvent(U.$('contactform'), 'submit2', validateForm);
	U.$('submit2').disabled = true;
	U.addEvent(U.$('checkBox'), 'change', toggleSubmit);
	U.enableTooltips('firstName');
	U.enableTooltips('email2');
};