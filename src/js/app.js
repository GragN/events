import Widget from "./widget/widget";
import image from "../img/image.png"

document.addEventListener('DOMContentLoaded', () => {
    const widget = new Widget(document.querySelector('.field'))
    const interval = setInterval(() => {
        if ((widget.points1 - widget.points2) < 5) {
            widget.move()
        } else {
            clearInterval(interval)
            alert(`игра окончена, набрано очков ${widget.points2}`)
        }
    }, 1000)
})