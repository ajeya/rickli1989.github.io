System.register(['app/widget/localStorage-polyfill'], function (_export) {
  'use strict';

  var WidgetCtrl;
  return {
    setters: [function (_appWidgetLocalStoragePolyfill) {}],
    execute: function () {
      WidgetCtrl = (function () {
        function WidgetCtrl(WidgetService) {
          babelHelpers.classCallCheck(this, WidgetCtrl);

          this.WidgetService = WidgetService;
          this.init();
        }

        babelHelpers.createClass(WidgetCtrl, [{
          key: 'init',
          value: function init() {
            this.sendCur = this.receiveCur = 'AUD';
            this.currencies = this.WidgetService.getCurrencies();
            this.sendSymbol = this.WidgetService.getSymbol(this.sendCur);
            this.receiveSymbol = this.WidgetService.getSymbol(this.receiveCur);
          }
        }, {
          key: 'submit',
          value: function submit() {
            if (this.WidgetForm.$valid) {
              var result = this.WidgetService.calcConversion(this.sendMoney, this.sendCur, this.receiveCur);
              this.receiveMoney = result;
              this.WidgetService.storeToLocal(this.sendMoney, this.sendCur, this.receiveCur);
            }
          }
        }, {
          key: 'changeCal',
          value: function changeCal(type, val) {
            if (!angular.isDefined(this.sendMoney) || this.sendMoney == "") return;
            if (type == 'send') this.sendSymbol = this.WidgetService.getSymbol(val);else this.receiveSymbol = this.WidgetService.getSymbol(val);

            var result = this.WidgetService.calcConversion(this.sendMoney, this.sendCur, this.receiveCur);
            this.receiveMoney = result;
          }
        }]);
        return WidgetCtrl;
      })();

      WidgetCtrl.$inject = ['WidgetService'];

      _export('default', WidgetCtrl);
    }
  };
});
//# sourceMappingURL=../../app/widget/WidgetCtrl.js.map