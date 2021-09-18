//Setting the canvas
var canvas = document.getElementById('canvas3');
var c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;




//Drawing one circle
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function () {
    var image = new Image();
    image.src = '/personal-website/img/circletestorange.png';
    c.drawImage(image, this.x, this.y, this.radius, this.radius);
  }

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < -this.radius) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < -this.radius) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

  }
}

//Drawing multiple circles
var circleArray = [];

for (var i = 0; i < 50; i++) {
  var radius = 100;
  var x = Math.random() * (innerWidth - radius *2) + radius ;
  var y = Math.random() * (innerHeight - radius *2) + radius;
  var dx = (Math.random() - 0.5) * 8;
  var dy = (Math.random() - 0.5) * 8;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

//Animate
function animate() {

  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].draw();
    circleArray[i].update();
  }
}

animate();

function text(){
  c.font = "30px Arial";
  c.fillText("Hello World", 10, 50);
}

text();

function resize_canvas(){
  canvas = document.getElementById("canvas");
  if (canvas.width  < window.innerWidth)
  {
    canvas.width  = window.innerWidth;
  }

  if (canvas.height < window.innerHeight)
  {
    canvas.height = window.innerHeight;
  }
}
