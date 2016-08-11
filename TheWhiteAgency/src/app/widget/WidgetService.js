class WidgetService{
  constructor($q, $http){
    this.DATA_URL = "app/json/data.json";
    this.$q = $q;
    this.$http = $http;
    this.init();
  }

  init(){ 
  }

  loadJson() {
    var defer = this.$q.defer();

    this.$http.get(this.DATA_URL).then((data) => {
      defer.resolve(data);
    });

    return defer.promise;
  }

}

WidgetService.$inject = ['$q', '$http'];
export default WidgetService;