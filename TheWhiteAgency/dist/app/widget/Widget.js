System.register(['angular', 'app/widget/WidgetService', 'app/widget/WidgetCtrl', 'app/widget/widget.tpl', 'app/widget/progressbar.tpl', 'app/widget/ProgressBarDv'], function (_export) {
  'use strict';

  var angular, WidgetService, WidgetCtrl, WidgetTpl, ProgressBarTpl, ProgressBarDv, app;
  return {
    setters: [function (_angular) {
      angular = _angular['default'];
    }, function (_appWidgetWidgetService) {
      WidgetService = _appWidgetWidgetService['default'];
    }, function (_appWidgetWidgetCtrl) {
      WidgetCtrl = _appWidgetWidgetCtrl['default'];
    }, function (_appWidgetWidgetTpl) {
      WidgetTpl = _appWidgetWidgetTpl['default'];
    }, function (_appWidgetProgressbarTpl) {
      ProgressBarTpl = _appWidgetProgressbarTpl['default'];
    }, function (_appWidgetProgressBarDv) {
      ProgressBarDv = _appWidgetProgressBarDv['default'];
    }],
    execute: function () {
      app = angular.module('TheWhiteAgency.widget', [WidgetTpl.name, ProgressBarTpl.name]).service('WidgetService', WidgetService).config(["$stateProvider", function ($stateProvider) {

        $stateProvider.state('widget', {
          url: '/',
          templateUrl: WidgetTpl.name,
          controller: WidgetCtrl,
          controllerAs: 'ctrl'
        });
      }]);

      _export('default', app);
    }
  };
});
//# sourceMappingURL=Widget.js.map
