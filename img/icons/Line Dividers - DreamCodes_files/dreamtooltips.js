/*
 * Floating Content Tooltips
 *
 */
$(document).ready(function() {
	//Tooltips
	$(".tsc_content_tooltip").hover(function(){
		tip = $(this).find('.tsc_content_tooltip_container');
		tip.show(); //Show tooltip
	}, function() {
		tip.hide(); //Hide tooltip		  
	}).mousemove(function(e) {
		var mousex = e.pageX + 20; //Get X coodrinates
		var mousey = e.pageY + 20; //Get Y coordinates
		var tipWidth = tip.width(); //Find width of tooltip
		var tipHeight = tip.height(); //Find height of tooltip
		var tipVisX,tipVisY;
		
		//Distance of element from the right edge of viewport
			tipVisX= $(window).width() - (mousex + tipWidth)-$(".main").css('margin-left');
			//Distance of element from the bottom of viewport
			tipVisY  = $(window).height() - (mousey + tipHeight)-$(".main").css('margin-top');

		
			
			
		
		  
		if ( tipVisX < 20 ) { //If tooltip exceeds the X coordinate of viewport
			mousex = e.pageX - tipWidth - 20;
		} if ( tipVisY < 20 ) { //If tooltip exceeds the Y coordinate of viewport
			mousey = e.pageY - tipHeight - 20;
		} 
		if($(this).parents(".ldd_menu").length){
		//Distance of element from the right edge of viewport
			mousex=mousex -$(this).parents("li").parents("li").position().left;
			//Distance of element from the bottom of viewport
			mousey  = mousey-$(this).parents("li").parents("li").position().top-20;
		}
		tip.css({  top: mousey, left: mousex });
	});
});

