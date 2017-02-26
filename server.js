var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/client'));

app.listen(port, function() {
  console.log('thedenbrothers.com is running on http://localhost:' + port);
});
