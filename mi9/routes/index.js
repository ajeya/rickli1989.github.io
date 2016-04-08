var express = require('express');
var router = express.Router();
var async = require("async");

router
.get('/', function(req, res, next) {
  res.render('index', { title: 'Mi9' });
})
.post('/', function(req, res, next) {
  var results = {};
  results['response'] = [];
  async.filter(req.body.payload, function(v, cb){
    if(v.drm && v.episodeCount > 0){
      results['response'].push({
        "image": v.image.showImage,
        "slug": v.slug,
        "title": v.title
      });
    }
    cb();
  }, function(){
    res.status(200).send(results);
  });
});

module.exports = router;
