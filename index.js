let http = require('http');
let fs = require('fs');

let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./no/no.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('bruh 404 error i think');
        } else {
            response.write(data);
        }
        response.end();
    });
};

http.createServer(handleRequest).listen(8000);

//194865483752-q72tn5cknuinrbq3dj6mr36logsuq4dl.apps.googleusercontent.com
//clientid
//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
//client secret

// Import the functions you need from the SDKs you need