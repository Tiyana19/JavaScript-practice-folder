let count = document.getElementById("count");
let increment = document.getElementsByClassName("increment-btn")[0];
let save = document.getElementsByClassName("save-btn")[0];
let entries = document.getElementsByClassName("entries")[0];

increment.addEventListener("click", () => {
  count.textContent = Number(count.textContent) + 1;
});

// why use textContent instead of innerText 👇
// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#differences_from_innertext

save.addEventListener("click", () => {
  if (count.innerText == 0) {
  } else {
    entries.textContent = entries.textContent + " " + count.textContent + " - ";
    count.textContent = 0;
  }
});
