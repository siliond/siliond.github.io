// Set up the game
const game = new Phaser.Game(500, 500, Phaser.CANVAS, "game-container");

// Set up the keys for controlling the paddles
const keys = game.input.keyboard.addKeys({
    up: Phaser.KeyCode.W,
    down: Phaser.KeyCode.S,
});

// Set up the game state
const gameState = {
    create: function() {
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
        this.menu.events.onInputDown.add(function() {
            // When the user clicks the menu, open a prompt to enter the number of paddles
            const numPaddles = prompt("Enter the number of paddles (2-4):");

            if (numPaddles >= 2 && numPaddles <= 4) {
                // If the user enters a valid number of paddles, start the game
                game.state.start("game", true, false, numPaddles);
            } else {
                // If the user enters an invalid number of paddles, show an error message
            }
        });

        // Set up the paddles
        const numPaddles = 3; // Configurable number of paddles
        this.paddles = game.add.group();
        for (let i = 0; i < numPaddles; i++) {
            const paddle = game.add.graphics(0, 0);
            paddle.beginFill(0x000000); // Set the fill color to black
            paddle.drawRect(
                i * (game.width / numPaddles) + 50, // Center the paddle on its side of the field
                game.height / 2,
                20,
                100
            ); // Draw the paddle as a rectangle
            this.paddles.add(paddle);
        }

        // Set up the ball
        this.ball = game.add.graphics(0, 0);
        this.ball.beginFill(0x000000); // Set the fill color to black
        this.ball.drawCircle(game.width / 2, game.height / 2, 10); // Draw the ball as a circle
        this.ball.body.velocity.x = 100; // Set the initial velocity of the ball
        this.ball.body.velocity.y = 100;
    },

    update: function() {
        // Check for key input and update the position of the paddles
        this.paddles.forEach((paddle) => {
            if (keys.up.isDown) {
                paddle.y -= 5; // Move the paddle up
            }
            if (keys.down.isDown) {
                paddle.y += 5; // Move the paddle down
            }
        });

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