/*global define*/
define([
	'jquery',
	'backbone',
	'collections/navItems',
	'models/navItem',
	'views/app',
	'views/leftMenu'
], function ($, Backbone, NavItems, NavItem, AppView, LeftMenuView) {
	'use strict';

	var nav_el = "#navbar ul";
	
	var Router = Backbone.Router.extend({
		initialize: function() {
		   	
	    }, 

		routes: {
			'': 'home',
			'*path': 'configRoute',
		},

		home: function(){
			var appView = new AppView();
			this.navView();
			this.leftMenuView();
		},

		configRoute: function(route){
			alert(route);
		},

		leftMenuView: function(){
			var view = new LeftMenuView();
			view.render();
		},

		navView: function(){
			require(['views/navItem','views/navList'], function (NavItemView, NavListView) {

				var item1 = new NavItem({
					navText: 'Merisant',
					linkUrl: 'javascript:void(0)',
					order: 1
				});

				var item2 = new NavItem({
					navText: 'Equal - APAC',
					linkUrl: 'javascript:void(0)',
					order: 1
				});
				var item3 = new NavItem({
					navText: 'Design',
					linkUrl: '',
					order: 1
				});



				var navList = new NavItems();	
		       	navList.add(item1);
		       	navList.add(item2);
		       	navList.add(item3);

             	var view = new NavListView({collection:navList});
             	view.render();


			});
			

		}
	});

	return Router;
});
