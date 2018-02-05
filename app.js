'use strict'

var express = require('express');
var app = express();
var path = require('path');
/*var fs = require('fs');

var key = fs.readFileSync('encryption/private.key');
var cert = fs.readFileSync( 'encryption/primary.crt' );
var ca = fs.readFileSync( 'encryption/intermediate.crt' );
*/

app.use('/public/scripts',express.static(path.join(__dirname, '/public/scripts')));
app.get('/', function(req,res){
res.sendFile(path.join(__dirname +'/public/index.html'));
});

var server = app.listen(process.env.port || '80', function(){
console.log('App listening on port %s', server.address().port);
console.log('App listening on Address %s', server.address().address);
console.log('Press Ctrl c to quit');
});
