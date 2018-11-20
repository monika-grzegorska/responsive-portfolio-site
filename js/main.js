
$(document).ready(function () {
   
    var addHideNavbarHandlerToTogglerMenu = function () {
        $('.navbar-nav>li>a').on('click', function () {
            $('.navbar-collapse').collapse('hide');
        });
    }

    //var addSmoothScrollingSupportForNavbarLinks = function () {
    //    $('.navbar-link').click(function () {
    //        var sectionTo = $(this).attr('href');
    //        $('html,body').animate({
    //            scrollTop: $(sectionTo).offset().top
    //        }, 1500);
    //    });
    //}

    addHideNavbarHandlerToTogglerMenu();
    //addSmoothScrollingSupportForNavbarLinks();
});
