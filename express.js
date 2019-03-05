
const express = require('express'),
    bodyParser = require('body-parser'),
    config = require('./server/config/config'),
    path = require('path');

let initMiddleware = (app) => {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json())
    app.use(express.static('./client/dist/client'))
    app.use(express.static('./'))
}

let initViewEngine = (app) => {
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    // current working directory
    app.set('views', process.cwd())
}

let initRoutes = (app) => {
    let routes = config.server.routes;
    routes.forEach((route) => {
        require(path.resolve(route))(app);
    });
}

module.exports.init = () => {

    // Init app
    let app = express();

    // Init Middleware
    initMiddleware(app);

    // Init view-engine
    initViewEngine(app);

    // Init Routes
    initRoutes(app);

    // Return app
    return app
}