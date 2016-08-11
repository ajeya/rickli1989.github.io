System.register(['angular', 'angular-material', 'angular-aria', 'angular-animate', 'app/stylesheets/app/app.css!'], function (_export) {
	'use strict';

	var angular;
	return {
		setters: [function (_angular) {
			angular = _angular['default'];
		}, function (_angularMaterial) {}, function (_angularAria) {}, function (_angularAnimate) {}, function (_appStylesheetsAppAppCss) {}],
		execute: function () {
			_export('default', angular.module('materialModule', ['ngMaterial', 'ngAnimate']).config(["$mdIconProvider", "$mdThemingProvider", function ($mdIconProvider, $mdThemingProvider) {
				$mdThemingProvider.theme('default').primaryPalette('grey').accentPalette('light-blue');
			}]));
		}
	};
});
//# sourceMappingURL=materialModule.js.map
