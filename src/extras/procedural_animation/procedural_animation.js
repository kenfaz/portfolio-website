var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var x_cor = document.getElementById("x-value");
var y_cor = document.getElementById("y-value");
var distance_text = document.getElementById("d-value");
var ctx = canvas.getContext("2d");

// // Drawing

// // circle properties
// let radius = 50;
// let x = radius + 20; // starting x
// let y = canvas.height / 2; // vertically centered
// let dx = 2; // speed
// let yx = 2; // speed

// function drawCircle() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height); // clear previous frame
//   ctx.beginPath();
//   ctx.arc(x, y, radius, 0, Math.PI * 2);
//   ctx.strokeStyle = "#3a1c1a";
//   ctx.lineWidth = 5;
//   ctx.stroke();
//   ctx.closePath();

//   x += dx; // move right
//   y += yx;
//   if (x + radius > canvas.width || x - radius < 0) {
//     dx = -dx; // reverse direction
//   }

//   if (y + radius > canvas.height || y - radius < 0) {
//     yx = -yx; // reverse direction
//   }

//   x_cor.textContent = x;
//   y_cor.textContent = y;

//   requestAnimationFrame(drawCircle); // keep animating
// }

// drawCircle();

// Classes

class Node {
  constructor(ctx, canvas, num, x, y, dx, yx, radius = 20) {
    this.num = num;
    this.x = x+radius;
    this.y = y+radius;
    this.dx = dx;
    this.yx = yx;
    this.radius = radius;
    this.ctx = ctx;
    this.canvas = canvas;
  }

  // Functions

  displayNum() {
    console.log(`This node is numbered: ${this.num}`);
  }

  updateNode() {
    this.x += this.dx; // move right
    this.y += this.yx;
    if (this.x + this.radius > this.canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx; // reverse direction
    }

    if (this.y + this.radius > this.canvas.height || this.y - this.radius < 0) {
      this.yx = -this.yx; // reverse direction
    }
  }

  drawNode() {
    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // clear previous frame
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.strokeStyle = "#3a1c1a";
    this.ctx.lineWidth = 5;
    this.ctx.stroke();
    this.ctx.closePath();
  }
}

const head = new Node(ctx, canvas, 0, 120, 120, 2, 2, 60);
const body = new Node(ctx, canvas, 1, 20, 20, 2, 2, 60);

const nodes = [head, body];

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear previous frame
  head.updateNode();
  body.updateNode();
  head.drawNode();
  body.drawNode();
  spring_constraint(head, body);
  requestAnimationFrame(animate);
}

function spring_constraint(head, body) {
  const dx = head.x - body.x;
  const dy = head.y - body.x;
  const distance =  Math.sqrt(dx * dx + dy * dy);
  distance_text.textContent = Math.floor(distance);
}






animate();





