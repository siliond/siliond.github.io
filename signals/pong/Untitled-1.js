// Initialize the game and set the dimensions of the canvas
const game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
});

// Preload any assets that the game will use
function preload() {
    // You don't need to load any assets since the ball will be a Graphics object
}

// Initialize the game objects and set their starting positions
function create() {
    // Set the background color
    this.cameras.main.setBackgroundColor('#000');

    // Create a group to hold the paddles
    this.paddles = this.add.group();

    // Create the ball
    this.ball = this.add.graphics();
    this.ball.fillStyle(0xffffff, 1);
    this.ball.fillCircle(400, 300, 20); // The ball will be a circle with radius 20
    this.physics.add.existing(this.ball); // Add the ball to the physics system

    // Set the ball's bouncing properties
    this.ball.setBounce(1);
    this.ball.setCollideWorldBounds(true);

    // Set the ball's velocity
    this.ball.setVelocityX(200);
    this.ball.setVelocityY(200);

    // Create the paddles
    const numPaddles = 3; // Change this to set the number of paddles
    const shapeRadius = 300; // The radius of the geometric shape on which the paddles will move
    const paddleWidth = 20; // The width of the paddles
    const paddleHeight = 100; // The height of the paddles
    for (let i = 0; i < numPaddles; i++) {
        // Calculate the x and y position of the paddle based on the number of sides and the radius of the shape
        const x = shapeRadius * Math.cos(2 * Math.PI * i / numPaddles);
        const y = shapeRadius * Math.sin(2 * Math.PI * i / numPaddles);
        const paddle = this.add.rectangle(x, y, paddleWidth, paddleHeight, 0xffffff);
        this.paddles.add(paddle);
    }

    // Set the paddles to be immovable
    this.physics.add.collider(this.paddles, this.ball, function(paddle, ball) {
        ball.setVelocityX(-1 * ball.body.velocity.x);
    }, null, this);

    // Set the paddles to be controlled by the keyboard
    this.cursors = this.input.keyboard.createCursorKeys();
}

// Update the game state each frame
function update() {
    // Move the paddles according to the cursor keys
    this.paddles.children.iterate(function(paddle) {
        if (this.cursors.up.isDown) {
            paddle.y -= 10;
        } else if (this.cursors.down.isDown) {
            paddle.y += 10;
        }
    }, this);
}

// Update the game state each frame
function update() {
    // Move the paddles according to the cursor keys
    this.paddles.children.iterate(function(paddle, index) {
        // Calculate the angle of the paddle's movement based on its position on the shape
        const angle = 2 * Math.PI * index / this.paddles.children.size;

        // Set the paddle's velocity based on the angle and the cursor keys
        if (this.cursors.up.isDown) {
            this.physics.velocityFromAngle(angle, -100, paddle.body.velocity);
        } else if (this.cursors.down.isDown) {
            this.physics.velocityFromAngle(angle, 100, paddle.body.velocity);
        } else {
            paddle.body.setVelocity(0);
        }
    }, this);
}


this.cursors = {
    up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
    down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
};