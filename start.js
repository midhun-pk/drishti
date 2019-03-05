const express = require('./express'),
    config = require('./server/config/config')

let app = express.init();
app.listen(config.port, config.host, () => {
    console.log('Server started at port 3000')
});
