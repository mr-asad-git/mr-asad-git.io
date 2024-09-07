window.onscroll = function () {
  let navbar = document.querySelector('.navbar');
  let logo = document.querySelector('.logo-img');
  let container = document.querySelector('.container');

  if (window.scrollY > 50) {
    // Change navbar background color on scroll
    navbar.style.backgroundColor = "#fff";
    navbar.style.boxShadow = "0px 12px 20px rgba(0, 0, 0, 0.1)";

    // Reduce the size of the logo
    logo.style.transform = "scale(0.8)";

    // Before positioning
    container.style.padding = "18px";
  } else {
    // Reset navbar background color when scrolling back to the top
    navbar.style.backgroundColor = "transparent";
    navbar.style.transition = "0.3s ease";

    // Reset the logo size
    logo.style.transform = "scale(1)";
    logo.style.transition = "0.3s ease";

    // Reset the padding of container
    container.style.padding = "22px";
    container.style.transition = "0.3s ease";

    //Reset the boxShadow
    navbar.style.boxShadow = "0px 12px 20px rgba(0, 0, 0, 0.0)";
  }
};

function updateButtonText() {
  let paragraph = document.querySelector('.preorder-button p');

  // Check if the screen width is 768px or less (typical for mobile devices)
  if (window.innerWidth <= 1080) {
    paragraph.textContent = "Order"; // Change text for mobile devices
  } else {
    paragraph.textContent = "Pre-order Now"; // Change text for larger screens (like laptops)
  }
}

// Call the function initially to set the correct text
updateButtonText();

// Add an event listener to update text when the window is resized
window.addEventListener('resize', updateButtonText);
