var $tabs = jQuery.noConflict();
$tabs(document).ready(function() {

	//Default Action
	$tabs(".tab_content").hide(); //Hide all content
	$tabs("ul.tabs li:first").addClass("active").show(); //Activate first tab
	$tabs(".tab_content:first").show(); //Show first tab content
	
	//On Click Event
	$tabs("ul.tabs li").click(function() {
		$tabs("ul.tabs li").removeClass("active"); //Remove any "active" class
		$tabs(this).addClass("active"); //Add "active" class to selected tab
		$tabs(".tab_content").hide(); //Hide all tab content
		var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
		$tabs(activeTab).fadeIn('slow'); //Fade in the active content
		return false;
	});

});