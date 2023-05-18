const contents = document.querySelector(".cards");
const nextButton = document.querySelector("#nextButton");
const prevButton = document.querySelector("#prevButton");
const indicator = document.querySelector(".indicator");
let cards = contents.querySelectorAll("div");
let controller = document.querySelector("#controller");
let play = controller.querySelector("#play");
let pause = controller.querySelector("#pause");
let slide = true;
let id, record = 0;
let card = Array.from(cards);

for (f = 0; f < card.length; f++) {
  const indicatorBtn = document.createElement("button");
  indicatorBtn.classList.add("indicatorButton");
  indicator.appendChild(indicatorBtn);
}
let indicatorButtons = indicator.querySelectorAll("button");
let indicatorButton = Array.from(indicatorButtons);
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
  const contents = document.querySelector(".cards");
  let cards = contents.querySelectorAll("div");
  let card = Array.from(cards);

  if (indicatorButton[record].classList.contains("current"))
    indicatorButton[record].classList.remove("current");

  for (x = 0; x < card.length; x++) {
    if (card[x].classList.contains("card-center")) {
      indicatorButton[x].classList.add("current");
      record = x;
      break;
    }
  }
}

prevButton.addEventListener("click", () => {
  if(slide) {
    clearInterval(id);
  }
  hold = card.pop();
  card.unshift(hold);
  shuffle();
  initiateSlideshow();
});
nextButton.addEventListener("click", () => {
  if(slide) {
    clearInterval(id);
  }
  next();
  initiateSlideshow();
});

function initiateSlideshow() {
  
  id = setInterval(next, 5000);
}
controller.addEventListener("click", () => {
  slide = !slide;
  if (slide) {
    pause.classList.toggle("hidden");
    play.classList.toggle("hidden");
    initiateSlideshow();
  } else {
    pause.classList.toggle("hidden");
    play.classList.toggle("hidden");
    clearInterval(id);
  }
});
function next() {
  hold = card.shift();
  card.push(hold);
  shuffle();
}