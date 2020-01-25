var express = require('express');
var router = express.Router();
var con = 1;

// Get all payments, paginated max upto 10 pages 50 payments per page
router.get('/', function(req, res, next) {
  let payments = [];
  //console.log(req.headers);
  let accessToken = req.headers['access_token'];
  let refreshToken = req.headers['refresh_token'];
  let offset = parseInt(req.query.offset);
  console.log(offset);
  let pageSize = 1;
  let start = offset * pageSize;
  let end = start + pageSize;
  if (offset < 10000000) {
    offset += 1;
    for (let i = start; i < end; i++) {
      let payment = {
        id: i,
        status: (i%4 == 0 || i % 3 == 0 ) ? "PAID" : "UNPAID",
        amount: Math.random() * 10 * (i + 1),
        invoiceId: (i+1),
        user: ("User-"+i)
      }
      payments.push(payment);
    }
  } else {
    offset = null;
  }
  let response = {
    payments,
    offset
  };
  if (accessToken == 'failed-access') {
    res.status(401);
  }
  res.json(response);
});

router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  let payment = {
    id,
    status: (id%4 == 0 || id % 3 == 0 ) ? "PAID" : "UNPAID",
    amount: Math.random() * 10 * (id + 1),
    invoiceId: (id),
    user: ("User-"+id)
  };
  if (con % 5 > 3) {
    //res.status(500);
  }
  con ++;

  //setTimeout(() => res.json(payment), 1);
  res.json(payment);
});

module.exports = router;
