import {register} from 'app/widget/Util';
import ProgressBarTpl from 'app/widget/progressbar.tpl';
import Velocity from 'velocity';
class ProgressBarDv{
  constructor($mdToast){
    this.restrict = 'E';
    this.templateUrl = ProgressBarTpl.name;
    this.scope = {
      end: '@',
      start: '@',
      duration: '@'
    }
    
    this.init($mdToast);
  }

  init($mdToast){
    this.isAnimationFinished = false;
    this.$mdToast = $mdToast;
  }

  link(scope, element, attr){
    scope.finish = false;
    var that = this;
    attr.$observe("counter", (data) => {
      if(data > 1 && that.isAnimationFinished){
        angular.element(element[0].querySelector(".progressbar")).css("width","0px");
        scope.startAnimate();
      }else if(data > 1 && !that.isAnimationFinished){
        scope.showWarning();
      }
    });

    scope.startAnimate = () => {
      var ele = angular.element(element[0].querySelector('.progressbar'));

      Velocity(ele,
        { 
          width: "50%",
          backgroundColor: "#5CC9FF"
        },
        { 
          easing: [ scope.end ],
          duration: scope.duration/2,
          begin: function(){
            that.isAnimationFinished = false;
            scope.$evalAsync(function(){
              scope.progress = "Progress 0%";
            });
          },
          progress: function(elements, complete, remaining, start, tweenValue) {
            scope.$evalAsync(function(){
              scope.progress = "Progress " + parseInt((complete * 100)/2) + "%";
            });
          }
        });
      Velocity(ele,
        { 
          width: "100%",
          backgroundColor: "#00E854"
        },
        { 
          easing: [ scope.end ],
          duration: scope.duration/2,
          progress: function(elements, complete, remaining, start, tweenValue) {
            scope.$evalAsync(function(){
              scope.progress = "Progress " + parseInt((complete * 100)/2 + 50) + "%";
            });
          },
          complete: function(){
            scope.$evalAsync(function(){
              scope.progress = "This task is 100% completed";
            });
            scope.finish = true;
            that.isAnimationFinished = true;
          },
        });
    }
    scope.$evalAsync(function(){
      scope.startAnimate();
    });

    scope.showWarning = () => {
      that.$mdToast.show(
        that.$mdToast.simple()
          .content('Wait animation finish!')
          .position('bottom left')
          .hideDelay(3000)
      );
    };
  }

}

ProgressBarDv.$inject = ['$mdToast'];

register('TheWhiteAgency.app').directive('progressBar', ProgressBarDv);