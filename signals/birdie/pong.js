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
  downKey = this.input.keyboard.addKey(Ph
