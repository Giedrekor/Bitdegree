function flash() {
  const text = document.getElementById("mytext");
  text.style.color = text.style.color == "red" ? "green" : "red";
}

let newColor = setInterval(flash, 300);