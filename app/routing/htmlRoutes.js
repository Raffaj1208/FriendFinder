//...
let express = require('express');
let path = require('path');
//...
module.exports = function(app) {

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '../public/index.html'))
});

app.get('/index', function(request, response) {
    response.sendFile(path.join(__dirname, '../public/index.html'))
}

app.get('/survey', function(request, response) {
    response.sendfile(path.join(__dirname, '../public/survey.html'));
});
//...
app.get('*' , function(request,response){
    response.sendFile(path.join(__dirname, '../public/index.html'));
});
};