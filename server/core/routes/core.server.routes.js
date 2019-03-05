module.exports = (app) => {
    const core = require('../controller/core.server.controller');

    app.route('/*').get(core.renderIndex);
}