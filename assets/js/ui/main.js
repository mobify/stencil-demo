// Scripts required in via this file will be combined into ui.js
require(
    [
        'view-scripts/global',
        'view-scripts/home',
        'stencil-ui',
        // Add additional UI scripts here
    ],
    function(
        globalUI,
        home,
        stencilUI
    ) {
        globalUI();
    },
    null,
    // ForceSync makes sure all templates have loaded before page scripts are
    // invoked
    true
);
