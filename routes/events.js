var express = require('express');
var router = express.Router();
const uuidv1 = require('uuid/v1');

// Get all events, paginated max upto 40 pages 50 invoices per page
router.get('/', function(req, res, next) {
  let events = [];
  let offset = parseInt(req.query.offset);
  console.log(offset);
  let pageSize = 50;
  let start = offset * 50;
  let end = start + 50;
  if (offset < 40) {
    offset += 1;
    for (let i = start; i < end; i++) {
      let id = uuidv1();
      let random = Math.random() * 10;
      let event = {
        id,
        event_type: (random > 3) ? (random > 7 ? "INVOICE" : "EXPENSE") : "PAYMENT",
        object_id: i,
        user_id: "User-" + i
      }
      events.push(event);
    }
  } else {
    offset = null;
  }
  let response = {
    events,
    offset
  };
  res.json(response);
});

module.exports = router;
