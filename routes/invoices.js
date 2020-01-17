var express = require('express');
var router = express.Router();
var con = 1;

// Get all invoices, paginated max upto 10 pages 50 invoices per page
router.get('/', function(req, res, next) {
  console.log("Conn is", con);
  let invoices = [];
  let offset = parseInt(req.query.offset);
  console.log(offset);
  let pageSize = 2;
  let start = offset * pageSize;
  let end = start + pageSize;
  if (offset < 1000000000) {
    offset += 1;
    for (let i = start; i < end; i++) {
      let invoice = {
        id: i,
        status: (i%4 == 0 || i % 3 == 0 ) ? "PAID" : "UNPAID",
        amount: Math.random() * 10 * (i + 1),
        paymentId: (i+1),
        expenseId: (i+1),
        user: ("User-"+i),
        compulsoryField: "123",
        rows: 20
      }
      invoices.push(invoice);
    }
  } else {
    offset = null;
  }
  let response = {
    invoices,
    offset
  };
  con ++;

  setTimeout(() => res.send(response), 750);
  // Very bad request
  //res.status(400);
  //res.send("{'code': 'Too many Request'}");
  // Unauthorized

  // Internal Server error

  // Ratelimit
  //res.send(response);
});

router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  let invoice = {
    id,
    status: (id%4 == 0 || id % 3 == 0 ) ? "PAID" : "UNPAID",
    amount: Math.random() * 10 * (id + 1),
    paymentId: (id),
    user: ("User-"+id),
    compulsoryField: "123",
    rows: 20
  };

  if (id % 25 == 0) {
    invoice.rows = 2000;
  }

  setTimeout(() => res.json(invoice), 750);
  //res.send(invoice);
});

module.exports = router;
