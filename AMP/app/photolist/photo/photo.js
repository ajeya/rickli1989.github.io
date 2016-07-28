angular.module('photo', [])
  .component('photo', {
    templateUrl: 'app/photolist/photo/photo.html',
    bindings: {
      photo: '='
    }
  });
