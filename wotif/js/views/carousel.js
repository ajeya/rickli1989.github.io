window.CarouselView = Backbone.View.extend({
    initialize:function () {
        this.render();
    },

    render:function () {
        $(this.el).html(this.template());
        return this;
    },
    
    events: {
		'click .move-left': 'moveLeft',
		'click .move-right' : 'moveRight'
	},
	moveLeft: function(e){
		var className = ($(e.currentTarget).parent().parent().prop('className'));
		if(className != "firstanimation"){
			var className = ($(e.currentTarget).parent().parent().next().prop('className'));
			$("#slider li."+className).css({
				"-moz-animation" : "cycleleft 1s linear",
				"-webkit-animation": "cycleleft 1s linear",
				"animation-fill-mode": "forwards"
			});
		}
	},
	moveRight: function(e){
		var className = ($(e.currentTarget).parent().parent().prop('className'));
		if(className != "fifthanimation"){
			$("#slider li."+className).css({
				"-moz-animation" : "cycleright 1s linear",
				"-webkit-animation": "cycleright 1s linear",
				"animation-fill-mode": "forwards"
			});
		}
	}

});