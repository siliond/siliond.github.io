var Canvas;

// Set up the canvas
function setupCanvas() {
  Canvas = {
    canvas: document.getElementById("canvas"),

    // Set the dimensions of the canvas
    W: 500,
    H: 500,
    
    // Set the perspective and view angle
    fov: 120,
    angle: 45,

    // Set the position of the number
    x: 100,
    y: 100,
    z: 100,

    // Set the rotation of the number
    rx: 0,
    ry: 0,
    rz: 0,

    // Set the color of the number
    color: "#000000"
  }
  Canvas.ctx = Canvas.canvas.getContext("2d");
  
  canvas.width = Canvas.W;
  canvas.height = Canvas.H;


  // Start the animation
  animate();
}

// Draw the number
function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, Canvas.W, Canvas.H);

  // Convert 3D coordinates to 2D coordinates
  var scale = Canvas.fov / (Canvas.fov + Canvas.z);
  var x2d = (Canvas.x * scale) + (Canvas.W / 2);
  var y2d = (Canvas.y * scale) + (Canvas.H / 2);

  // Save the current context
  ctx.save();

  // Set the transformation matrix
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  // Translate to the center of the canvas
  ctx.translate(Canvas.W / 2, Canvas.H / 2);

  // Rotate the canvas according to the rotation of the number
  ctx.rotate(Canvas.rx);
  ctx.rotate(Canvas.ry);
  ctx.rotate(Canvas.rz);

  // Translate back to the position of the number
  ctx.translate(-x2d, -y2d);

  // Set the color of the number
  ctx.fillStyle = Canvas.color;

  // Draw the number
  ctx.beginPath();
  ctx.moveTo(x2d, y2d);
  ctx.lineTo(x2d + 40, y2d);
  ctx.lineTo(x2d + 20, y2d + 40);
  ctx.lineTo(x2d, y2d + 40);
  ctx.closePath();
  ctx.fill();

  // Restore the context
  ctx.restore();
}

// Update the position and rotation of the number
function update() {
  Canvas.x -= 0.5;
  Canvas.y -= 0.5;
  Canvas.z -= 0.5;
  Canvas.rx += 0.01;
  Canvas.ry += 0.01;
  Canvas.rz += 0.01;
}

// Animate the number
function animate() {
  draw();
  update();
  requestAnimationFrame(animate);
}
