System.register([], function (_export) {
  'use strict';

  var WidgetService;
  return {
    setters: [],
    execute: function () {
      WidgetService = (function () {
        function WidgetService($q, $http) {
          babelHelpers.classCallCheck(this, WidgetService);

          this.DATA_URL = "app/json/data.json";
          this.$q = $q;
          this.$http = $http;
          this.init();
        }

        babelHelpers.createClass(WidgetService, [{
          key: 'init',
          value: function init() {}
        }, {
          key: 'loadJson',
          value: function loadJson() {
            var defer = this.$q.defer();

            this.$http.get(this.DATA_URL).then(function (data) {
              defer.resolve(data);
            });

            return defer.promise;
          }
        }]);
        return WidgetService;
      })();

      WidgetService.$inject = ['$q', '$http'];

      _export('default', WidgetService);
    }
  };
});
//# sourceMappingURL=WidgetService.js.map
