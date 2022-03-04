var http = require('http')
//var date = require('./myfirstmodule')
var url = require('url')

http.createServer(function (request, response){
    response.writeHead(200, {'Content-Type': 'text/html'})
    //response.write("The date " + date.myDateTime())

    var q = url.parse(request.url, true).query
    var text = q.year + "" + q.month

    //response.write(request.url)
    response.end(text)
}).listen(8080)