const log = console.log;

const fs  = require("fs");

exports.onRequest = (request, response) => {

    log("Request recieved: ", request.url);

    if (request.method == "GET" && request.url == "/") {

        response.writeHead(200, {

            "content-type":"text/html"
    
        });
        
        fs.createReadStream("/www/fe.htm").pipe(response);
        
        //response.end();
    

    }

};