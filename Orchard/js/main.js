/*global require*/
'use strict';

// Require.js allows us to configure shortcut alias
require.config({

	urlArgs: "bust=" + (new Date()).getTime(),

	map: {
        '*': {
            'models/data': '../js/models/data'
        }
    },
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		backboneLocalstorage: {
			deps: ['backbone'],
			exports: 'Store'
		}
	},
	paths: {
		app: '../js/views/app',
		tpl: '../js/templates',
		jquery: '../lib/jquery/jquery',
		underscore: '../lib/underscore/underscore',
		backbone: '../lib/backbone/backbone',
		backboneLocalstorage: '../lib/backbone.localStorage/backbone.localStorage',
		text: '../lib/requirejs-text/text',
		prefixfree: '../lib/prefixfree/prefixfree'
	}
});

require([
	'prefixfree',
	'backbone',
	'routers/router'
], function (PrefixFree, Backbone, Router) {
	/*jshint nonew:false*/
	// Initialize routing and start Backbone.history()
	new Router();
	var pushState = !!(window.history && window.history.pushState),
  
    settings = { pushState: pushState, hashChange: pushState ? true : false, root: "/Orchard" };

Backbone.history.start(settings);
	
//	Backbone.history.start({pushState:true, root: '/'});

});
