//source: http://openclassrooms.com/courses/ultra-fast-applications-using-node-js/creating-your-first-app-with-node-js

var http = require('http');
//for pathname
var url = require('url');
//for request parameters
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
	var page = url.parse(req.url).pathname;
	var params = querystring.parse(url.parse(req.url).query);
	
	console.log(page);
	res.writeHead(200,{"Content-Type": "text/html"});
	if (page == '/'){
		res.write('hi there!');
	}else{
		res.write('<!DOCTYPE html>'+
		'<html>'+
		' <head>'+
		' <meta charset="utf-8" />'+
		' <title>My Node.js page!</title>'+
		' </head>'+ 
		' <body>'+
		' <p>Here is a paragraph of <strong>HTML</strong>!</p>'+
		' </body>'+
		'</html>');
		if('firstname' in params && 'lastname' in params){
			res.write('Your name is ' + params['firstname'] + ' ' + params['lastname']);
		}
	}
	res.end();
});
server.listen(8080);