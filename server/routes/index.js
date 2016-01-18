/**
 * Created by cwgraff on 1/17/16.
 */

var express = require('express');
var path = require('path');

var router = express.Router();

router.get('/', function(request, response){
    response.sendFile(path.join(__dirname,'../public/views/index.html'));
});

module.exports = router;