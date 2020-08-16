const express = require('express');
const morgan = require('morgan');
let app = express();

app.use(express.static(__dirname + '/public'));
app.use(morgan('combined'));

app.listen(3000);
console.log("Is run on 3000");