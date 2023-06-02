// Set up some constants for the game
const PADDLE_SPEED = 500; // Paddle movement speed, in pixels per second
const BALL_SPEED = 400; // Ball movement speed, in pixels per second

// Set up the playing field
let shape; // The shape of the playing field (a Polygon object)
let sides; // The number of sides on the playing field
let radius; // The radius of the playing field (distance from center to any vertex)

// Set up the paddles and ball
let paddles = []; // An array to hold the paddles
let ball; // The ball

// Set up the controls
let keys = {}; // An object to hold the keys for controlling the paddles

// Create a menu to allow the player to configure the game
let menu = document.createElement("div");
menu.innerHTML = `
  <h1>Pong</h1>
  <p>Use the arrow keys to move the paddles</p>
  <p>Number of paddles:
    <select id="sides-select">
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
    </select>
  </p>
  <button id="start-button">Start</button>
`;
document.body.appendChild(menu);

// Set up a function to initialize the game
function startGame() {
    // Get the number of sides from the menu
    sides = parseInt(document.getElementById("sides-select").value);

    // Set up the playing field
    radius = 300; // The radius of the playing field
    let angle = 2 * Math.PI / sides; // The angle between each vertex
    let vertices = []; // An array to hold the vertices of the playing field
    for (let i = 0; i < sides; i++) {
        let x = radius * Math.cos(angle * i);
        let y = radius * Math.sin(angle * i);
        vertices.push(new Phaser.Geom.Point(x, y));
    }
    shape = new Phaser.Geom.Polygon(vertices); // Create the playing field as a Polygon object

    // Set up the paddles
    for (let i = 0; i < sides; i++) {
        // Set the initial position of the paddle
        let x = radius * Math.cos(angle * i);
        let y = radius * Math.sin(angle * i);

        // Create a new paddle
        let paddle = this.add.graphics();
        paddle.fillStyle(0xffffff, 1); // Set the fill color to white
        paddle.fillRect(-25, -100, 50, 200); // Draw a rectangle for the paddle
        paddle.x = x;
        paddle.y = y;
        paddles.push(paddle); // Add the paddle to the array of paddles

        // Set up the controls for the paddle
        let keyCode;
        switch (i) {
            case 0:
                keyCode = Phaser.Input.Key
        }
    }
}