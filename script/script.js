function togglePopup(id) {
  var popup = document.getElementById("popup-" + id);
  if (popup.style.display === "none" || popup.style.display === "") {
    popup.style.display = "block";
  } else {
    popup.style.display = "none";
  }
}
