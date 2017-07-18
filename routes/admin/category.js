var router = require('express').Router();
var Category = require('../../models/category');

router.get('/admin/categories', function (req, res) {
  Category.find({}, function(err, categories) {
    var categoryMap = {};

    categories.forEach(function(category) {
      categoryMap[category._id] = category;
    });

    res.json(categoryMap);
  });
});

module.exports = router;
