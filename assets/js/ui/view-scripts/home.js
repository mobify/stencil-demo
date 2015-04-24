define([
    '$',
    'dust!templates/ui-partial',
    'sheet-left',
    'pinny',
    'bellows'
],
function($, uiPartial, sheetLeft) {
    var homeUI = function() {
        // Add any scripts you would like to run only on the home page here

        uiPartial({}, function(err, out) {
            if (err) {
                throw 'ui/view-scripts/home.js: couldn’t render ui/templates/ui-partial.dust.)';
            } else {
                $('#target').html(out);
            }
        });

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
