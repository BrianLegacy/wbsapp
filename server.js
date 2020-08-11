var express = require('express');
var app = express();
//routes
app.get('/', function(request, response){
    response.send('Hello, World!');
});

app.get('/comments', function(request, response){
    console.log('Get request received at /comments');
});

app.post('/comments', function(request, response){
    console.log('Post request received at /comments');
});

app.listen(3000, function(){
    console.log("server is running on port 3000");
});