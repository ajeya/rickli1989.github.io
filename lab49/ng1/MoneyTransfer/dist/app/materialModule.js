System.register(['angular', 'angular-material', 'angular-aria', 'angular-animate', 'angular-messages', 'app/stylesheets/app/app.css!'], function (_export) {
	'use strict';

	var angular;
	return {
		setters: [function (_angular) {
			angular = _angular['default'];
		}, function (_angularMaterial) {}, function (_angularAria) {}, function (_angularAnimate) {}, function (_angularMessages) {}, function (_appStylesheetsAppAppCss) {}],
		execute: function () {
			_export('default', angular.module('materialModule', ['ngMaterial']).config(["$mdIconProvider", "$mdThemingProvider", function ($mdIconProvider, $mdThemingProvider) {
				$mdThemingProvider.theme('default').primaryPalette('light-blue').accentPalette('brown');
			}]));
		}
	};
});
//# sourceMappingURL=../app/materialModule.js.map