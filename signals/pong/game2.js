const config = {
    type: Phaser.CANVAS,
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: '#000000',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const numPaddles = 3;
let game = new Phaser.Game(config);
let paddles = [];
let ball;

let movementKeys = {
    0: {
        upKey: Phaser.Input.Keyboard.KeyCodes.W,
        downKey: Phaser.Input.Keyboard.KeyCodes.S
    },
    1: {
        upKey: Phaser.Input.Keyboard.KeyCodes.UP,
        downKey: Phaser.Input.Keyboard.KeyCodes.DOWN
    },
    2: {
        upKey: Phaser.Input.Keyboard.KeyCodes.O,
        downKey: Phaser.Input.Keyboard.KeyCodes.L
    }
};


function preload() {
    // Preload any assets you need here
}

function create() {
    // Create the ball
    ball = this.physics.add.sprite(config.width / 2, config.height / 2, null);
    ball.setCircle(10, 0, 0, 0xffffff);
    ball.setCollideWorldBounds(true);
    ball.setBounce(1);

    // Create the paddles
    for (let i = 0; i < numPaddles; i++) {
        let paddle = this.add.rectangle(0, 0, 20, 100, 0xffffff);

        // Set the paddle movement keys
        Object.assign(paddle, movementKeys[i]);

        paddles.push(paddle);
    }

    // Calculate the size and position of each paddle
    let paddleWidth = 20;
    let paddleHeight = config.height / numPaddles;
    let paddleSpacing = (config.height - (paddleHeight * numPaddles)) / (numPaddles + 1);

    // Position the paddles
    for (let i = 0; i < numPaddles; i++) {
        let x, y;
        if (i === 0) {
            // Position paddle on left side
            x = 20;
            y = (i + 1) * paddleSpacing + i * paddleHeight;
        } else if (i === numPaddles - 1) {
            // Position paddle on right side
            x = config.width - 20;
            y = (i + 1) * paddleSpacing + i * paddleHeight;
        } else {
            // Position paddle on top or bottom
            x = config.width / 2;
            y = (i + 1) * paddleSpacing + i * paddleHeight;
        }
        paddles[i].setPosition(x, y);
    }
}

function update() {
    // Update the paddle positions based on the movement keys
    paddles.forEach(paddle => {
        if (this.input.keyboard.checkDown(paddle.upKey)) {
            paddle.y -= 5;
        }
        if (this.input.keyboard.checkDown(paddle.downKey)) {
            paddle.y += 5;
        }
    });

    // Check for ball collision with paddles and walls
    this.physics.collide(ball, paddles, ballHitPaddle);
    this.physics.collide(ball, [0, config.width], ballHitWall);
    this.physics.collide(ball, [0, config.height], ballHitWall);
}

function ballHitPaddle(ball, paddle) {
    // Bounce the ball off the paddle
    ball.setVelocityX(-(ball.body.velocity.x));
}

function ballHitWall(ball, wall) {
    // Bounce the ball off the wall
    ball.setVelocityY(-(ball.body.velocity.y));
}