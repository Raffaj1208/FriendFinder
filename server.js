let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');
let PORT = process.env.PORT || 3300;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('../routing/apiRoutes')(app);
require('../routing/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log('listening on: ' + PORT);
});