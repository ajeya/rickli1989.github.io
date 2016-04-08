define([
	'jquery',
	'underscore',
	'backbone',
	'text!tpl/menuItemView.html'
], function ($, _, Backbone, MenuItemView) {
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
