var fs = require('fs');

module.exports = function (request, response)
{
		//see what URL the clients are requesting:  
		console.log('client request URL: ' , request.url);
		//tis is how we do routing:
		if(request.url === "/")
		{
			fs.readFile('index.html' , 'utf8' , function(errors,contents){
				response.writeHead(200, {'Content-Type':'text/html'}); //send data about response
				response.write(contents);//send response body
				response.end();//finished!
			});
		}
		else if(request.url === '/dojo')
		{
			fs.readFile('dojo.html' , 'utf8' , function(errors,contents){
				response.writeHead(200, {'Content-Type':'text/html'}); //send data about response
				response.write(contents);//send response body
				response.end();//finished!
			});  
		}   
		else if(request.url === '/style.css')
		{
			fs.readFile('./stylesheets/style.css' , 'utf8' , function(errors,contents){
				response.writeHead(200, {'Content-Type':'text/css'}); //send data about response
				response.write(contents);//send response body
				response.end();//finished!
			});  
		}
		else if(request.url === '/lollipop.png')
		{
			fs.readFile('./img/lollipop.png' , function(errors,contents){
				response.writeHead(200, {'Content-Type':'image/*'}); //send data about response
				response.write(contents);//send response body
				response.end();//finished!
			});  
		}
		else if(request.url === '/change_lollipop.js')
		{
			fs.readFile('./js/change_lollipop.js' , 'utf8' , function(errors,contents){
				response.writeHead(200, {'Content-Type':'text/javascript'}); //send data about response
				response.write(contents);//send response body
				response.end();//finished!
			});  
		}
		else if(request.url === '/candybar.png')
		{
			fs.readFile('./img/candybar.png' , function(errors,contents){
				response.writeHead(200, {'Content-Type':'image/*'}); //send data about response
				response.write(contents);//send response body
				response.end();//finished!
			});  
		}
		else
		{
			response.writeHead(404);
			response.end('File not found!!!');
		}
};