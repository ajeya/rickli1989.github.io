import 'app/widget/localStorage-polyfill';

class WidgetCtrl {

  constructor(WidgetService){
    this.WidgetService = WidgetService;
    this.init();
  }

  init() {
    this.sendCur = this.receiveCur = 'AUD';
    this.currencies = this.WidgetService.getCurrencies();
    this.sendSymbol = this.WidgetService.getSymbol(this.sendCur);
    this.receiveSymbol = this.WidgetService.getSymbol(this.receiveCur);
  }

  submit(){
    if(this.WidgetForm.$valid){
      var result = this.WidgetService.calcConversion(this.sendMoney, this.sendCur, this.receiveCur);
      this.receiveMoney = result;
      this.WidgetService.storeToLocal(this.sendMoney, this.sendCur, this.receiveCur);
    }
  }

  changeCal(type,val){
    if(!angular.isDefined(this.sendMoney) || this.sendMoney == "") return;
    if(type == 'send')
      this.sendSymbol = this.WidgetService.getSymbol(val);
    else
      this.receiveSymbol = this.WidgetService.getSymbol(val);

    var result = this.WidgetService.calcConversion(this.sendMoney, this.sendCur, this.receiveCur);
    this.receiveMoney = result;
  }

}

WidgetCtrl.$inject = ['WidgetService'];
export default WidgetCtrl;
