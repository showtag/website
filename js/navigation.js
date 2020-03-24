//Header
$(window).scroll(function() {
    if ($(window).scrollTop() > 5) {
        $('#main-header').addClass('sticky');
    } else {
        $('#main-header').removeClass('sticky');
    }
});

$(document).mousemove(function(event) {
    var currentMousePos = { x: -1, y: -1 };
    currentMousePos.x = event.clientX;
    currentMousePos.y = event.clientY;
    if (currentMousePos.y < 100) {
        $('.main-header').addClass('sticky');
    }
});

// Navigation
$('.mobile-toggle').click(function() {
    if ($('.main-header').hasClass('open-nav')) {
        $('.main-header').removeClass('open-nav');
    } else {
        $('.main-header').addClass('open-nav');
    }
});

$('.main-header li a').click(function() {
    if ($('.main-header').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main-header').removeClass('open-nav');
    }
});


$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});