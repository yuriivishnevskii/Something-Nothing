$(document).ready(function(){
    $('.menu_btn').on('click', function(e) {
        e.preventDefault();
        $('.menu').toggleClass('menu_active');
    })

    $('#first_Something_Nothing, #menu').on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1800);
    });

    $(window).on('scroll', function() {
        var scrollCoef = 0.00114;
        $('#wrapper').css({
            opacity: 1 - $(window).scrollTop() * scrollCoef
        })
    });

    $('.slider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        fade: true,
        fadeSpeed: 10000
    });
});