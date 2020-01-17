var express = require('express');
var router = express.Router();

// Get all expenses, paginated max upto 10 pages 50 expenses per page
router.get('/', function(req, res, next) {
  let expenses = [];
  let offset = parseInt(req.query.offset);
  console.log(offset);
  let pageSize = 1;
  let start = offset * pageSize;
  let end = start + pageSize;
  if (offset < 100000000) {
    offset += 1;
    for (let i = start; i < end; i++) {
      let expense = {
        id: i,
        status: (i%4 == 0 || i % 3 == 0 ) ? "CONVERTED" : "PENDING",
        amount: Math.random() * 10 * (i + 1),
        invoiceId: (i+1),
        user: ("User-"+i)
      }
      expenses.push(expense);
    }
  } else {
    offset = null;
  }
  let response = {
    expenses,
    offset
  };
  res.json(response);
});

router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  let expense = {
    id,
    status: (id%4 == 0 || id % 3 == 0 ) ? "CONVERTED" : "PENDING",
    amount: Math.random() * 10 * (id + 1),
    invoiceId: (id),
    user: ("User-"+id)
  };
  res.json(expense)
});

module.exports = router;
