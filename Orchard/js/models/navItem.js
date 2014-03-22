/*global define*/
define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var NavItem = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			navText: '',
			linkUrl: '',
			order: 1
		}
	});

	return NavItem;
});
