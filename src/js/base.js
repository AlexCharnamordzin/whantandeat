//halfvisiblenav
$(function () {
    var fixblock_pos = $('#fixblock').position().top;
    $(window).scroll(function () {

        if ($(window).scrollTop() > fixblock_pos) {
            $('#fixblock').css({
                'position': 'fixed',
                'top': '0px',
                'background': 'white',
                'width': '100%',
                'opacity': '.8',
            });
        } else {
            $('#fixblock').css({
                'position': 'static',
                'background': 'none'
            });

        }
    })
})

//yakorscroll

$(document).ready(function () {
    $("nav").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body, html').animate({
            scrollTop: top
        }, 1500);
    });
});

//scrolltop

$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() != 0) {

            $('#toTop').fadeIn();

        } else {

            $('#toTop').fadeOut();

        }

    });

    $('#toTop').click(function () {

        $('body,html').animate({
            scrollTop: 0
        }, 800);

    });

});

//forburger

$("#navToggle").click(function () {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked");
});

//owlcorusel

$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})