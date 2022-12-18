/*

This code uses the touchstart, touchend, and touchmove events to track the movement of the user's finger on the screen. The dragStart function is called when the user first touches the joystick element, and it sets the initial position of the finger. The dragEnd function is called when the user lifts their finger off the screen, and it resets the initial position. The drag function is called continuously while the user's finger is moving on the screen, and it updates the current position of the finger based on the clientX and clientY properties of the touch event. The setTranslate function is used to update the position of the joystick element on the screen based on the current position of the finger.

You can customize this code to suit your specific needs. For example, you can add constraints to limit the range of movement of the joystick, or you can add logic to interpret the joystick position and perform an action based on it.
*/


const joystick = document.getElementById("joystick");

let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

joystick.addEventListener("touchstart", dragStart);
joystick.addEventListener("touchend", dragEnd);
joystick.addEventListener("touchmove", drag);

function dragStart(e) {
  initialX = e.touches[0].clientX - xOffset;
  initialY = e.touches[0].clientY - yOffset;

  isDragging = true;
}

function dragEnd(e) {
  initialX = currentX;
  initialY = currentY;

  isDragging = false;
}

function drag(e) {
  if (isDragging) {
    e.preventDefault();
    currentX = e.touches[0].clientX - initialX;
    currentY = e.touches[0].clientY - initialY;

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, joystick);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}
