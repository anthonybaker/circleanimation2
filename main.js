
// Get the canvas object and the context
var canvas = document.getElementById('canvas');
var mainContext = canvas.getContext('2d');

// collection of circles
var circles = [];


var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;

// function to create a circle
function Circle(radius, speed, width, xPos, yPos) {
    this.radius = radius;
    this.speed = speed;
    this.width = width;
    this.xPos = xPos;
    this.yPos = yPos;
    this.opacity = 0.05 + Math.random() * 0.5;

    this.counter = 0;

    var signHelper = Math.floor(Math.random() * 2);

    if (signHelper == 1) {
        this.sign = -1;
    } else {
        this.sign = 1;
    }
}

// Function to update the circle
Circle.prototype.update = function() {
 
      this.counter += this.sign * this.speed;
 
      mainContext.beginPath();
 
      mainContext.arc(this.xPos + Math.cos(this.counter / 100) * this.radius,
        this.yPos + Math.sin(this.counter / 100) * this.radius,
        this.width,
        0,
        Math.PI * 2,
        false);
 
      mainContext.closePath();
 
      mainContext.fillStyle = 'rgba(185, 211, 238,' + this.opacity + ')';
      mainContext.fill();
    };

// Function to draw
function draw() {
    mainContext.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < circles.length; i++) {
        var myCircle = circles[i];
        myCircle.update();
    }

    requestAnimationFrame(draw);
}

function drawCircles() {
    
    for (var i = 0; i < 100; i++) {

        var randomX = Math.round(Math.random() * canvas.width);
        var randomY = Math.round(Math.random() * canvas.height);
        var speed = 0.2 + Math.random() * 3;
        var size = 5 + Math.random() * 100;

        var circle = new Circle(100, speed, size, randomX, randomY);
            circles.push(circle);
    }
    draw();
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

    drawCircles();
}
resizeCanvas();