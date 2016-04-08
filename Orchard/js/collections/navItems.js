/*global define*/
define([
	'underscore',
	'backbone',
	'backboneLocalstorage',
	'models/navItem',
	'views/navItem'
], function (_, Backbone, Store, NavItem, NavItemView) {
	'use strict';

	var NavItemsCollection = Backbone.Collection.extend({
		model: NavItem
	});

	return NavItemsCollection;
});
