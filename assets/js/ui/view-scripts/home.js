define([
    '$',
    'dust!templates/ui-partial'
],
function($, uiPartial) {
    var homeUI = function() {
        // Add any scripts you would like to run only on the home page here

        uiPartial({}, function(err, out) {
            if (err) {
                throw 'ui/view-scripts/home.js: couldn’t render ui/templates/ui-partial.dust.)';
            } else {
                $('#target').html(out);
            }
        });
    };

    return homeUI;
});
