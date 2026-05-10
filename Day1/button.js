const bluebtn = document.getElementById("bluebtn");
const redbtn = document.getElementById("redbtn");
const greenbtn = document.getElementById("greenbtn");
const resetbtn = document.getElementById("resetbtn");

bluebtn.addEventListener("click", () => {
    document.body.style.backgroundColor="blue"
})
redbtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "red";
});
greenbtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "green";
});
resetbtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
});