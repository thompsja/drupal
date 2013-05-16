jQuery(document).ready(function($) {
	var showFirst = $('.view-image-rotator div.view-content div.item-list ul li.views-row');
	var setNavNumber = $(showFirst).size();
	$(showFirst).hide();
	$(showFirst).first().show();	
	$('.view-image-rotator').prepend('<ul id="rotator-nav"/>');
	for ($i=1;$i<=setNavNumber;$i++) {
		$('#rotator-nav').append('<li><a href="#"></a></li>');
	}
	$('#rotator-nav li a').first().css('background-color' , '#777');
	
	$('#rotator-nav li a').bind('click', function() { 
		var setClickVar = $(this);
		$('#rotator-nav li a').css('background-color' , '#111');
		$(setClickVar).css('background-color' , '#777');
		var indexVar = $(setClickVar).parent('li').index();
		$('.view-image-rotator div.view-content div.item-list ul li.views-row').hide(0);		
		$('.view-image-rotator div.view-content div.item-list ul li.views-row:eq(' + indexVar + ')').fadeIn(700);		
		return false;
	});
});