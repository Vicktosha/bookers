// smooth scroll and page up
$(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
        $('.pageUp').fadeIn();
    } else {
        $('.pageUp').fadeOut();
    }
});


