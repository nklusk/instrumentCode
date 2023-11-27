// midi_cc_p5js
// Chataigne accepts MIDI CC's from a Beatstep and sends them to p5js sketch via Websockets.

var r = 255;
var g = 255;
var b = 255;
var size = 20;

var host = '127.0.0.1:8080'; // address of the websockets server
var socket; // the websocket connection

function setup() {
    createCanvas(800,600);
    rectMode(CENTER);
    fill("white");
    
    // connect to server...
    socket = new WebSocket('ws://' + host);
    socket.onopen = openHandler;
    socket.onmessage = messageHandler;
}

function draw() {
    background(r,g,b);
    rect(width/2,height/2,size,size);
}

function openHandler() {
    console.log("Connected to socket server at " + host);
}

function messageHandler(event) {
    var msg = event.data; // read data from the onmessage event
    var keyvalue = split(msg,':');
    if (keyvalue[0] == 'r') r = keyvalue[1];
    if (keyvalue[0] == 'g') g = keyvalue[1];
    if (keyvalue[0] == 'b') b = keyvalue[1];
    if (keyvalue[0] == 'w') size = keyvalue[1];
    // console.log(keyvalue);
}