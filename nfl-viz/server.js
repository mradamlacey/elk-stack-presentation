'use strict';

var app = require('./app.js'),
    http = require('http');

var title = "\n************************************\nNFL VIZ\n************************************\n";
console.info(title);

app.set('port', process.env.PORT || 8888);

http.createServer(app).listen(app.get('port'), function () {

    console.info('Started server...');
});


process.on('uncaughtException', function (err) {
    var msg = [];
    msg.push('Unhandled exception: ' + err);
    if(err.stack)
    {
        msg.push('\tStacktrace:');
        msg.push(err.stack);
    }
    console.error(msg.join(''));
    process.exit(1);
});

