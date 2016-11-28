// Get the canvas object and the context
var canvas = document.getElementById('canvas');
var mainContext = canvas.getContext('2d');

// variables for drawing the circle
var radius = 175;
var endPercent = 101;
var curPerc = 0;
var counterClockwise = false;
var circ = Math.PI * 2;
var quart = Math.PI / 2;
var tail = 0;


var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;

// Function to draw
function drawCircle() {

    // clear all contents of the canvas
    mainContext.clearRect(0, 0, canvas.width, canvas.height);
         
    // color in the background
    mainContext.fillStyle = "#EEEEEE";
    mainContext.fillRect(0, 0, canvas.width, canvas.height);
     
    // circle style
    mainContext.lineWidth = 10;
    mainContext.strokeStyle = '#99CC33';

    // draw the circle
    mainContext.beginPath();

    mainContext.arc(canvas.width/2, canvas.height/2, radius, -(quart) + tail, ((circ) * (curPerc / 100)) - quart, false);
    mainContext.stroke();
    
    // tail can be used to remove trailing path and do cool spinning animations
    //tail += 0.01;
    if(curPerc < 100){
        curPerc++;
    } else{
        curPerc = 0;
    }

    //mainContext.closePath();

    // call drawCircle every time Browser redraws (around 60 times per second)
    requestAnimationFrame(drawCircle);

}


// resize the canvas to fill browser window dynamically
window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
    canvas.width = window.innerWidth - 25;
    canvas.height = window.innerHeight - 25;

    /**
     * Your drawings need to be inside this function otherwise they will be reset when 
     * you resize the browser window and the canvas goes will be cleared.
     */

    drawCircle();
}
resizeCanvas();