const signupbtn = document.getElementById("signupbtn");

const loginbtn = document.getElementById("loginbtn");

signupbtn.addEventListener("click", function () {
  const x = document.getElementById("suhideshow");
  const y = document.getElementById("lihideshow");
  x.style.display = "block";
  y.style.display = "none";
});

loginbtn.addEventListener("click", function () {
  const x = document.getElementById("suhideshow");
  const y = document.getElementById("lihideshow");
  y.style.display = "block";
  x.style.display = "none";
});
