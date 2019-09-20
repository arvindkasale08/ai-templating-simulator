var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users/:owner/repos', function(req, res, next) {
  let owner = req.params.owner;
  let response = {
    onwerName: owner,
    repos : [
      "repo1",
      "repo2",
      "repo3"
    ]
  }

  res.json(response);
});

router.get('/users/:owner/repos/:repoName', function(req, res, next) {
  let repoName = req.params.repoName;
  let owner = req.params.owner;
  let response = {
    onwerName: owner,
    repoName: repoName,
    creator: owner,
    comments: 45
  }

  res.json(response);
});

module.exports = router;
