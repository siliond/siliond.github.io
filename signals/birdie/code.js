// Set up the game
var game = new Phaser.Game(400, 600, Phaser.AUTO, 'gameDiv');

// Add the 'mainState' state to the game
game.state.add('mainState', mainState);

// Start the 'mainState' state
game.state.start('mainState');

// The main game state
var mainState = {

    // Function called first to load all the assets
    preload: function() {
        // Set up the scaling of the game
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.scale.setScreenSize(true);

        // Load the sprite sheet for the player
        game.load.spritesheet('player', 'assets/bird.png', 32, 32);
    },

    // Function called after 'preload' to set up the game
    create: function() {
        // Start the physics engine
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // Add the player to the game
        this.player = game.add.sprite(32, game.world.height - 150, 'player');

        // Enable physics for the player
        game.physics.arcade.enable(this.player);

        // Add gravity to the player
        this.player.body.gravity.y = 1000;

        // Call the 'jump' function when the space key is pressed
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.jump, this);

        // Enable touch input
        game.input.touch.start();
    },

    // Function called 60 times per second
    update: function() {
        // If the player is out of the world (too high or too low), call the 'restartGame' function
        if (this.player.y < 0 || this.player.y > game.world.height)
            this.restartGame();
    },

    // Make the player jump
    jump: function() {
        // Add a vertical velocity to the player
        this.player.body.velocity.y = -350;
    },

    // Restart the game
    restartGame: function() {
        // Start the 'mainState' state, which restarts the game
        game.state.start('mainState');
    }
};