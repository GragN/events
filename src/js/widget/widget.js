export default class Widget {
    constructor(element) {
      this.click = this.click.bind(this)
      this.element = element
      this.counter = [0, 0]
      this.item = this.element.querySelectorAll('.field-item')
      this.points1 = 0
      this.points2 = 0
}

getRandomInt() {
    const number = Math.floor(Math.random() * this.element.querySelectorAll('.field-item').length)
    if (number != this.counter[0]) {
        this.counter[1] = this.counter[0]
        this.counter[0] = number
        return this.counter
    } else {
        return this.getRandomInt()
    }
  }

move() {
    this.getRandomInt()
    this.item[this.counter[0]].style.backgroundImage = 'url("image.png")'
    this.item[this.counter[1]].style.backgroundImage = ""
    this.item[this.counter[0]].addEventListener('click', this.click)
    this.item[this.counter[1]].removeEventListener('click', this.click)
    this.points1 += 1
}

click(e) {
  this.points2 += 1
  this.item[this.counter[0]].style.backgroundImage = ""
}
}
