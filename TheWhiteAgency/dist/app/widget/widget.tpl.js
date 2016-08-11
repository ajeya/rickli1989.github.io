System.register(['angular'], function (_export) {
  'use strict';

  var angular;
  return {
    setters: [function (_angular) {
      angular = _angular['default'];
    }],
    execute: function () {
      _export('default', angular.module('app/widget/widget.tpl.html', []).run(['$templateCache', function ($templateCache) {
        $templateCache.put('app/widget/widget.tpl.html', '<div class="widget_wrapper" flex="" layout="column"><md-toolbar class="header_bar" layout="row"><h1>The White Agency</h1></md-toolbar><div class="widget md-whiteframe-z5" ng-class="ctrl.isShow ? \'heightUp\' : \'heightDown\'"><md-toolbar md-scroll-shrink=""><div class="md-toolbar-tools"><h3><span class="title">Progress</span></h3><i class="material-icons" ng-click="ctrl.hideWidget()" ng-hide="ctrl.isShow">fullscreen</i> <i class="material-icons" ng-click="ctrl.hideWidget()" ng-show="ctrl.isShow">clear</i></div></md-toolbar><div class="progress_bar_wrapper" ng-class="ctrl.isShow ? \'flipInX\' : \'flipOutX\'"><progress-bar ng-if="ctrl.isDone" counter="{{ctrl.count}}" start="{{ctrl.start}}" end="{{ctrl.end}}" duration="{{ctrl.duration}}"></progress-bar></div></div><md-button ng-click="ctrl.reset()" class="md-fab md-accent reset"><md-icon class="material-icons">replay</md-icon><md-tooltip md-direction="top">Reset</md-tooltip></md-button></div>');
      }]));
    }
  };
});