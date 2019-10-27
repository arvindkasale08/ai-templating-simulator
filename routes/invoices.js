var express = require('express');
var router = express.Router();

// Get all invoices, paginated max upto 10 pages 50 invoices per page
router.get('/', function(req, res, next) {
  let invoices = [];
  let offset = parseInt(req.query.offset);
  console.log(offset);
  let pageSize = 50;
  let start = offset * 50;
  let end = start + 50;
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
  }
  let response = {
    invoices,
    offset
  };
  res.json(response);
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
  res.json(invoice);
});

module.exports = router;
