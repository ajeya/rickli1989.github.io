define([
	'jquery',
	'underscore',
	'backbone',
	'text!tpl/homeView.html'
], function ($, _, Backbone, homeTemplate) {
	'use strict';
	
	var AppView = Backbone.View.extend({
		el: 'body',

		template: _.template(homeTemplate),

		events: {

		},

		initialize: function () {
			
			this.render();

		},
		render: function () {
			
			this.$el.html(this.template());
            return this;

		},

	
	});

	return AppView;
});
