//Main starting point
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router');

app.use(express.static('public'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
