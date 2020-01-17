var express = require('express');
var router = express.Router();

router.post('/api/integration/v1/content/accounts', function(req, res, next) {
   console.log("Received connection request with request=", req);
   let accountName = "ACCOUNT_NAME" + Math.random() * 100000;
   let response = {
     "connection": {
       "accountName": accountName
     }
   };

   res.json(response);
});

module.exports = router;
