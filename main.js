import Card from "./card.js";
import AmazingCard from "./amazing-card.js";

function startGame(container, count) {
  const startButton = document.getElementById("play_again");
  startButton.hidden = true;
  const btnNumber = document.getElementById('one');
  const btnPicture = document.getElementById('two');
  const titleChoose = document.getElementById('choose');
  btnNumber.hidden = false;
  btnPicture.hidden = false;

  let cardsNumberArr = [],
    cardsArr = [],
    firstCard = null,
    secondCard = null;

  for (let i = 1; i <= count / 2; i++) {
    cardsNumberArr.push(i);
    cardsNumberArr.push(i);
  }

  cardsNumberArr.sort(() => Math.random() - 0.5);

  btnNumber.addEventListener('click', () => {
    for (const cardNumber of cardsNumberArr) {
      cardsArr.push(new Card(container, cardNumber, flip));
      btnNumber.hidden = true;
      btnPicture.hidden = true;
      titleChoose.hidden = true;
    }
  });

  btnPicture.addEventListener('click', () => {
    for (const cardNumber of cardsNumberArr) {
      cardsArr.push(new  AmazingCard(container, cardNumber, flip));
      btnNumber.hidden = true;
      btnPicture.hidden = true;
      titleChoose.hidden = true;
    }

  });

  function flip(card) {
    if (firstCard !== null && secondCard !== null) {
      if (firstCard.number !== secondCard.number) {
        console.log(firstCard);
        firstCard.open = false;
        secondCard.open = false;
        firstCard = null;
        secondCard = null;
      }
    }

    if (firstCard == null) {
      firstCard = card;
    } else {
      if (secondCard == null) {
        secondCard = card;
      }
    }

    if (firstCard !== null && secondCard !== null) {
      if (firstCard.number === secondCard.number) {
        firstCard.success = true;
        secondCard.success = true;
        firstCard = null;
        secondCard = null;
      }
    }

    if (
      document.querySelectorAll(".card.success").length ===
      cardsNumberArr.length
    ) {
      startButton.hidden = false;
      startButton.addEventListener("click", () => {

        container.innerHTML = "";
        cardsNumberArr = [];
        cardsArr = [];
        firstCard = null;
        secondCard = null;
        location.reload();
        startGame(container, count);
      });
    }
  }
}
startGame(document.getElementById("game_container"), 12);
