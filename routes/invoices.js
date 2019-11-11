var express = require('express');
var router = express.Router();
var con = 1;

// Get all invoices, paginated max upto 10 pages 50 invoices per page
router.get('/', function(req, res, next) {
  console.log("Conn is", con);
  let invoices = [];
  let offset = parseInt(req.query.offset);
  console.log(offset);
  let pageSize = 250;
  let start = offset * pageSize;
  let end = start + pageSize;
  if (offset < 10) {
    offset += 1;
    for (let i = start; i < end; i++) {
      let invoice = {
        id: i,
        status: (i%4 == 0 || i % 3 == 0 ) ? "PAID" : "UNPAID",
        amount: Math.random() * 10 * (i + 1),
        paymentId: (i+1),
        expenseId: (i+1),
        user: ("User-"+i)
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
  if (con == 1) {
    //res.status(401);
  }
  con ++;

  setTimeout(() => res.send(response), 400);

  //res.send(response);
});

router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  let invoice = {
    id,
    status: (id%4 == 0 || id % 3 == 0 ) ? "PAID" : "UNPAID",
    amount: Math.random() * 10 * (id + 1),
    paymentId: (id),
    user: ("User-"+id)
  };

  setTimeout(() => res.json(invoice), 400);
});

module.exports = router;
