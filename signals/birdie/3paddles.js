var game;
var ball;
var paddles;
var upKey;
var downKey;
var leftKey;
var rightKey;

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
  
  // Create the paddles as a group of Graphics objects
  paddles = game.add.group();
  
  // Create the three paddles as Graphics objects and add them to the paddles group
  var paddle1 = game.add.graphics();
  var paddle2 = game.add.graphics();
  var paddle3 = game.add.graphics();
  paddles.add(paddle1);
  paddles.add(paddle2);
  paddles.add(paddle3);
  
  // Set the starting positions and sizes of the paddles
  paddle1.x = game.config.width / 2;
  paddle1.y = 10;
  paddle2.x = 10;
  paddle2.y = game.config.height - 10;
  paddle3.x = game.config.width - 10;
  paddle3.y = game.config.height - 10;
  paddle1.width = 50;
  paddle1.height = 10;
  paddle2.width = 10;
  paddle2.height = 50;
  paddle3.width = 10;
  paddle3.height = 50;
  
  // Set the fill style of the paddles
  paddle1.fillStyle(0xFFFFFF);
  paddle2.fillStyle(0xFFFF
