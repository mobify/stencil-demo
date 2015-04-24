define([
    '$'
],
function($) {
    var homeUI = function() {
        // Add any scripts you would like to run only on the home page here
        $('.js-header-nav__toggle').on('click', function() {
            $('.c-main-menu').trigger('main-menu:toggle');
        });
    };

    return homeUI;
});
