/*
HTTP WebServer by Felix Eckert

Copyright (c) 2018 Felix Eckert, Line-Six Studios

*/

// Shorten multiple console functions
const log   = console.log; 
const error = console.error;
const warn  = console.warn;

// Configuration
const PORT = 8888;

// Get multiple variables from package.json
const PACKAGE = require("../package.json");
const VERSION = PACKAGE.version;

// Import different modules
const http    = require("http");
const connect = require("connect");

const connectUtil = require("./lib/util/connect");

const app = connect();

app.use("/", connectUtil.root);

log("HTTP WebServer by Felix Eckert");
log(`Version ${VERSION}`);

http.createServer(app).listen(PORT);
log("Server is now running and listening on port: ", PORT)