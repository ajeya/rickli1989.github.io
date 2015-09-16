import angular from 'angular';

import 'angular-material';
import 'angular-aria';
import 'angular-animate';
import 'angular-messages';

// import 'angular-material/angular-material.min.css!';
import 'app/stylesheets/app/app.css!';

export default angular.module('materialModule', ['ngMaterial'])
	.config(($mdIconProvider, $mdThemingProvider) => {
		$mdThemingProvider
			.theme('default')
			.primaryPalette('light-blue')
			.accentPalette('brown');
	});

