/*global define*/
define([
	'jquery',
	'backbone',
	'collections/navItems',
	'models/navItem',
	'views/app',
	'views/leftMenu',
	'views/content'
], function ($, Backbone, NavItems, NavItem, AppView, LeftMenuView, ContentView) {
	'use strict';

	var nav_el = "#navbar ul";
	
	var Router = Backbone.Router.extend({
		initialize: function() {

		   	var appView = new AppView();
			
			this.leftMenuView();
	    }, 

		routes: {
			'': 'home',
			'*path': 'configRoute',
		},

		home: function(){
			this.navView("main");
			this.configRoute("main");
		},

		configRoute: function(route){
			//alert("configure : "+ route);
			this.navView(route);
	
			var content = new ContentView();
			content.render(route);
			
		},

		leftMenuView: function(){
			var view = new LeftMenuView();
			view.render();
		},

		navView: function(route){
			//alert("NavView : " + route);
			require(['views/navItem','views/navList'], function (NavItemView, NavListView) {

		  		if(route == "main"){
					var main = new NavItem({
						navText: 'Home',
						linkUrl: '#'
					});
					var navList = new NavItems();
					navList.add(main);
		  		}else{
		  			var navList = new NavItems();
					
		  			var res = route.split("/");
		  			_.each(res,function(menu,index){
		  				console.log(index);
		  				var navUrl = "";
		  				_.each(res,function(menu1,index1){
		  					if(index1 <= index){
		  						navUrl += menu1+"/";
		  					}
		  				});
		  				var temp = new NavItem({
							navText: menu,
							linkUrl: navUrl.substr(0, navUrl.length - 1)
						});
						navList.add(temp);
		  			});
		  		}


             	 var view = new NavListView({collection:navList});
             	 view.render();


			});
			

		}
	});

	return Router;
});
