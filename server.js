const { createServer } = require('http');
const next = require('next');
var port = process.env.PORT || 8080;

const app = next({
    dev: process.env.NODE_ENV !== 'production'
});

const routes = require('./routes');
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
    createServer(handler).listen(port, err => {
        if (err) throw err;
        console.log('Ready!!! Listening on port ' + port);
    })
});
