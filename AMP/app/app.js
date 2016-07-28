angular.element(document).ready(function() {
  angular.bootstrap(document, ['amp']);
});

angular.module('amp', ['search', 'photolist'])
  .component('ampTest', {
    templateUrl: 'app/app.html',
    controller: function(){
      var that = this;
      this.update = function(searchText){
        that.searchText = searchText;
      }
    }
  });