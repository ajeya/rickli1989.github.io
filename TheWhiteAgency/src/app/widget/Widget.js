import angular from 'angular';
import WidgetService from 'app/widget/WidgetService';
import WidgetCtrl from 'app/widget/WidgetCtrl';
import WidgetTpl from 'app/widget/widget.tpl';
import ProgressBarTpl from 'app/widget/progressbar.tpl';
import ProgressBarDv from 'app/widget/ProgressBarDv';

let app = angular
  .module('TheWhiteAgency.widget', [WidgetTpl.name, ProgressBarTpl.name])
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