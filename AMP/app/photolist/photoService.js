angular.module('photo-service', [])
  .service('PhotoSv', ["$http", "$q", function($http, $q){
    this.getName = function(){
      return "rick";
    }
    
    this.getPhotos = function(){
      var defer = $q.defer();
      $http.get('data.js').then(
        function(result){
          result.data.forEach(function(d){
            d.picture = d.picture.slice(0,-3) + 'png';
          });
          defer.resolve(result.data);
        }, 
        function(err){
          defer.reject(err)
        });
      return defer.promise;
    }
  }]);