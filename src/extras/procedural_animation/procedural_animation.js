var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var x_cor = document.getElementById("x-value");
var y_cor = document.getElementById("y-value");
var ctx = canvas.getContext("2d");

// Drawing

// circle properties
let radius = 50;
let x = radius + 20; // starting x
let y = canvas.height / 2; // vertically centered
let dx = 2; // speed
let yx = 2; // speed

function drawCircle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear previous frame
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.strokeStyle = "#3a1c1a";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.closePath();

  x += dx; // move right
  y += yx;
  if (x + radius > canvas.width || x - radius < 0) {
    dx = -dx; // reverse direction
  }

  if (y + radius > canvas.height || y - radius < 0) {
    yx = -yx; // reverse direction
  }

  x_cor.textContent = x;
  y_cor.textContent = y;

  requestAnimationFrame(drawCircle); // keep animating
}

drawCircle();
