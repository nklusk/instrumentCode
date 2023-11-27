// p5play_pilot
// A p5play game triggers Pilot sounds by sending websocket messages converted to UDP by Chataigne

let block1, block2, block3, ball;

var host = '127.0.0.1:8080'; // address of the websockets server
var socket; // the websocket connection

function setup() {
    new Canvas(1024,727);
    world.gravity.y = 10;  
    allSprites.rotation = 33;

    block1 = new Sprite(width/4,height/2,100,100,"s");
    block2 = new Sprite((width/4)*2,height/2,100,100,"s");
    block3 = new Sprite((width/4)*3,height/2,100,100,"s");

    ball = new Sprite(width/2, -20, 50);
    ball.bounciness = .6;  

    // connect to server...
    socket = new WebSocket('ws://' + host);
    socket.onopen = openHandler;    
}

function draw() {
    clear();

    if (ball.y > height && mouse.presses()) {
        ball.x = mouse.x;
        ball.y = -50;
        ball.vel.y = 0;
        ball.vel.x = 0;
    }

    if (ball.collides(block1)) playNote("2C");
    if (ball.collides(block2)) playNote("3C");
    if (ball.collides(block3)) playNote("4C");

}

function playNote(theNote) {
    let note = "note:0" + theNote + "ff";

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