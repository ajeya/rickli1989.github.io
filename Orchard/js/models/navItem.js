define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var NavItem = Backbone.Model.extend({

		defaults: {
			navText: '',
			linkUrl: '',
			order: 1
		}
	});

	return NavItem;
});
