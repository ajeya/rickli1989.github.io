var app = app || {};

(function () {
	'use strict';

	// Msg Collection

	var Msgs = Backbone.Collection.extend({
		model: app.Msg,
	});

	app.msgs = new Msgs();
})();
