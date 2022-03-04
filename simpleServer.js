const http = require('http');
const fs = require('fs');

/*
const mime = {
    '.js': 'text/javascript; charset=UTF-8',
    '.txt': 'text/plain; charset=UTF-8',
    '.html': 'text/html; charset=UTF-8',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.jpg': 'image/jpeg'
  }
*/

http.createServer(function (req, res) {
    fs.readFile('index.html', (err,data)=>{
        if (err) throw err
        res.writeHead(200, {'Contetnt-Type': 'text/html'})
        res.end(data)
        return
    })
}).listen(8080) 

console.log('Server running at')

