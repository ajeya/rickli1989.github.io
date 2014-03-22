/*global define*/
define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var MenuItem = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			menuText: '',
			hasChild: false,
			menuItem: ''
		}
	});

	return MenuItem;
});
