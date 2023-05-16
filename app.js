const contents = document.querySelector(".cards");
const nextButton = document.querySelector("#nextButton");
const prevButton = document.querySelector("#prevButton");
const indicator = document.querySelector(".indicator");
let cards = contents.querySelectorAll("div");
let slide = true;
let id;
let card = Array.from(cards);

for (f = 0; f < card.length; f++) {
  const indicatorBtn = document.createElement("button");
  indicatorBtn.classList.add("indicatorButton");
  indicator.appendChild(indicatorBtn);
}
let indicatorButtons = indicator.querySelectorAll("button");
let indicatorButton = Array.from(indicatorButtons);
console.log(indicatorButton);
shuffle();
initiateSlideshow();
function shuffle() {
  for (i = 0; i < card.length; i++) {
    switch (i) {
      case 0:
        card[i].classList.remove("card-center", "card-right", "card-hidden");
        card[i].classList.add("card-left");
        continue;

      case 1:
        card[i].classList.remove("card-left", "card-right");
        card[i].classList.add("card-center");
        continue;

      case 2:
        card[i].classList.remove("card-center", "card-left", "card-hidden");
        card[i].classList.add("card-right");
        continue;

      default:
        card[i].classList.remove("card-left", "card-right");
        card[i].classList.add("card-hidden");
    }
  }
  indicatorButtonSelect();
}

function indicatorButtonSelect() {
  for (x = 0; x < card.length; x++) {
    if (card[x].classList.contains("card-center")) {
      indicatorButton[x].classList.add("current");
    }
  }
}

prevButton.addEventListener("click", () => {
  hold = card.pop();
  card.unshift(hold);
  shuffle();
});
nextButton.addEventListener("click", next);

function initiateSlideshow() {
  controller.innerHTML = "STOP";
  id = setInterval(next, 2000);
}
controller.addEventListener("click", () => {
  slide = !slide;
  if (slide) {
    initiateSlideshow();
  } else {
    controller.innerHTML = "START";
    clearInterval(id);
  }
});
function next() {
  console.log(card);  
  hold = card.shift();
  card.push(hold);
  shuffle();
  console.log(card);
}
