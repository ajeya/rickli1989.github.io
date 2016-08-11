System.register(['angular', 'app/widget/WidgetService', 'app/widget/WidgetCtrl', 'app/widget/widget.tpl', 'app/widget/WidgetInputDv'], function (_export) {
  'use strict';

  var angular, WidgetService, WidgetCtrl, WidgetTpl, WidgetInputDv, app;
  return {
    setters: [function (_angular) {
      angular = _angular['default'];
    }, function (_appWidgetWidgetService) {
      WidgetService = _appWidgetWidgetService['default'];
    }, function (_appWidgetWidgetCtrl) {
      WidgetCtrl = _appWidgetWidgetCtrl['default'];
    }, function (_appWidgetWidgetTpl) {
      WidgetTpl = _appWidgetWidgetTpl['default'];
    }, function (_appWidgetWidgetInputDv) {
      WidgetInputDv = _appWidgetWidgetInputDv['default'];
    }],
    execute: function () {
      app = angular.module('Lab49.widget', [WidgetTpl.name]).service('WidgetService', WidgetService).config(["$stateProvider", function ($stateProvider) {

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
//# sourceMappingURL=../../app/widget/Widget.js.map