/*---------------------------------------*/
/*	NAVIGATION AND NAVIGATION VISIBLE ON SCROLL
/*---------------------------------------*/
$(window).on("load", function() {
    mainNav();
    $(window).scroll(function() {
        mainNav();
    });

    function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40) $('.main-menu').stop().animate({
            "opacity": '1',
            "top": '0'
        });
        else $('.main-menu').stop().animate({
            "top": '-70',
            "opacity": '0'
        });

    }
});