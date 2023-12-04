// p5js_dom_pilot
// A p5js sketch (with a UI made using the DOM functions) sends strings to a websocket at `127.0.0.1:8080`. 
// The strings are formatted to match the UDP messages that Pilot expects. 
// Chataigne maps the websocket message to a UDP message (going to port `49161`).

var hydra = new Hydra({
    canvas: document.getElementById("myCanvas")
  })
  osc(5, 0.05, 0.001)
  .kaleid([3,4,5,7,8,9,10].fast(0.1))
  .color(0.55, 0.29)
  .colorama(0.9)
  .modulateRotate(o0,()=>Math.sin(time) * 0.003)
  .modulate(o0, 0.8)
  .scale(0.7)
  .out(o0)
  
  let hc, pg;


let textInput;
let button;
 let firstSymbol
   let secondSymbol
   let duration
var host = '127.0.0.1:8080'; // address of the websockets server
var socket; // the websocket connection

// function preload(){
//     font = loadFont('assets/AppleGaramond.ttf')
// }

function setup() {
    createCanvas(1200,675)
    hc = select("#myCanvas");
    hc.hide();
    background(220);
    textInput = createInput();
    textSize(30);
    fill('#ffedcf');
    //textFont(font);
    
    // button.mousePressed(playNote);

    // connect to server...
    socket = new WebSocket('ws://' + host);
    socket.onopen = openHandler;
    
}

function draw(){
    image(hc, 0, 0)
    text(textInput.value(), 20, 10, 1170, 660)
    
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

      let note = "note:" + firstSymbol + secondSymbol + duration;

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
