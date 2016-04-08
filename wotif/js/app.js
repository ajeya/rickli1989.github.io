var app = app || {};
'use strict';
utils.loadTemplate(['SearchView', 'SocialView', 'CarouselView'], function() {
    new app.AppView();
});