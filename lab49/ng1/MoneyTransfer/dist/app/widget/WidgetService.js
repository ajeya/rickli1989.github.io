System.register(['lodash', 'adamwdraper/Numeral-js', 'adamwdraper/Numeral-js/languages'], function (_export) {
  'use strict';

  var _, numeral, WidgetService;

  return {
    setters: [function (_lodash) {
      _ = _lodash['default'];
    }, function (_adamwdraperNumeralJs) {
      numeral = _adamwdraperNumeralJs['default'];
    }, function (_adamwdraperNumeralJsLanguages) {}],
    execute: function () {
      WidgetService = (function () {
        function WidgetService() {
          babelHelpers.classCallCheck(this, WidgetService);

          this.langs = [];
          this.currenciesList = ['AUD', 'GBP', 'USD'];
          this.langData = ['en', 'en-gb', 'en'];
          this.reference = [{ "USD": { "GBP": 0.64, "AUD": 1.27 } }, { "GBP": { "USD": 1.55, "AUD": 1.97 } }, { "AUD": { "GBP": 0.5, "USD": 0.7 } }];
          this.init();
        }

        babelHelpers.createClass(WidgetService, [{
          key: 'init',
          value: function init() {
            var that = this;
            var zipData = _.zip(this.currenciesList, this.langData);
            _.each(zipData, function (v) {
              that.langs.push({
                'lang': v[0],
                'symbol': numeral.language(v[1]).languageData().currency.symbol
              });
            });
          }
        }, {
          key: 'getSymbol',
          value: function getSymbol(country) {
            return _.filter(this.langs, function (v) {
              return v.lang == country;
            })[0].symbol;
          }
        }, {
          key: 'getLangs',
          value: function getLangs() {
            return this.langs;
          }
        }, {
          key: 'getCurrencies',
          value: function getCurrencies() {
            return this.currenciesList;
          }
        }, {
          key: 'storeToLocal',
          value: function storeToLocal(sendMoney, sendCur, receiveCur) {
            var uId = '_' + new Date().getTime().toString(36).substr(2, 9);
            localStorage.setItem(uId, JSON.stringify({
              'id': uId,
              'transfer': {
                'amount': sendMoney,
                'ccpaire': sendCur + "->" + receiveCur
              }
            }));
          }
        }, {
          key: 'calcConversion',
          value: function calcConversion(sendMoney, sendCur, receiveCur) {
            var result = _.filter(this.reference, function (v) {
              return angular.isDefined(v[sendCur]);
            })[0];
            var rate = angular.isDefined(result[sendCur][receiveCur]) ? result[sendCur][receiveCur] : 1;

            return numeral(sendMoney * rate).format('0.00');
          }
        }]);
        return WidgetService;
      })();

      _export('default', WidgetService);
    }
  };
});
//# sourceMappingURL=../../app/widget/WidgetService.js.map