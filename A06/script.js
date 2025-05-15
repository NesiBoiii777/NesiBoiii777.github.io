var mode = "light";
function changeMode(){
  var body = document.getElementById("body");
  var colorBtn = document.getElementById("colorBtn");
  mode = mode == "light" ? "dark" : "light";

  var btnText = mode == "dark" ? "Light Mode" : "Dark Mode";
  var btnClass = mode == "dark" ? "btn-light" : "btn-dark";

  colorBtn.classList.remove("btn-light");
  colorBtn.classList.remove("btn-dark");
  colorBtn.classList.add(btnClass);
  colorBtn.innerHTML = btnText;

  colorBtn.style.color = mode == "dark" ? "black" : "white";

  body.setAttribute("data-bs-theme", mode);
}