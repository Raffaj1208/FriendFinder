//...
let express = require('express');
let app = express();
let path = require('path');
//...
module.exports = function() {
app.get('/survey', function(request, response) {
    response.sendfile(path.join(__dirname, '../public/survey.html'));
});
//...
app.get('/home', function(request,response){
    response.sendFile(path.join(__dirname, '../public/home.html'));
});
};