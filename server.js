let express = require('express');
let app = express();
let PORT = process.env.PORT || 3000;
let bodyParser = require('body-parser');
let path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
/*app.use(express.json());
app.use(express.urlencoded({extended: true}));
*/
app.set('PORT', process.env.PORT || 3000);

require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);

app.listen(PORT, function() {
    console.log('listening on: ' + PORT);
});