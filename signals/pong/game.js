// Set up the game
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "game-container");

// Set up the game state
const gameState = {
    create: function() {
        // Set up the keys for controlling the paddles
        this.cursors = {
            up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
            down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        };

        // Add a menu to allow the user to specify the number of paddles
        this.menu = game.add.text(
            game.width / 2,
            game.height / 2,
            "Enter the number of paddles:", {
                font: "18px Arial",
                fill: "#000000",
                align: "center",
            }
        );
        this.menu.anchor.setTo(0.5, 0.5); // Set the pivot point of the menu to its center
        this.menu.inputEnabled = true; // Enable user input for the menu

        let numPaddles = 3; // Configurable number of paddles
        this.menu.events.onInputDown.add(function() {
            // When the user clicks the menu, open a prompt to enter the number of paddles
            numPaddles = prompt("Enter the number of paddles (2-4):");

            if (numPaddles >= 2 && numPaddles <= 4) {
                // If the user enters a valid number of paddles, start the game
                game.state.start("game", true, false, numPaddles);
            } else {
                // If the user enters an invalid number of paddles, show an error message
            }
        });

        // Create the paddles
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
    },

    update: function() {
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

        // Check for collisions with the paddles or the sides of the field
        game.physics.collide(this.ball, this.paddles, function(ball, paddle) {
            // Reverse the ball's x velocity when it collides with a paddle
            ball.body.velocity.x *= -1;
        });
        if (this.ball.x < 0 || this.ball.x > game.width) {
            // Reverse the ball's x velocity when it collides with a side of the field
            this.ball.body.velocity.x *= -1;
        }
        if (this.ball.y < 0 || this.ball.y > game.height) {
            // Reverse the ball's y velocity when it collides with the top or bottom of the field
            this.ball.body.velocity.y *= -1;
        }
    }
};

// Start the game
game.state.add("game", gameState);
game.state.start("game");