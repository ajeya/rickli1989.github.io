System.register(['angular', 'app/materialModule', 'oclazyload-systemjs-router', 'app/routes.json!'], function (_export) {
	'use strict';

	var angular, materialModule, router, futureRoutes, appModule;
	return {
		setters: [function (_angular) {
			angular = _angular['default'];
		}, function (_appMaterialModule) {
			materialModule = _appMaterialModule['default'];
		}, function (_oclazyloadSystemjsRouter) {
			router = _oclazyloadSystemjsRouter['default'];
		}, function (_appRoutesJson) {
			futureRoutes = _appRoutesJson['default'];
		}],
		execute: function () {
			appModule = angular.module('TheWhiteAgency.app', [materialModule.name]);

			appModule.config(router(appModule, futureRoutes));

			appModule.config(["$locationProvider", "$httpProvider", "$urlRouterProvider", function ($locationProvider, $httpProvider, $urlRouterProvider) {
				$locationProvider.html5Mode({
					enabled: true,
					requireBase: false
				});
				$httpProvider.useApplyAsync(true);
				return $urlRouterProvider.otherwise('/');
			}]);

			angular.element(document).ready(function () {
				return angular.bootstrap(document.body, [appModule.name], {
					strictDi: true
				});
			});

			_export('default', appModule);
		}
	};
});
//# sourceMappingURL=app.js.map
