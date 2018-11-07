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
const express = require("express");

const expressUtil = require("./lib/util/express");

const app = express();

app.get("/", expressUtil.root);

log("HTTP WebServer by Felix Eckert");
log(`Version ${VERSION}`);

http.createServer(app).listen(PORT);
log("Server is now running and listening on port: ", PORT)