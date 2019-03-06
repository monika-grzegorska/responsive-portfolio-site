
$(document).ready(function () {
    var addHideNavbarHandlerToTogglerMenu = function () {
        $('.navbar-nav>li>a').on('click', function () {
            $('.navbar-collapse').collapse('hide');
        })
    };

    $(window).scroll(function () {
        var scrollval = $(this).scrollTop();
        $("#title-welcome").css("transform", 'translate(0px,' + scrollval/2 + '%)');
    });

    // navigation appearing

    var timeline = new TimelineMax();
    timeline.from(".logo", 1, { x: -100, opacity: 0 }, 0)
        .from(".logo-title", 1, { x: -100, opacity: 0 }, 0)
        .from(".site-name", 1, { y: -100, opacity: 0 }, 0)
        .from(".lead", 1, { y: 100, opacity: 0 }, 0)
        .from(".navbar-toggler-icon", 1, { x: 100, opacity: 0 }, 0)
        .from(".site-navigation", 2, { x: 100, opacity: 0 });


    // loading page

        addHideNavbarHandlerToTogglerMenu();
});
