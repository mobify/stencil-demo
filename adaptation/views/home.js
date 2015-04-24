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
            product: [
                {
                    title: 'Wooden Chopping Board',
                    photo: {
                        src: 'http://placehold.it/400x520',
                        alt: 'Wooden Chopping Board'
                    },
                    regularPrice: '$12.99',
                    gridClass: 'c-grid__span'
                },
                {
                    title: 'Set Of 3 Cookie Cutters',
                    photo: {
                        src: 'http://placehold.it/400x520',
                        alt: 'Set Of 3 Cookie Cutters'
                    },
                    regularPrice: '$9.99',
                    salePrice: '$4.99',
                    gridClass: 'c-grid__span'
                },
                {
                    title: 'Set of 4 Kitchen Measuring Scoops',
                    photo: {
                        src: 'http://placehold.it/400x520',
                        alt: 'Set of 4 Kitchen Measuring Scoops'
                    },
                    regularPrice: '$5.99',
                    gridClass: 'c-grid__span'
                },
                {
                    title: 'Silicone Whisk',
                    photo: {
                        src: 'http://placehold.it/400x520',
                        alt: 'Silicone Whisk'
                    },
                    regularPrice: '$3.99',
                    gridClass: 'c-grid__span'
                }
            ],
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
            ],
            menuItems: [
                {
                    'label': 'Airing Now',
                    'href': 'http://www.jtv.com/broadcast',
                    'items': [
                        {
                            'label': 'Watch Us Live',
                            'href': 'http://www.jtv.com/on/demandware.store/Sites-jtv-Site/default/LiveViewer-Show'
                        },
                        {
                            'label': 'Recent Items',
                            'href': 'http://www.jtv.com/broadcast'
                        },
                        {
                            'label': 'Weekly Product Recap',
                            'href': 'http://www.jtv.com/on/demandware.store/Sites-jtv-Site/default/ProgramGuide-Archive'
                        },
                        {
                            'label': 'Program Guide',
                            'href': 'http://www.jtv.com/on/demandware.store/Sites-jtv-Site/default/ProgramGuide-Show'
                        },
                        {
                            'label': 'Channel Finder',
                            'href': 'http://www.jtv.com/on/demandware.store/Sites-jtv-Site/default/ChannelFinder-Show'
                        },
                        {
                            'label': 'Meet Our Hosts',
                            'href': 'http://www.jtv.com/linkpage?cid=meet-our-hosts'
                        }
                    ]
                },
                {
                    'label': 'Jewelry',
                    'href':'http://www.jtv.com/jewelry',
                    'items': [
                        {
                            'label': 'Shop by Type',
                            'href': 'http://www.jtv.com/jewelry',
                            'items': [
                                {
                                    'label': 'Rings',
                                    'href': 'http://www.jtv.com/jewelry-rings',
                                    'items': [
                                        {
                                          'label': 'Rings',
                                          'href': 'http://www.jtv.com/jewelry-rings'
                                        },
                                        {
                                          'label': 'Earrings',
                                          'href': 'http://www.jtv.com/jewelry-earrings'
                                        },
                                        {
                                          'label': 'Bracelets',
                                          'href': 'http://www.jtv.com/jewelry-bracelets'
                                        },
                                        {
                                          'label': 'Pendants',
                                          'href': 'http://www.jtv.com/jewelry-pendants'
                                        },
                                        {
                                          'label': 'Necklaces',
                                          'href': 'http://www.jtv.com/jewelry-necklaces'
                                        },
                                        {
                                          'label': 'Watches',
                                          'href': 'http://www.jtv.com/jewelry-watches'
                                        },
                                        {
                                          'label': 'Jewelry Sets',
                                          'href': 'http://www.jtv.com/jewelry-jewelry-sets'
                                        },
                                        {
                                          'label': 'Gemstone Settings',
                                          'href': 'http://www.jtv.com/gemstones/gemstone-settings/settings'
                                        },
                                        {
                                          'label': 'New Jewelry',
                                          'href': 'http://www.jtv.com/shop/specialty/new-arrivals/new_arrivals?prefn1=RETAIL_CATEGORY&prefv1=Jewelry'
                                        },
                                        {
                                          'label': 'Jewelry Sale',
                                          'href': 'http://www.jtv.com/shop/jtv-deals/jtv_deals?prefn1=RETAIL_CATEGORY&prefv1=Jewelry'
                                        },
                                        {
                                          'label': 'All Jewelry',
                                          'href': 'http://www.jtv.com/jewelry?showProducts=1'
                                        }
                                    ]
                                },
                                {
                                    'label': 'Earrings',
                                    'href': 'http://www.jtv.com/jewelry-earrings'
                                },
                                {
                                    'label': 'Bracelets',
                                    'href': 'http://www.jtv.com/jewelry-bracelets'
                                },
                                {
                                    'label': 'Pendants',
                                    'href': 'http://www.jtv.com/jewelry-pendants'
                                },
                                {
                                    'label': 'Necklaces',
                                    'href': 'http://www.jtv.com/jewelry-necklaces'
                                },
                                {
                                    'label': 'Watches',
                                    'href': 'http://www.jtv.com/jewelry-watches'
                                },
                                {
                                    'label': 'Jewelry Sets',
                                    'href': 'http://www.jtv.com/jewelry-jewelry-sets'
                                },
                                {
                                    'label': 'Gemstone Settings',
                                    'href': 'http://www.jtv.com/gemstones/gemstone-settings/settings'
                                },
                                {
                                    'label': 'New Jewelry',
                                    'href': 'http://www.jtv.com/shop/specialty/new-arrivals/new_arrivals?prefn1=RETAIL_CATEGORY&prefv1=Jewelry'
                                },
                                {
                                    'label': 'Jewelry Sale',
                                    'href': 'http://www.jtv.com/shop/jtv-deals/jtv_deals?prefn1=RETAIL_CATEGORY&prefv1=Jewelry'
                                },
                                {
                                    'label': 'All Jewelry',
                                    'href': 'http://www.jtv.com/jewelry?showProducts=1'
                                }
                            ]
                        },
                        {
                            'label': 'Shop by Gemstone',
                            'href': 'http://www.jtv.com/jewelry',
                            'items': [
                                {
                                    'label': 'Rings',
                                    'href': 'http://www.jtv.com/jewelry-rings'
                                },
                                {
                                    'label': 'Earrings',
                                    'href': 'http://www.jtv.com/jewelry-earrings'
                                },
                                {
                                    'label': 'Bracelets',
                                    'href': 'http://www.jtv.com/jewelry-bracelets'
                                },
                                {
                                    'label': 'Pendants',
                                    'href': 'http://www.jtv.com/jewelry-pendants'
                                },
                                {
                                    'label': 'Necklaces',
                                    'href': 'http://www.jtv.com/jewelry-necklaces'
                                },
                                {
                                    'label': 'Watches',
                                    'href': 'http://www.jtv.com/jewelry-watches'
                                },
                                {
                                    'label': 'Jewelry Sets',
                                    'href': 'http://www.jtv.com/jewelry-jewelry-sets'
                                },
                                {
                                    'label': 'Gemstone Settings',
                                    'href': 'http://www.jtv.com/gemstones/gemstone-settings/settings'
                                },
                                {
                                    'label': 'New Jewelry',
                                    'href': 'http://www.jtv.com/shop/specialty/new-arrivals/new_arrivals?prefn1=RETAIL_CATEGORY&prefv1=Jewelry'
                                },
                                {
                                    'label': 'Jewelry Sale',
                                    'href': 'http://www.jtv.com/shop/jtv-deals/jtv_deals?prefn1=RETAIL_CATEGORY&prefv1=Jewelry'
                                },
                                {
                                    'label': 'All Jewelry',
                                    'href': 'http://www.jtv.com/jewelry?showProducts=1'
                                }
                            ]
                        },
                        {
                            'label': 'Specialty Stores',
                            'href': 'http://www.jtv.com/jewelry',
                            'items': [
                                {
                                    'label': 'Rings',
                                    'href': 'http://www.jtv.com/jewelry-rings'
                                },
                                {
                                    'label': 'Earrings',
                                    'href': 'http://www.jtv.com/jewelry-earrings'
                                },
                                {
                                    'label': 'Bracelets',
                                    'href': 'http://www.jtv.com/jewelry-bracelets'
                                },
                                {
                                    'label': 'Pendants',
                                    'href': 'http://www.jtv.com/jewelry-pendants'
                                },
                                {
                                    'label': 'Necklaces',
                                    'href': 'http://www.jtv.com/jewelry-necklaces'
                                },
                                {
                                    'label': 'Watches',
                                    'href': 'http://www.jtv.com/jewelry-watches'
                                },
                                {
                                    'label': 'Jewelry Sets',
                                    'href': 'http://www.jtv.com/jewelry-jewelry-sets'
                                },
                                {
                                    'label': 'Gemstone Settings',
                                    'href': 'http://www.jtv.com/gemstones/gemstone-settings/settings'
                                },
                                {
                                    'label': 'New Jewelry',
                                    'href': 'http://www.jtv.com/shop/specialty/new-arrivals/new_arrivals?prefn1=RETAIL_CATEGORY&prefv1=Jewelry'
                                },
                                {
                                    'label': 'Jewelry Sale',
                                    'href': 'http://www.jtv.com/shop/jtv-deals/jtv_deals?prefn1=RETAIL_CATEGORY&prefv1=Jewelry'
                                },
                                {
                                    'label': 'All Jewelry',
                                    'href': 'http://www.jtv.com/jewelry?showProducts=1'
                                }
                            ]
                        }
                    ]
                }
            ]
        }

        /**
         * If you wish to override preProcess/postProcess in this view, have a look at the documentation:
         * https://cloud.mobify.com/docs/adaptivejs/views/
         */
    };
});
