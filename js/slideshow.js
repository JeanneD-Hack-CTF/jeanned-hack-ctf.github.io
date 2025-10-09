document.addEventListener("DOMContentLoaded", function () {
  var carousel = document.querySelector(".carousel");
  var currdeg  = 0;

  // Compute the rotation angle
  var carouselItems = document.querySelectorAll(".item");
  var angle = 360 / carouselItems.length;
  carouselItems.forEach((item) => {
    // Add initial angle for each logo
    item.style.transform = "rotateY(" + currdeg + "deg) translateZ(250px)";
    currdeg += angle;
  });

  // Reset current degree
  currdeg  = 0;

  // Define the rotation for the next or prev logo
  function rotate(direction){
    if(direction == "next"){
      currdeg = currdeg - angle;
    }
    if(direction == "prev"){
      currdeg = currdeg + angle;
    }
    carousel.style.transform = "rotateY("+currdeg+"deg)"
  }

  // Add automatic rotation
  function autoRotate() {
    rotate("next");
    setTimeout(autoRotate, 3000);
  }
  autoRotate();
});