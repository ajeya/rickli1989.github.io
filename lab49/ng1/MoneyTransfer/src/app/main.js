import angular from 'angular';

import appModule from 'app/app';

import widgetModule from 'app/widget/Widget';

export default angular.module('Lab49.main', [appModule.name, widgetModule.name, 'ngMessages']);
