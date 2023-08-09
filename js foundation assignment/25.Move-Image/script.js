const movingImage = document.getElementById("movingImage");

// initial position of the image
let positionX = 10;
let positionY = 10;

function moveImage(event) {
  switch (event.keyCode) {
    case 37 : // Left arrow key
      positionX -= 15;
      break;
    case 38: // Up arrow key
      positionY -= 15;
      break;
    case 39: // Right arrow key
      positionX += 15;
      break;
    case 40: // Down arrow key
      positionY += 15;
      break;
      
    default:
      return;
  }

  // Update the position of the image
  movingImage.style.left = positionX + "px";
  movingImage.style.top = positionY + "px";
}

document.addEventListener("keydown", moveImage);