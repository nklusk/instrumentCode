// p5js_dom_pilot
// A p5js sketch (with a UI made using the DOM functions) sends strings to a websocket at `127.0.0.1:8080`. 
// The strings are formatted to match the UDP messages that Pilot expects. 
// Chataigne maps the websocket message to a UDP message (going to port `49161`).

let textInput;
let button;
 let firstSymbol
   let secondSymbol
   let duration
var host = '127.0.0.1:8080'; // address of the websockets server
var socket; // the websocket connection

function setup() {
    createCanvas(500,500)
    
    // button.mousePressed(playNote);

    // connect to server...
    socket = new WebSocket('ws://' + host);
    socket.onopen = openHandler;
    textInput = createInput();
}

function draw(){
    textSize(30);
    text(textInput.value(), 10, 30)
}



// function playNote() {
//     let note = "note:0" + textField.value() + "ff";

//     // send the note to the websocket server
//     // (if the socket is open and ready)
//     if (socket.readyState == 1) {
//         socket.send(note);
//         console.log("Sent: " + note);
//     } else {
//         console.log("Socket not ready.");
//     }
// }
function keyTyped(){
   
    console.log("key press")
    let note = "note:" + firstSymbol + secondSymbol + duration;
//cdega
    if (key === 'a') {
        firstSymbol = 23;
        secondSymbol = "c"
        duration ="ff"
      } else if (key === 'b') {
        firstSymbol = '41';
        secondSymbol = 'd'
        duration = 'f'
      } else if (key === 'c') {
        firstSymbol = 12;
        secondSymbol = "e"
        duration ="f"
      } else if (key === 'd') {
        firstSymbol = 25;
        secondSymbol = "g"
        duration ="f"
      } else if (key === 'e') {
        firstSymbol = 31;
        secondSymbol = "a"
        duration ="ff"
      } else if (key === 'f') {
        firstSymbol = "09";
        secondSymbol = "c"
        duration ="f"
      } else if (key === 'g') {
        firstSymbol = "05";
        secondSymbol = "d"
        duration ="f"
      } else if (key === 'h') {
        firstSymbol = 15;
        secondSymbol = "g"
        duration ="f"
      } else if (key === 'i') {
        firstSymbol = 25;
        secondSymbol = "e"
        duration ="ff"
      } else if (key === 'j') {
        firstSymbol = "08";
        secondSymbol = "a"
        duration ="f"
      } else if (key === 'k') {
        firstSymbol = "09";
        secondSymbol = "c"
        duration ="f"
      } else if (key === 'l') {
        firstSymbol = 10;
        secondSymbol = "d"
        duration ="f"
      } else if (key === 'm') {
        firstSymbol = 11;
        secondSymbol = "g"
        duration ="f"
      } else if (key === 'n') {
        firstSymbol = 12;
        secondSymbol = "e"
        duration ="f"
      } else if (key === 'o') {
        firstSymbol = 40;
        secondSymbol = "a"
        duration ="ff"
      } else if (key === 'p') {
        firstSymbol = 14;
        secondSymbol = "c"
        duration ="f"
      } else if (key === 'q') {
        firstSymbol = 30;
        secondSymbol = "d"
        duration ="f"
      } else if (key === 'r') {
        firstSymbol = 35;
        secondSymbol = "g"
        duration ="f"
      } else if (key === 's') {
        firstSymbol = "03";
        secondSymbol = "e"
        duration ="f"
      } else if (key === 't') {
        firstSymbol = "04";
        secondSymbol = "a"
        duration ="f"
      } else if (key === 'u') {
        firstSymbol = 33;
        secondSymbol = "c"
        duration ="ff"
      } else if (key === 'v') {
        firstSymbol = 12;
        secondSymbol = "d"
        duration ="f"
      } else if (key === 'w') {
        firstSymbol = 17;
        secondSymbol = "g"
        duration ="f"
      } else if (key === 'x') {
        firstSymbol = "03";
        secondSymbol = "e"
        duration ="f"
      }else if (key === 'y') {
        firstSymbol = "08";
        secondSymbol = "a"
        duration ="f"
      }else if (key === 'z') {
        firstSymbol = 10;
        secondSymbol = "c"
        duration ="f"
      }

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
