function toggleMapVisibility() {
  const map = document.getElementById("eventLocation");
  var isVisible = (map.style.display == "inline");
  map.style.display = isVisible ? "none" : "inline";
}