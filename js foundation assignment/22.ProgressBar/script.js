// Function to update the progress bar based on the user's scroll position
function updateProgressBar() {
  const progressBar = document.getElementById("progressBar");

  // Calculate the scroll progress as a percentage
  const scrollPosition = window.scrollY;
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollPosition / totalHeight) * 100;

  // Update the width of the progress bar
  progressBar.style.width = progress + "%";
}

// Add a scroll event listener to update the progress bar when the user scrolls
window.addEventListener("scroll", updateProgressBar);