// osc_p5draw
// TouchOSC phone app (mix2 layout, tab 3) sends OSC messages. 
// Chataigne maps the OSC messages to Websockets.
// p5js draws using the coordinates from OSC.

var xy = [0,0];

var host = '127.0.0.1:8080'; // address of the websockets server
var socket; // the websocket connection

function setup() {
    createCanvas(800,800);
    
    // connect to server...
    socket = new WebSocket('ws://' + host);
    socket.onopen = openHandler;
    socket.onmessage = messageHandler;
}

function draw() {
    fill(random(255), random(255), random(255));
    ellipse(xy[0], xy[1], 10, 10);
}

function openHandler() {
    console.log("Connected to socket server at " + host);
}

function messageHandler(event) {
    var msg = event.data; // read data from the onmessage event
    xy = split(msg,',').map(Number); // split the data into an array *of numbers*
    console.log(msg);
}