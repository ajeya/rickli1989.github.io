define([
	'jquery',
	'underscore',
	'backbone',
	'text!tpl/adminView.html'
], function ($, _, Backbone, navTemplate) {
	'use strict';

	var NavAdminView = Backbone.View.extend({
		tagName: 'ul',
		className: "adminControl",
		template: _.template(navTemplate),


		initialize: function () {
			
		},

		render: function () {

			this.$el.html(this.template());

			return this;
		}

	});

	return NavAdminView;
});
