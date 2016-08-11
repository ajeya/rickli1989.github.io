System.register(['app/widget/Util', 'app/widget/progressbar.tpl', 'velocity'], function (_export) {
  'use strict';

  var register, ProgressBarTpl, Velocity, ProgressBarDv;
  return {
    setters: [function (_appWidgetUtil) {
      register = _appWidgetUtil.register;
    }, function (_appWidgetProgressbarTpl) {
      ProgressBarTpl = _appWidgetProgressbarTpl['default'];
    }, function (_velocity) {
      Velocity = _velocity['default'];
    }],
    execute: function () {
      ProgressBarDv = (function () {
        function ProgressBarDv($mdToast) {
          babelHelpers.classCallCheck(this, ProgressBarDv);

          this.restrict = 'E';
          this.templateUrl = ProgressBarTpl.name;
          this.scope = {
            end: '@',
            start: '@',
            duration: '@'
          };

          this.init($mdToast);
        }

        babelHelpers.createClass(ProgressBarDv, [{
          key: 'init',
          value: function init($mdToast) {
            this.isAnimationFinished = false;
            this.$mdToast = $mdToast;
          }
        }, {
          key: 'link',
          value: function link(scope, element, attr) {
            scope.finish = false;
            var that = this;
            attr.$observe("counter", function (data) {
              if (data > 1 && that.isAnimationFinished) {
                angular.element(element[0].querySelector(".progressbar")).css("width", "0px");
                scope.startAnimate();
              } else if (data > 1 && !that.isAnimationFinished) {
                scope.showWarning();
              }
            });

            scope.startAnimate = function () {
              var ele = angular.element(element[0].querySelector('.progressbar'));

              Velocity(ele, {
                width: "50%",
                backgroundColor: "#5CC9FF"
              }, {
                easing: [scope.end],
                duration: scope.duration / 2,
                begin: function begin() {
                  that.isAnimationFinished = false;
                  scope.$evalAsync(function () {
                    scope.progress = "Progress 0%";
                  });
                },
                progress: function progress(elements, complete, remaining, start, tweenValue) {
                  scope.$evalAsync(function () {
                    scope.progress = "Progress " + parseInt(complete * 100 / 2) + "%";
                  });
                }
              });
              Velocity(ele, {
                width: "100%",
                backgroundColor: "#00E854"
              }, {
                easing: [scope.end],
                duration: scope.duration / 2,
                progress: function progress(elements, complete, remaining, start, tweenValue) {
                  scope.$evalAsync(function () {
                    scope.progress = "Progress " + parseInt(complete * 100 / 2 + 50) + "%";
                  });
                },
                complete: function complete() {
                  scope.$evalAsync(function () {
                    scope.progress = "This task is 100% completed";
                  });
                  scope.finish = true;
                  that.isAnimationFinished = true;
                }
              });
            };
            scope.$evalAsync(function () {
              scope.startAnimate();
            });

            scope.showWarning = function () {
              that.$mdToast.show(that.$mdToast.simple().content('Wait animation finish!').position('bottom left').hideDelay(3000));
            };
          }
        }]);
        return ProgressBarDv;
      })();

      ProgressBarDv.$inject = ['$mdToast'];

      register('TheWhiteAgency.app').directive('progressBar', ProgressBarDv);
    }
  };
});
//# sourceMappingURL=ProgressBarDv.js.map
