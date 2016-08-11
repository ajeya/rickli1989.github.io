import {register} from 'app/widget/Util';
import _ from 'lodash';
class WidgetInputDv{
  constructor(WidgetService){
    this.restrict = 'A';
    this.require = 'ngModel';
    this.WidgetService = WidgetService;
    this.init();
  }

  init(){
    this.langs = this.WidgetService.getLangs();
  }

  link(scope, element, attributes, ngModel){
    var that = this;
    ngModel.$parsers.push(function(value) {
      scope.ctrl.receiveMoney = '';
      if(!value || value.length == 0){
        return;
      }

      if(!isNaN(parseFloat(value)) && isFinite(value)){
        ngModel.$setValidity('validInput', true);
      }else{
        ngModel.$setValidity('validInput', false); 
      }
      
      return value;
    });
  }

}

WidgetInputDv.$inject = ['WidgetService'];

register('Lab49.app').directive('validInput', WidgetInputDv);