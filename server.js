let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');
let PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(request, response) {
    response.json(path.join(__dirname, 'app/public/home.html'));
});

app.listen(PORT, function() {
    console.log('listening on: ' + PORT);
});