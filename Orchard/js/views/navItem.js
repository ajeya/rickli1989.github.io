define([
	'jquery',
	'underscore',
	'backbone',
	'text!tpl/navView.html'
], function ($, _, Backbone, navTemplate) {
	'use strict';

	var NavItemView = Backbone.View.extend({

		tagName:  'li',
		
		className: 'list-item',

		template: _.template(navTemplate),


		initialize: function () {
			
		},

		render: function () {

			this.$el.html(this.template(this.model.toJSON()));

			return this;
		}

	});

	return NavItemView;
});
