/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'text!tpl/leftMenuView.html',
	'models/menuItem',
	'collections/menuItems',
	'views/menuList',
	'models/data'
], function ($, _, Backbone, leftMenuTemplate, MenuItem, MenuItems, MenuListView, Data) {
	'use strict';

	var LeftMenuView = Backbone.View.extend({
		el: "#left-bar",

		template: _.template(leftMenuTemplate),


		initialize: function () {
			
			

		},

		events: {
			'click li.hasChild' : 'toggleMenu'
		},

		toggleMenu: function(e){

			e.stopPropagation();	
			$(e.currentTarget).toggleClass("showChildren");
		
		},

		render: function () {

			var menuList = Data.MenuListCollection;

         	var view = new MenuListView({collection:menuList});

			this.$el.html(view.render().el);
			//this.$el.html(this.template());
			return this;
		}

	});

	return LeftMenuView;
});
