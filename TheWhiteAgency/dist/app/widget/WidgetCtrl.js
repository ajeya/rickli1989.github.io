System.register([], function (_export) {
  'use strict';

  var WidgetCtrl;
  return {
    setters: [],
    execute: function () {
      WidgetCtrl = (function () {
        function WidgetCtrl(WidgetService) {
          babelHelpers.classCallCheck(this, WidgetCtrl);

          this.isDone = false;
          this.WidgetService = WidgetService;
          this.init();
        }

        babelHelpers.createClass(WidgetCtrl, [{
          key: 'init',
          value: function init() {
            var _this = this;

            this.WidgetService.loadJson().then(function (res) {
              _this.duration = res.data.data.lightbox.duration;
              _this.start = res.data.data.lightbox.start;
              _this.end = res.data.data.lightbox.finish;
              _this.isDone = true;
            });
            this.count = 1;
            this.isShow = true;
          }
        }, {
          key: 'hideWidget',
          value: function hideWidget() {
            this.isShow = !this.isShow;
          }
        }, {
          key: 'reset',
          value: function reset() {
            this.count++;
          }
        }]);
        return WidgetCtrl;
      })();

      WidgetCtrl.$inject = ['WidgetService'];

      _export('default', WidgetCtrl);
    }
  };
});
//# sourceMappingURL=WidgetCtrl.js.map
