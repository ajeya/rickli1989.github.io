import _ from 'lodash';
import numeral from 'adamwdraper/Numeral-js';
import 'adamwdraper/Numeral-js/languages';

class WidgetService{
  constructor(){
    this.langs = [];
    this.currenciesList = ['AUD', 'GBP', 'USD'];
    this.langData = ['en', 'en-gb', 'en'];
    this.reference = [
      {"USD":{ "GBP":0.64,"AUD":1.27}}, 
      {"GBP":{ "USD":1.55,"AUD":1.97}}, 
      {"AUD":{ "GBP":0.5, "USD":0.7 }}
    ];
    this.init();
  }

  init(){
    let that = this;
    let zipData = _.zip(this.currenciesList, this.langData);
    _.each(zipData, (v) => {
      that.langs.push(
        {
          'lang': v[0],
          'symbol': numeral.language(v[1]).languageData().currency.symbol
        }
      );
    });
  }

  getSymbol(country){
    return _.filter(this.langs, (v) => {
      return v.lang == country;
    })[0].symbol;
  }

  getLangs() {
    return this.langs;
  }

  getCurrencies(){
    return this.currenciesList;
  }

  storeToLocal(sendMoney, sendCur, receiveCur){
    let uId = '_' + new Date().getTime().toString(36).substr(2, 9);
    localStorage.setItem(uId, JSON.stringify({
      'id': uId,
      'transfer': {
        'amount': sendMoney,
        'ccpaire': sendCur+"->"+receiveCur
      }
    }));
  }

  calcConversion(sendMoney, sendCur, receiveCur){
    var result = _.filter(this.reference, function(v){
      return angular.isDefined(v[sendCur]);
    })[0];  
    var rate = angular.isDefined(result[sendCur][receiveCur]) ? result[sendCur][receiveCur] : 1;

    return numeral(sendMoney * rate).format('0.00');
  }


}

export default WidgetService;