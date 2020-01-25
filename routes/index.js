var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users/:owner/repos', function(req, res, next) {
  console.log(req.headers);
  let accessToken = req.headers['access_token'];
  let refreshToken = req.headers['refresh_token'];
  let owner = req.params.owner;
  let response = {
    onwerName: owner,
    repos : [
      "repo1",
      "repo2",
      "repo3"
    ]
  }
  if (accessToken == 'failed-access') {
    res.status(401);
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
