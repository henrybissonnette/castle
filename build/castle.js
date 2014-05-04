(function() {
  var app, express, logfmt, port;

  express = require("express");

  logfmt = require("logfmt");

  app = express();

  app.use(logfmt.requestLogger());

  app.get('/', function(req, res) {
    return res.send('Hello World!');
  });

  port = Number(process.env.PORT || 5000);

  app.listen(port, function() {
    return console.log("Listening on " + port);
  });

}).call(this);
