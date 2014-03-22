/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'text!tpl/adminView.html',
	'common'
], function ($, _, Backbone, navTemplate, Common) {
	'use strict';

	var NavAdminView = Backbone.View.extend({
		tagName: 'ul',
		className: "adminControl",
		template: _.template(navTemplate),


		initialize: function () {
			
		},

		// Re-render the titles of the todo item.
		render: function () {

			this.$el.html(this.template());

			return this;
		}

	});

	return NavAdminView;
});
