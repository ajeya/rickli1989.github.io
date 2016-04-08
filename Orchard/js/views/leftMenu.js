define([
	'jquery',
	'underscore',
	'backbone',
	'models/menuItem',
	'collections/menuItems',
	'views/menuList',
	'models/data'
], function ($, _, Backbone, MenuItem, MenuItems, MenuListView, Data) {
	'use strict';
	var checked = false;
	var inNav = false;
	var LeftMenuView = Backbone.View.extend({
		el: "#left-bar",

		initialize: function () {
			
		},

		events: {
			'click li.hasChild, li.lastLevel' : 'toggleMenu'
		},

	
		toggleMenu: function(e){
				e.stopPropagation();	
				e.preventDefault();
				$(e.currentTarget).toggleClass("showChildren");
				Backbone.history.navigate($(e.currentTarget).find("a").first().attr("href"), true);
			
		},

		render: function () {

			var menuList = Data.MenuListCollection;

         	var view = new MenuListView({collection:menuList});

			this.$el.html(view.render().el);

			return this;
		}

	});

	return LeftMenuView;
});
