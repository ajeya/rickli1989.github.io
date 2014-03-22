/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'text!tpl/menuItemView.html',
	'common'
], function ($, _, Backbone, MenuItemView, Common) {
	'use strict';

	var LeftMenuView = Backbone.View.extend({

		tagName: "li",
		template: _.template(MenuItemView),


		initialize: function () {

		},


		render: function () {
			this.applyClass();

			this.$el.html(this.template(this.model.toJSON()));

			return this;
		},

		applyClass: function(){
			if(this.model.get("hasChild"))
				this.$el.addClass("hasChild");
			 
		}

	});

	return LeftMenuView;
});
