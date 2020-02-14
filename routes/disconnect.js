var express = require('express');
var router = express.Router();

router.post('/oauth2/revoke', function(req, res, next) {
  console.log(req.headers);
  let response = {
    "message": "OK"
  }
  res.json(response);
});

module.exports = router;
