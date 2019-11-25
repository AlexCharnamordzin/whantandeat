$(function () {
    var fixblock_pos = $('#fixblock').position().top;
    $(window).scroll(function () {

        if ($(window).scrollTop() > fixblock_pos) {
            $('#fixblock').css({
                'position': 'fixed',
                'top': '0px',
                'background': 'white',
                'width': '100%',
                'opacity':'.8',
            });
        } else {
            $('#fixblock').css({
                'position': 'static',
                'background': 'none'
            });

        }
    })
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  