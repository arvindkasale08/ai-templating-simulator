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

/* Paginated Response testing */
router.get('/paginated', function(req, res, next) {
  console.log('Request query', req.query);
  console.log('Request params', req.params);
  console.log('Request body', req.body);
  console.log('Request cookies', req.cookies);
  let page = parseInt(req.query.page) || 1;
  console.log(`Page is ${page}`);
  let data = [];
  let pagination = {
    next: page >= 3 ? null : page + 1,
    prev: page - 1,
    total: 10
  }

  for (i=0; i<10; i++) {
    data.push({
      "id": i+((page - 1 )*10),
      "name": `User-${i+((page - 1 )*10)}`
    })
  }

  let response = {
    data,
    page: pagination
  };

  console.log(response);
  //res
  //.json(response);

  //res.status(401).json({"code": "UNAUTHORIZED"});

  res.send(response);
});



module.exports = router;
