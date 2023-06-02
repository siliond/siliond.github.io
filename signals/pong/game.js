// Set up the game state
const gameConfig = {
    type: Phaser.AUTO,
    width: 1600,
    height: 900,
    parent: 'game-container',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },

    scene: {
        create: function() {
            // Set the background color
            this.cameras.main.setBackgroundColor('#000');

            // Set up the keys for controlling the paddles
            this.cursors = {
                up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
                down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
            };

            // Create a group to hold the paddles
            this.paddles = this.add.group();
            let numPaddles = 3; // Configurable number of paddles

            // // Add a menu to allow the user to specify the number of paddles
            // this.menu = this.add.text(
            //     this.width / 2,
            //     this.height / 2,
            //     "Enter the number of paddles:", {
            //         font: "18px Arial",
            //         fill: "#000000",
            //         align: "center",
            //     }
            // );
            // this.menu.anchor.setTo(0.5, 0.5); // Set the pivot point of the menu to its center
            // this.menu.inputEnabled = true; // Enable user input for the menu

            // this.menu.events.onInputDown.add(function() {
            //     // When the user clicks the menu, open a prompt to enter the number of paddles
            //     numPaddles = prompt("Enter the number of paddles (2-4):");

            //     if (numPaddles >= 2 && numPaddles <= 4) {
            //         // If the user enters a valid number of paddles, start the game
            //         // this.state.start("game", true, false, numPaddles);
            //     } else {
            //         // If the user enters an invalid number of paddles, show an error message
            //     }
            // });

            // Create the paddles
            const shapeRadius = 400; // The radius of the geometric shape on which the paddles will move
            const paddleWidth = 20; // The width of the paddles
            const paddleHeight = 100; // The height of the paddles
            for (let i = 0; i < numPaddles; i++) {
                // Calculate the x and y position of the paddle based on the number of sides and the radius of the shape
                const x = game.canvas.width / 2 + shapeRadius * Math.cos(2 * Math.PI * i / numPaddles);
                const y = game.canvas.height / 2 + shapeRadius * Math.sin(2 * Math.PI * i / numPaddles);
                // const paddle = this.add.rectangle(x, y, paddleWidth, paddleHeight, 0xffffff);

                const paddle = this.add.graphics();
                // Set the fill color and draw the paddle as a rectangle
                paddle.fillStyle(0xFFFFFF, 1);
                paddle.fillRect(x, y, paddleWidth, paddleHeight);

                // Set the stroke color and width, and draw the stroke around the paddle
                paddle.lineStyle(2, 0x000000, 1);
                paddle.strokeRect(x, y, paddleWidth, paddleHeight);

                // Create a new Text object
                const text = this.add.text(50, 105, 'S', { fontSize: '30px', fill: '#000000' });

                this.physics.add.existing(paddle);
                paddle.body.setCollideWorldBounds(true);

                this.paddles.add(paddle);
            }

            // Set the paddles to be immovable
            this.physics.add.collider(this.paddles, this.ball, function(paddle, ball) {
                ball.body.setVelocityX(-1 * ball.body.velocity.x);
            }, null, this);

            // Set the paddles to be controlled by the keyboard
            // this.cursors = this.input.keyboard.wwcreateCursorKeys();

            // Create the ball
            this.ball = this.add.graphics();
            this.ball.fillStyle(0xffffff, 1);
            this.ball.fillCircle(400, 300, 20); // The ball will be a circle with radius 20
            this.physics.add.existing(this.ball); // Add the ball to the physics system

            // Set the ball's bouncing properties
            this.ball.body.setBounce(1);
            this.ball.body.setCollideWorldBounds(true);

            // Set the ball's velocity
            this.ball.body.setVelocityX(200);
            this.ball.body.setVelocityY(200);
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
            // this.physics.collide(this.ball, this.paddles, function(ball, paddle) {
            //     // Reverse the ball's x velocity when it collides with a paddle
            //     ball.body.velocity.x *= -1;
            // });
            if (this.ball.x < 0 || this.ball.x > this.width) {
                // Reverse the ball's x velocity when it collides with a side of the field
                this.ball.body.velocity.x *= -1;
            }
            if (this.ball.y < 0 || this.ball.y > this.height) {
                // Reverse the ball's y velocity when it collides with the top or bottom of the field
                this.ball.body.velocity.y *= -1;
            }
        }
    }
};

// Set up the game
var game = new Phaser.Game(gameConfig);