// require request and the nod fs module


var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.to/http-examples')
  .on('error', function(err) {
    throw err;
  })
  .on('response', function(response){
    console.log('Response Status Code: ', response.statusCode);
  })
  .pipe(fs.createWriteStream('./downloaded.html'));



  //Notes:
  //1. 'request.get' is equivalent to 'request()'
  //2. 'request.on('error', callback) handles any error
  //3. request.on('response, callback) handles the response
  //4. What is happening here?
