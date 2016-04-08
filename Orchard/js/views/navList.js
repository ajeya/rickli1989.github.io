define([
	'jquery',
	'underscore',
	'backbone',
	'views/navAdmin',
	'views/navItem'
], function ($, _, Backbone, navAdminView, NavItemView) {
	'use strict';
	
	var NavListView = Backbone.View.extend({

		el: "#navbar ul",

		initialize: function () {
             this.collection.on("reset", this.render, this);
             this.collection.on("add", this.render, this);
        },

        render: function () {
        	this.$el.empty();
            _.each(this.collection.models, function (item) {
                this.$el.append(new NavItemView({model: item}).render().el);
            }, this);
            
            //append admin control
            this.$el.append(new navAdminView().render().el);

            return this;
        }

	});

	return NavListView;
});
