/**
 * Loader for the component’s  Dust templates, found in lib/
 */
define(function(require) {
    var dust = require('dustjs-component');
    var text = require('text');
    var ratingScale = require('text!./rating-scale.dust');

    dust.loadSource(dust.compileComponent(ratingScale, 'rating-scale'));
});
