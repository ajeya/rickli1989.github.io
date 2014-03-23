/*global define*/
define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var MenuItem = Backbone.Model.extend({
		defaults: {
			menuText: '',
			hasChild: false,
			menuItem: '',
			linkUrl: '#'
		}
	});

	return MenuItem;
});
