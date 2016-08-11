System.register(['angular'], function (_export) {
  'use strict';

  var angular;
  return {
    setters: [function (_angular) {
      angular = _angular['default'];
    }],
    execute: function () {
      _export('default', angular.module('app/widget/progressbar.tpl.html', []).run(['$templateCache', function ($templateCache) {
        $templateCache.put('app/widget/progressbar.tpl.html', '<div class="progressbar" ng-style="{\'width\' : {{start}}}"></div><div class="status"><p>{{progress}}</p><i ng-show="finish" class="material-icons">done</i></div>');
      }]));
    }
  };
});