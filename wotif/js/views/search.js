window.SearchView = Backbone.View.extend({
    initialize:function () {
      selectedDateOut = null;
    	monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    		"Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    	dayNames = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        this.render();
        //create after show event for calendar
        $.datepicker._updateDatepicker_original = $.datepicker._updateDatepicker;
	    $.datepicker._updateDatepicker = function(inst) {
	        $.datepicker._updateDatepicker_original(inst);
	        var afterShow = this._get(inst, 'afterShow');
	        if (afterShow)
	            afterShow.apply((inst.input ? inst.input[0] : null));  // trigger custom callback
	    }
    },

    render:function () {
        $(this.el).html(this.template(this.model));
        return this;
    },

    events: {
    	'click .adultsNum' : 'openSelect',
    	'click .childrenNum' : 'openSelect',
    	'focus #DateOut' : 'popupCalendar',
    	'click #nightMinus' : 'minusNight',
    	'click #nightPlus' : 'plusNight',
    	'click .fakeTicker' : "triggerCalendar",
    	'click .dateBack' : "popupDataBackCalendar",
      'click .3-calendar-close-btn' : "closePopup"
    },

    closePopup: function(){
      alert("here");
    },
    
   	openSelect: function(e) {
   		$(e.currentTarget).find("select").simulate('mousedown');
   	},

   	minusNight: function(e) {
   		var input = $(e.currentTarget).parent().find("input");
   		var num = input.attr("num");
   		if(num != 1){
   			var nextNum = parseInt(num) - 1;
   			input.attr("num", nextNum);
   			input.val(nextNum+" nights");
   		}
   	},

   	plusNight: function(e){
   		var input = $(e.currentTarget).parent().find("input");
   		var num = input.attr("num");
  		var nextNum = parseInt(num) + 1;
  		input.attr("num", nextNum);
  		input.val(nextNum+" nights");
   	},

   	triggerCalendar: function(){
   		$("#DateOut").focus();
   	},

   	popupCalendar: function(){
   		$("#DateOut").datepicker({
            numberOfMonths: 3,
            minDate: 0,
            maxDate: '+330D',
            firstDay: 1,
            position: 'middle',
            travel : 'departure',
            type: 'dropdown',
            dateFormat: 'dd/mm/yy',
            beforeShow: function(){
              if(selectedDateOut != null)
                $("#DateOut").datepicker("setDate",selectedDateOut);
            },

            afterShow : function(){
            	$("#ui-datepicker-div").prepend("<div style='background:#F0F0F0;height:35px'><span style='font-size:18px;position:absolute;top:10px;font-weight:bold;left:10px'>Select your departure date</span><span style='color:red;position:absolute;top:10px;right:5px'><span class='3-calendar-close-btn' style='text-decoration: underline;'>Close </span><span class='3-calendar-close-btn' style='font-weight:bold;'>X</span></span></div>");
            },
            onSelect: function(e, selected) {
            	selectedDateOut = new Date(selected.selectedYear, selected.selectedMonth, selected.selectedDay);
            	$("#DateOut").val(selected.selectedDay+" "+monthNames[selected.selectedMonth]+" - "+dayNames[selectedDateOut.getDay()]);
            },
            onClose: function(dateText, inst) {


            }
        });	
   	},

   	popupDataBackCalendar: function(e){
   		$(".ui-datepicker-trigger").show();
    	$("#DateBack").datepicker({
            numberOfMonths: 3,
            minDate: 0,
            maxDate: '+330D',
            firstDay: 1,
            position: 'middle',
            travel : 'departure',
            type: 'dropdown',

            showOn: "button",
            dateFormat: 'dd/mm/yy',
            beforeShow: function(){

            },

            afterShow : function(){
            	$("#ui-datepicker-div").prepend("<div style='background:#F0F0F0;height:35px'><span style='font-size:18px;position:absolute;top:10px;font-weight:bold;left:10px'>Select your departure date</span><span style='color:red;position:absolute;top:10px;right:5px'></span></div>");
            },
            onSelect: function(e, selected) {
            	var selectedDate = new Date(selected.selectedYear, selected.selectedMonth, selected.selectedDay);
            	$(".checkout").html(selected.selectedDay+" "+monthNames[selected.selectedMonth]+" - "+dayNames[selectedDate.getDay()]);
            	
            },
            onClose: function(dateText, inst) {
            	

            }
        });	
		$(".ui-datepicker-trigger").trigger("click"); $(".ui-datepicker-trigger").hide();
    },

});