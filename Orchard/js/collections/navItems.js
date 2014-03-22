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
		// Reference to this collection's model.
		model: NavItem,

		nextOrder: function () {
			if (!this.length) {
				return 1;
			}
			return this.last().get('order') + 1;
		},

		// Todos are sorted by their original insertion order.
		comparator: function (item) {
			return item.get('order');
		}
	});

	return NavItemsCollection;
});
