var app = app || {};

(function ($) {
	'use strict';

	// The Application

	app.AppView = Backbone.View.extend({
		el: '#wotapp',
		initialize : function(){
			this.$carousel = this.$('#img-carousel');
			this.$search = this.$('#flights-search');
			this.$social = this.$('#social-link');
			this.render();
		},
		render : function(){
			//render carousel view
			if (!this.carouselView) {
	            this.carouselView = new CarouselView();
	        }
	        this.$carousel.html(this.carouselView.el);

	        //render flight search view
	        if (!this.searchView) {
	        	var searchModel = new SearchModel();
	            this.searchView = new SearchView({model:searchModel.toJSON()});
	        }
	        this.$search.html(this.searchView.el);

	        //render social view
			if (!this.sociallView) {
	            this.sociallView = new SocialView();
	        }
	        this.$social.html(this.sociallView.el);
		}

	});
})(jQuery);
