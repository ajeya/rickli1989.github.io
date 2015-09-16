import angular from 'angular';
import WidgetService from 'app/widget/WidgetService';
import WidgetCtrl from 'app/widget/WidgetCtrl';
import WidgetTpl from 'app/widget/widget.tpl';
import WidgetInputDv from 'app/widget/WidgetInputDv';

let app = angular
  .module('Lab49.widget', [WidgetTpl.name])
  .service('WidgetService', WidgetService)
  .config(($stateProvider) => {

    $stateProvider
      .state('widget', {
        url: '/',
        templateUrl: WidgetTpl.name,
        controller: WidgetCtrl,
        controllerAs: 'ctrl'
      });
  });

export default app;