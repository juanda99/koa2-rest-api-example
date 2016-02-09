/* The node --harmony flag runs your app with available ES6 features in node, 
but it's currently an extremely limited subset of the ES6 standard. */
/* Use babel for getting ES6 in node */
require("babel-register");
require("./server.js");
