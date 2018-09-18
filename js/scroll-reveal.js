var $window = $(window),
    win_height_padded = $window.height() * 1.1;
//isTouch = Modernizr.touch;

$window.on('scroll', revealOnScroll);

$("li,p,h2").each(function() {
    $(this).addClass("revealOnScroll");
});

function revealOnScroll() {
    var scrolled = $window.scrollTop();
    $(".revealOnScroll:not(.animated)").each(function () {
        var $this = $(this),
        offsetTop = $this.offset().top;
        if (scrolled + win_height_padded+25 > offsetTop) {

            $this.addClass('animated');
            $this.velocity(
                {
                    translateY: [0,"100%"],
                    opacity: [1,0]
                },1000,'ease');
        }
    });
}