/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'text!tpl/homeView.html'
], function ($, _, Backbone, homeTemplate) {
	'use strict';

	
	// Our overall **AppView** is the top-level piece of UI.
	var AppView = Backbone.View.extend({

		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: 'body',
		
		// Compile our stats template
		template: _.template(homeTemplate),

		// Delegated events for creating new items, and clearing completed ones.
		events: {

		},

		initialize: function () {
			
			this.render();

		},

		// Re-rendering the App just means refreshing the statistics -- the rest
		// of the app doesn't change.
		render: function () {
			
			this.$el.html(this.template());
            return this;

		},

	
	});

	return AppView;
});
