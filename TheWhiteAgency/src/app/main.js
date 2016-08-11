import angular from 'angular';

import appModule from 'app/app';

import widgetModule from 'app/widget/Widget';

export default angular.module('TheWhiteAgency.main', [appModule.name, widgetModule.name]);
