let button = document.querySelector(".btn")

function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);

    return `rgb(${val1}, ${val2}, ${val3})`
}

button.addEventListener("click", () => {
    document.querySelector(".box").innerHTML = "Click again and again to keep changing colors"
    document.body.style.backgroundColor = getRandomColor()
    document.body.style.color = getRandomColor()
    document.body.style.transition = "all 1s ease"
})