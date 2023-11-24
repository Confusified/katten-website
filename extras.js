const buttons = document.getElementsByClassName("accordion_button");
var i;

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.height === "240px") {
      panel.style.height = "0";
    } else {
      panel.style.height = "240px";
    }
  });
}