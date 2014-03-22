/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'text!tpl/navView.html',
	'common'
], function ($, _, Backbone, navTemplate, Common) {
	'use strict';

	var NavItemView = Backbone.View.extend({

		tagName:  'li',
		
		className: 'list-item',

		template: _.template(navTemplate),


		initialize: function () {
			
		},

		// Re-render the titles of the todo item.
		render: function () {

			this.$el.html(this.template(this.model.toJSON()));

			return this;
		}

	});

	return NavItemView;
});
