(function ($) {

	$('#countdown_dashboard').countDown({

	        targetOffset: {
	            'day':      5,
	            'month':    0,
	            'year':     0,
	            'hour':     0,
	            'min':      0,
	            'sec':      0

	        },


	    });

	$('#email_field').focus(email_focus).blur(email_blur);
	$('#subscribe_form').bind('submit', function() { return false; });

})(jQuery);
