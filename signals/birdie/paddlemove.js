var paddle;
var upKey;

function create() {
  // Create the paddle as a Graphics object
  paddle = this.add.graphics();

  // Set the starting position of the paddle
  paddle.moveTo(0, 0);

  // Set the ending position of the paddle
  paddle.lineTo(game.config.width, game.config.height);

  // Set the line style of the paddle
  paddle.lineStyle(2, 0xFFFFFF);
  
  // Render the paddle to the screen
  paddle.strokePath();
  
  // Create the upKey object to detect the up arrow key
  upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
}

function update() {
  // Check if the up arrow key is pressed
  if (upKey.isDown) {
    // If the up arrow key is pressed, move the paddle upward
    paddle.y -= 0.1 * game.loop.delta;
  }
}
