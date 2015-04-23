define([
    '$',
    'views/base',
    'dust!templates/home'
],
function($, BaseView, template) {
    return {
        template: template,
        extend: BaseView,
        context: {
            templateName: 'home',
            firstp: function() {
                return $('p').first().text() || 'Could not find the first paragraph text in your page';
            },
            product: {
                title: 'Product Name',
                photo: {
                    src: 'http://placehold.it/400x520',
                    alt: 'Product Name'
                },
                regularPrice: '$18.99',
                gridClass: 'c-grid__span'
            }
        }

        /**
         * If you wish to override preProcess/postProcess in this view, have a look at the documentation:
         * https://cloud.mobify.com/docs/adaptivejs/views/
         */
    };
});
