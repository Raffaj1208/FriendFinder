let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');
let PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('PORT', process.env.PORT || 3000);

require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);

app.listen(PORT, function() {
    console.log('listening on: ' + PORT);
});