let message = document.getElementsByClassName("person")[0];
let count = document.getElementById("count");
let increment = document.getElementsByClassName("increment-btn")[0];

increment.addEventListener("click", () => {
  count.innerText = Number(count.innerText) + 1;
});
