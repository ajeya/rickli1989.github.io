define([
	'jquery',
	'underscore',
	'backbone',
	'views/menuItem'
], function ($, _, Backbone, MenuItemView) {
	'use strict';
	
	var MenuListView = Backbone.View.extend({

		tagName: "ul",
        className: "parent",
		initialize: function () {
             this.collection.on("reset", this.render, this);
             this.collection.on("add", this.render, this);
        },

        render: function () {
        	this.$el.empty();
            _.each(this.collection.models, function (item) {

                this.$el.append(new MenuItemView({model: item}).render().el);
            }, this);
            
            return this;
        }

	});

	return MenuListView;
});
