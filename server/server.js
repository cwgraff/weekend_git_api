/**
 * Created by cwgraff on 1/17/16.
 */

var express = require('express');
var path = require('path');
var index = require('./routes/index');

var app = express();

app.use(express.static('server/public'));
app.use('/', index);




var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Waiting for some noise on port', port);

});