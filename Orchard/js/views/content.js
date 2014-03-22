/*global define*/
define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone) {
	'use strict';

	var NavItemView = Backbone.View.extend({

		el:  '#right-container',

		initialize: function () {
			
		},

		// Re-render the titles of the todo item.
		render: function (route) {
			var that = this;
			var contentPath = 'text!content/'+route+'.html';
			//alert("Content Path: "+contentPath);
			require([contentPath], function (ContentView) {
				that.$el.html(_.template(ContentView));
			});


			return this;
		}

	});

	return NavItemView;
});
