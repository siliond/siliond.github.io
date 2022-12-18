/*
In this code, we have added a line element to the HTML and accessed it using JavaScript. We have also added a new function called drag that is called continuously while the user's finger is moving on the screen. The drag function calculates the angle of the line based on the current position of the finger using the atan2 function and the clientX and clientY properties of the touch event. It then rotates the line to match the angle using the rotate function of the transform property.
*/


const joystick = document.getElementById("joystick");
const line = document.getElementById("line");

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

  // Reset the line to the center of the joystick
  line.style.transform = "rotate(0deg)";
}

function drag(e) {
  if (isDragging) {
    e.preventDefault();
    currentX = e.touches[0].clientX - initialX;
    currentY = e.touches[0].clientY - initialY;

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, joystick);

    // Calculate the angle of the line based on the current position of the finger
    let angle = Math.atan2(currentY, currentX) * 180 / Math.PI;

    // Rotate the line to match the angle
    line.style.transform = "rotate(" + angle + "deg)";
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}
