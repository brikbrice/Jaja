const http = require('http');
const fs = require('fs');
const path = require('path')




http.createServer(function (request, response) {
    console.log('request', request.url)

    let filePath = '.' + request.url;
    if ( filePath == './'){
         filePath = './index.html'
    }

    let extname =
    String(path.extname(filePath)).toLowerCase()
    let mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    }

    let contentType = mimeTypes[extname] || 'application/octet-stream'

    fs.readFile(filePath, function(error, content){
        if (error) throw error
        else {
            response.writeHead(200, { 'Content-Type':contentType})
            response.end(content, 'utf-8')
        }
    })

}).listen(8080)
console.log('server at http://localhost:8080')

// faire un server qui inspect un dossier et qui créé une liste pour chaque fichier trouvé 
