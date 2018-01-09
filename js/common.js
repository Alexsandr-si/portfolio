$(document).ready(function() {
    function heightResize() { $(".main_bg_color").css("height", $(window).height());  }
    heightResize();
    $(window).resize(function() { 
        heightResize(); 
    });
    $(".menu_container").click(function() {
        $(this).toggleClass("active_class");
        $(".nav_menu").slideToggle(500);
    });
    $(".ul_top_menu").click(function() {
        $(".nav_menu").slideUp(500); 
        $(".menu_container").removeClass("active_class");
    });
    $(".s_deskr").animated("fadeInUp", "fadeInDown");
    $(".magnif").magnificPopup({type:"image"});
    $("#mixit").mixItUp();
    $(".potrfolio_nav li").click(function() {
        $(".potrfolio_nav li").removeClass("active_li");
        $(this).addClass("active_li");
    });
    $('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		});
    $("input, select, textarea").jqBootstrapValidation();
});