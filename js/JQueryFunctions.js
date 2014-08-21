
//status button toggle
(function($){
	$(document).ready(function(){
 $(".status").click(function() {
  $("#slider").slideToggle(2000);
    });
	});
 })(jQuery);

(function ($) {
$(document).ready (function(){
    $('.X-Button').click(function(){
        $('#slider').slideUp(1000);
    });
});
})(jQuery);


//personal website text fadeIn
(function($){
	$(document).ready(function(){
$("h2#Personal").delay(5000).fadeTo(3000, 1);
	});
 })(jQuery);
   
 
//modal window PopUp for skillset

        (function($) {
			$(document).ready (function(){

            // Binding a click event
                       $('a.PopUp1').on('click', function(e) {

                // Prevents the default action to be triggered. 
                e.preventDefault();


                // Triggering bPopup when click event is fired
               $('#SkillsetDisplay').bPopup({
            speed: 650,
            transition: 'slideIn',
     transitionClose: 'slideBack'
        });

            });
			});
        
    })(jQuery);
	
	//modal window PopUp for philosophy

        (function($) {
			$(document).ready (function(){

            // Binding a click event
            $('a.PopUp2').on('click', function(e) {

                // Prevents the default action to be triggered. 
                e.preventDefault();


                // Triggering bPopup when click event is fired
               $('#PhilosophyDisplay').bPopup({
            speed: 650,
            transition: 'slideIn',
     transitionClose: 'slideBack'
        });

            });
			});
        
    })(jQuery);
	
	//modal window PopUp for philosophy

        (function($) {
			$(document).ready (function(){

            // Binding a click event
                        $('a.PopUp3').on('click', function(e) {

                // Prevents the default action to be triggered. 
                e.preventDefault();


                // Triggering bPopup when click event is fired
               $('#HireMeDisplay').bPopup({
            speed: 650,
            transition: 'slideIn',
     transitionClose: 'slideBack'
        });

            });
			});
        
    })(jQuery);


//row striping
(function($){
$(document).ready (function(){
$('#Skillset tr:odd').addClass("odd");

});

 })(jQuery);
 
//show and hide text when hovering over portfolio icons
(function($){
$(document).ready(function(){
$("#hoverLinks").find("a").hover(function(){
    $("#PortfolioInfo>*").hide()
   .filter($(this).data("filter")).show()
});
});

})(jQuery);


  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-94222-1', 'auto');
  ga('send', 'pageview');



