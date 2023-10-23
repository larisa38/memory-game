import Card from "./card.js";

export default class AmazingCard extends Card {
  constructor(container, number, flip) {
    super(container, number, flip);
    this.cardNumber = this.number;
    this._success = false;
  }

  set cardNumber(value) {
    const cardsImgArray = [
      './img/1.jpg',
      './img/2.jpg',
      './img/3.jpg',
      './img/4.jpg',
      './img/5.jpg',
      './img/6.png',
      './img/7.jpg',
      './img/8.jpg',
      './img/9.jpg',
      './img/10.jpg',
      './img/11.jpg',
      './img/12.jpg',
      './img/13.jpg',
      './img/14.jpg',
      './img/image1.jpg',
   ];
    const img = document.createElement('img');
    img.src = cardsImgArray[value - 1];
    img.onerror = function() {
      img.setAttribute('src', './img/default.jpg');
      img.style.width = '105%';
      img.setAttribute('alt', 'К сожалению картинка не загрузилась. Попробуйте позже');
    };
    this.card.innerHTML = "";
    this.card.appendChild(img);
    img.style.display = 'none';
  }
  get cardNumber() {
    return this.cardNumber;
  }

  set open(value) {
    this._open = value;
    if (value) {
      this.card.classList.add("open");
      this.card.firstChild.style.display = 'block';
    } else {
      this.card.classList.remove("open");
      this.card.firstChild.style.display = 'none';
    }
  }
  get open() {
    return this._open;
  }
}
