// Modern JavaScript : develop and design
// ULLMAN, L. E. (2012). Modern JavaScript: develop and design. Berkeley, CA, Peachpit Press.

var U = {

	$: function(id) {
    	'use strict';
        
        if (typeof id == 'string') {
            return document.getElementById(id);
        }
    },

    setText: function(id, message) {
        'use strict';
        if ( (typeof id == 'string') && (typeof message == 'string') ) {
    
            var output = this.$(id);
            if (!output) return false;
        
            if (output.textContent !== undefined) {
                output.textContent = message;
            } else {
                output.innerText = message;
            }
            return true;
        }
    },
    
    addEvent: function(obj, type, fn) {
        'use strict';
        if (obj && obj.addEventListener) {
            obj.addEventListener(type, fn, false);
        } else if (obj && obj.attachEvent) {
            obj.attachEvent('on' + type, fn);
        }
    },
    
    removeEvent: function(obj, type, fn) {
        'use strict';
        if (obj && obj.removeEventListener) {
            obj.removeEventListener(type, fn, false);
        } else if (obj && obj.detachEvent) {
            obj.detachEvent('on' + type, fn);
        }
    },

	enableTooltips: function(id) {
	    'use strict';
	
		var elem = this.$(id);
		
		this.addEvent(elem, 'focus', this.showTooltip);
	    this.addEvent(elem, 'mouseover', this.showTooltip);
	    this.addEvent(elem, 'blur', this.hideTooltip);
	    this.addEvent(elem, 'mouseout', this.hideTooltip);
	
	},

	showTooltip: function(e) {
	    'use strict';
	
		if (typeof e == 'undefined') var e = window.event;

		var target = e.target || e.srcElement;
		target.previousSibling.lastChild.style.visibility = 'visible';

	},
	
	hideTooltip: function(e) {
	    'use strict';
	
		if (typeof e == 'undefined') var e = window.event;

		var target = e.target || e.srcElement;
		target.previousSibling.lastChild.style.visibility = 'hidden';

	}

};