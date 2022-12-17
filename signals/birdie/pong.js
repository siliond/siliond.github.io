var game;
var ball;
var leftPaddle;
var rightPaddle;
var upKey;
var downKey;

function preload() {
  // Load assets (e.g. images, sounds) here
}

function create() {
  // Create the game
  game = this;
  
  // Create the ball as a Graphics object
  ball = game.add.graphics();
  
  // Set the starting position and size of the ball
  ball.x = game.config.width / 2;
  ball.y = game.config.height / 2;
  ball.radius = 10;
  
  // Set the fill style of the ball
  ball.fillStyle(0xFFFFFF);
  
  // Render the ball to the screen
  ball.fillCircle(0, 0, ball.radius);
  
  // Create the paddles as Graphics objects
  leftPaddle = game.add.graphics();
  rightPaddle = game.add.graphics();
  
  // Set the starting positions and sizes of the paddles
  leftPaddle.x = 10;
  leftPaddle.y = game.config.height / 2;
  rightPaddle.x = game.config.width - 10;
  rightPaddle.y = game.config.height / 2;
  leftPaddle.width = 10;
  leftPaddle.height = 50;
  rightPaddle.width = 10;
  rightPaddle.height = 50;
  
  // Set the fill style of the paddles
  leftPaddle.fillStyle(0xFFFFFF);
  rightPaddle.fillStyle(0xFFFFFF);
  
  // Render the paddles to the screen
  leftPaddle.fillRect(0, 0, leftPaddle.width, leftPaddle.height);
  rightPaddle.fillRect(0, 0, rightPaddle.width, rightPaddle.height);
  
  // Create the upKey and downKey objects to detect the up and down arrow keys
  upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
  downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
}

function update() {
  // Update the position of the left paddle based on the up and down arrow keys
  if (upKey.isDown && leftPaddle.y > 0) {
    leftPaddle.y -= 5;
  }
  if (downKey.isDown && leftPaddle.y + leftPaddle.height < game.config.height) {
    leftPaddle.y += 5;
  }
  
  // Update the position of the right paddle based on the up and down arrow keys
  if (upKey.isDown && rightPaddle.y > 0) {
    rightPaddle.y -= 5;
  }
  if (downKey.isDown && rightPaddle.y + rightPaddle.height < game.config.height) {
    rightPaddle.y += 5;
  }
  
  // Update the ball position based on its velocity
  ball.x += ball.vx;
  ball.y += ball.vy;
  
  // Check for ball collisions with the paddles and walls
  if (ball.x - ball.radius <= leftPaddle.x + leftPaddle.width && ball.y >= leftPaddle.y && ball.y <= leftPaddle.y + leftPaddle.height) {
    // The ball

function update() {
  // Update the position of the left paddle based on the up and down arrow keys
  if (upKey.isDown) {
    leftPaddle.y -= 5;
  }
  else if (downKey.isDown) {
    leftPaddle.y += 5;
  }
  
  // Keep the left paddle within the bounds of the game
  leftPaddle.y = Phaser.Math.Clamp(leftPaddle.y, 0, game.config.height - leftPaddle.height);
  
  // Update the position of the right paddle based on the up and down arrow keys
  if (upKey.isDown) {
    rightPaddle.y -= 5;
  }
  else if (downKey.isDown) {
    rightPaddle.y += 5;
  }
  
  // Keep the right paddle within the bounds of the game
  rightPaddle.y = Phaser.Math.Clamp(rightPaddle.y, 0, game.config.height - rightPaddle.height);
}

