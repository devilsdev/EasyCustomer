let express = require('express');
let path = require('path');
let serveStatic = require('serve-static');

app = express();
app.use(serveStatic(__dirname + "/dist"));

let port = process.env.PORT || 5001;
app.listen(port);
console.log('--App running on Port ' + port);