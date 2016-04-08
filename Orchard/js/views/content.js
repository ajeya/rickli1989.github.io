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

		render: function (route) {
			var that = this;
			var contentPath = 'text!content/'+route+'.html';
			require([contentPath], function (ContentView) {
				that.$el.html(_.template(ContentView));
			});


			return this;
		}

	});

	return NavItemView;
});
