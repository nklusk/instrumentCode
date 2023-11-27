// p5js_dom_pilot
// A p5js sketch (with a UI made using the DOM functions) sends strings to a websocket at `127.0.0.1:8080`. 
// The strings are formatted to match the UDP messages that Pilot expects. 
// Chataigne maps the websocket message to a UDP message (going to port `49161`).

let textField;
let button;

var host = '127.0.0.1:8080'; // address of the websockets server
var socket; // the websocket connection

function setup() {
    noCanvas();
    textField = createInput('4C');
    button = createButton('Play Note');
    button.mousePressed(playNote);

    // connect to server...
    socket = new WebSocket('ws://' + host);
    socket.onopen = openHandler;
}

function playNote() {
    let note = "note:0" + textField.value() + "ff";

    // send the note to the websocket server
    // (if the socket is open and ready)
    if (socket.readyState == 1) {
        socket.send(note);
        console.log("Sent: " + note);
    } else {
        console.log("Socket not ready.");
    }
}

function openHandler() {
    console.log("Connected to socket server at " + host);
  }
