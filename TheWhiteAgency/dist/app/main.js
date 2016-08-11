System.register(['angular', 'app/app', 'app/widget/Widget'], function (_export) {
  'use strict';

  var angular, appModule, widgetModule;
  return {
    setters: [function (_angular) {
      angular = _angular['default'];
    }, function (_appApp) {
      appModule = _appApp['default'];
    }, function (_appWidgetWidget) {
      widgetModule = _appWidgetWidget['default'];
    }],
    execute: function () {
      _export('default', angular.module('TheWhiteAgency.main', [appModule.name, widgetModule.name]));
    }
  };
});
//# sourceMappingURL=main.js.map
