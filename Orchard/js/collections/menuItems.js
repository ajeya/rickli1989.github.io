/*global define*/
define([
	'underscore',
	'backbone',
	'backboneLocalstorage',
	'models/menuItem',
	'views/menuItem'
], function (_, Backbone, Store, MenuItem, MenuItemView) {
	'use strict';

	var MenuItemsCollection = Backbone.Collection.extend({
		model: MenuItem
	});

	return MenuItemsCollection;
});
