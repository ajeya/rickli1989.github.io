var app = app || {};

(function () {
	'use strict';

	// Msg Model

	app.Msg = Backbone.Model.extend({

		defaults : {
			name : "Mary",
			msg : "Hi Nicholas this is Mary from ABank. How may I help you today?",
			className : "replier-div"
			// msg1 : "Hi Nicholas this is Mary from ABank. How may I help you today?",
			// msg2 : "To reset your password just click on the My details menu. Once you have clicked the menu a new page will appear. Select the link Change password. From this link it will take you to a screen where you can change your password"
		}

	});
})();
