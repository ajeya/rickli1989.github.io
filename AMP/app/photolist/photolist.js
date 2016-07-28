angular.module('photolist', ['photo-service', 'photo'])
  .component('photoList', {
    templateUrl: 'app/photolist/photolist.html',
    bindings: {
      'search' : '='
    },
    controller: ['PhotoSv', function(PhotoSv){
      this.$onInit = function() {
        var that = this;
        PhotoSv.getPhotos().then(function(data){
          that.photos = data;
        })
      };
    }]
  });
