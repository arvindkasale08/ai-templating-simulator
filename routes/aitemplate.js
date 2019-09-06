var express = require('express');
var router = express.Router();
const uuidv1 = require('uuid/v1');

/* Post collections. */
router.post('/app/:appId/templates/collections', function(req, res, next) {
  var appId = req.params.appId;
  console.log("Received request to register collections for appId="+ appId);
  const body = req.body;
  const uuid = uuidv1();
  console.log(body);
  console.log(uuid);
  res.json({
    ...body,
    "uuid": uuid
  });
});

/* Post dashboards. */
router.post('/app/:appId/templates/dashboards', function(req, res, next) {
  var appId = req.params.appId;
  console.log("Received request to register dashboards for appId="+ appId);
  const body = req.body;
  const uuid = uuidv1();
  console.log(body)
  console.log(uuid);
  res.json({ 
    ...body,
    "uuid": uuid,
  });
});


/* Post dashboards. */
router.post('/app/:appId/templates/widgets', function(req, res, next) {
  var appId = req.params.appId;
  console.log("Received request to register widgets for appId="+ appId);
  const body = req.body;
  const uuid = uuidv1();
  console.log(body)
  console.log(uuid);
  res.json({ 
    ...body,
    "uuid": uuid,
  });
});

/* Post dashboards. */
router.post('/app/:appId/templates/metrics', function(req, res, next) {
  var appId = req.params.appId;
  console.log("Received request to register metrics for appId="+ appId);
  const body = req.body;
  const uuid = uuidv1();
  console.log(body)
  console.log(uuid);
  res.json({ 
    ...body,
    "uuid": uuid,
  });
});



module.exports = router;
