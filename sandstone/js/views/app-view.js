var app = app || {};

(function ($) {
	'use strict';

	// The Application

	app.AppView = Backbone.View.extend({

		el: '#chatapp',

		controlTemplate: _.template($('#control-box-template').html()),

 		msgTemplate: _.template($('#msg-template').html()),

		events: {
			'click #chat-now': 'changeControlBox',
			'click #send-msg-button' : 'sendMessage',
			'keypress #msg-input-box': 'keyEnter'
		},

		initialize: function () {
			this.$chat = this.$('#control-box');
			this.$msg = this.$('#msg-container');
			this.$greeting = this.$(".greeting");

			this.listenTo(app.msgs, 'add', this.addMsg);
		},

		render: function () {
			var that = this;
			app.msgs.each(function (msg) {
				that.$msg.append(that.msgTemplate(msg.toJSON()));
			});
			
		},

		addMsg: function(msg) {
			this.$msg.append(this.msgTemplate(msg.toJSON()));
		},

		keyEnter: function(e) {
			if (e.which === ENTER_KEY)
				$("#send-msg-button").trigger("click");
		},

		changeControlBox: function () {
			this.$chat.html(this.controlTemplate());
			this.$greeting.fadeOut(500);
			app.msgs.add(this.model);
			$(".msg-item").hide();
			var that = this;
			//Set 1 second delay as required
			setTimeout(function(){$(".msg-item").fadeIn(100)},1000);
			$("#msg-input-box").focus();
		},

		sendMessage : function() {
			var senderMsg = $("#msg-input-box").val();
			var that = this;
			var sender = new app.Msg();
			sender.set({
				name : "Nicholas",
				msg : senderMsg,
				className : "sender-div"
			});
			
			app.msgs.add(sender);

			//Set 3 seconds reply
			setTimeout(function(){
				that.maryReply();
			},3000);
			
			$("#msg-input-box").val("");
			$("#msg-input-box").focus();
		},

		maryReply: function() {
			var maryRep = new app.Msg();
			maryRep.set({
				msg : "To reset your password just click on the My details menu. Once you have clicked the menu a new page will appear. Select the link Change password. From this link it will take you to a screen where you can change your password"
			});
			app.msgs.add(maryRep);
		}
	});
})(jQuery);
