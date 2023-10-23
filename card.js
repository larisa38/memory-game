export default class Card {

  _open = false
  _success = false

  constructor(container, number, flip) {
    this.card = document.createElement("div");
    this.card.classList.add("card", "card_item");
    this.number = number;

    this.card.addEventListener("click", () => {
      if (this._open == false && this._success == false) {
        this.open = true;
        flip(this);
      }
    });
    container.append(this.card);
  }

  set open(value) {
    this._open = value;
    if (value) {
      this.card.classList.add("open")
      this.card.innerHTML = this.number;
    } else {
      this.card.classList.remove("open");
      this.card.innerHTML = '';
    }
  }

  get open() {
    return this._open;
  }

  set success(value) {
    this._success = value;
    value ? this.card.classList.add("success") : this.card.classList.remove("success");
  }

  get success() {
    return this._success;
  }
}
