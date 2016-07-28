
angular.module('search', [])
  .component('search', {
    templateUrl: 'app/search/search.html',
    bindings: {
      onUpdate: '&'
    },
    controller: function(){
    }
  });
