$(document).ready(function()
{
	$('#img1').click(function()
		{
			$(this).fadeOut(700, function() {$('#fader').fadeIn(700);});
		});
	$('#fader').click(function()
		{
			$(this).fadeOut(700, function() {$('#img1').fadeIn(700);});
		});
});