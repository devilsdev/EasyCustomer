let express = require('express');
let path = require('path');
let serveStatic = require('serve-static');

app = express();
app.use(serveStatic(__dirname + "/dist"));

app.listen(process.env.PORT || 5001);
console.log('--App running--');