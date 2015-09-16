System.register(['app/widget/Util', 'lodash'], function (_export) {
  'use strict';

  var register, _, WidgetInputDv;

  return {
    setters: [function (_appWidgetUtil) {
      register = _appWidgetUtil.register;
    }, function (_lodash) {
      _ = _lodash['default'];
    }],
    execute: function () {
      WidgetInputDv = (function () {
        function WidgetInputDv(WidgetService) {
          babelHelpers.classCallCheck(this, WidgetInputDv);

          this.restrict = 'A';
          this.require = 'ngModel';
          this.WidgetService = WidgetService;
          this.init();
        }

        babelHelpers.createClass(WidgetInputDv, [{
          key: 'init',
          value: function init() {
            this.langs = this.WidgetService.getLangs();
          }
        }, {
          key: 'link',
          value: function link(scope, element, attributes, ngModel) {
            var that = this;
            ngModel.$parsers.push(function (value) {
              scope.ctrl.receiveMoney = '';
              if (!value || value.length == 0) {
                return;
              }

              if (!isNaN(parseFloat(value)) && isFinite(value)) {
                ngModel.$setValidity('validInput', true);
              } else {
                ngModel.$setValidity('validInput', false);
              }

              return value;
            });
          }
        }]);
        return WidgetInputDv;
      })();

      WidgetInputDv.$inject = ['WidgetService'];

      register('Lab49.app').directive('validInput', WidgetInputDv);
    }
  };
});
//# sourceMappingURL=../../app/widget/WidgetInputDv.js.map