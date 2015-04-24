define(['sheet-left', 'pinny', 'bellows'], function(sheetLeft, Pinny, Bellows) {
    var init = function() {
        var $mainMenu = $('.c-main-menu');

        $mainMenu.find('.bellows').bellows();

        $mainMenu.pinny({
            effect: sheetLeft,
            coverage: '85%',
            structure: false
        });

        $mainMenu.on('main-menu:toggle', function() {
            $(this).pinny('toggle');
        });
    };

    return {
        'init': init
    };
});
