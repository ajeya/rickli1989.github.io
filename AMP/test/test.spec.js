beforeEach(module('amp'));

describe('photo service tests', function () {


  it('should list all photos', function () {
    var service, q;

    // Get the service from the injector
    angular.mock.inject(function GetDependencies(PhotoSv, $q) {
      service = PhotoSv;
      q = $q;
    });

    var products = service.getPhotos();
    var stub = sinon.stub(service, 'getPhotos');
    // console.log(products);
    products.then(function(data){
      expect(data.length).toEqual(6);
    })

  });
});