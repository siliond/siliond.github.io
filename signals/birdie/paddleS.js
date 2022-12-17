// Create a new Graphics object
const paddle = this.add.graphics();

// Set the fill color and draw the paddle as a rectangle
paddle.fillStyle(0xFFFFFF, 1);
paddle.fillRect(10, 10, 80, 180);

// Set the stroke color and width, and draw the stroke around the paddle
paddle.lineStyle(2, 0x000000, 1);
paddle.strokeRect(10, 10, 80, 180);

// Create a new Text object
const text = this.add.text(50, 105, 'S', { fontSize: '30px', fill: '#000000' });
