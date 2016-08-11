import angular from 'angular';

import 'angular-material';
import 'angular-aria';
import 'angular-animate';

// import 'angular-material/angular-material.min.css!';
import 'app/stylesheets/app/app.css!';

export default angular.module('materialModule', ['ngMaterial', 'ngAnimate'])
	.config(($mdIconProvider, $mdThemingProvider) => {
		$mdThemingProvider
			.theme('default')
			.primaryPalette('grey')
			.accentPalette('light-blue');
	});

