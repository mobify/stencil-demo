define([
    '$',
    'sheet-left',
    'pinny',
    'bellows'
],
function($, sheetLeft, pinny, bellows) {
    var homeUI = function() {
        // Add any scripts you would like to run only on the home page here

        $('.bellows').bellows();
        $('.c-main-menu').pinny({
            effect: sheetLeft,
            coverage: '85%',
            structure: false
        });

        $('.js-header-nav__toggle').on('click', function() {
            $('.c-main-menu').pinny('toggle');
        });
    };

    return homeUI;
});
