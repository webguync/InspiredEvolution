var slider = jQuery.noConflict();

slider(document).ready(function () {
    slider('img.menu_class').click(function () {
	slider('ul.the_menu').slideToggle('medium');
    });
});