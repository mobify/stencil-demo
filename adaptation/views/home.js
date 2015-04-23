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
            title: 'Cooking & Baking',
            firstp: 'If you are a budding baker, you can enjoy making your favourite cakes and recipes with cake tins and pans as well as all the accessories you need. View our Great British Bakeware range for the world’s leading manufacturer of superior bakeware.',
            product: {
                title: 'Wooden Chopping Board',
                photo: {
                    src: 'http://placehold.it/400x520',
                    alt: 'Wooden Chopping Board'
                },
                regularPrice: '$12.99',
                gridClass: 'c-grid__span'
            },
            breadcrumbs: [
                {
                    label: 'Home',
                    url: '#'
                },
                {
                    label: 'Homeware',
                    url: '#'
                },
                {
                    label: 'Kitchen',
                    url: '#'
                },
                {
                    label: 'Cooking & Baking',
                    class: 'c--current'
                }
            ]
        }

        /**
         * If you wish to override preProcess/postProcess in this view, have a look at the documentation:
         * https://cloud.mobify.com/docs/adaptivejs/views/
         */
    };
});
