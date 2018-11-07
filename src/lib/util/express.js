const log = console.log;

const fs  = require("fs");

exports.root = (request, response, next) => {

    log("Request for site root was made!\nProcessing request...");

    response.setHeader("Content-Type", "text/html");

    fs.createReadStream("/www/Uhrtest.html").pipe(response);

}