// TODO
const options = document.querySelectorAll("a")

options.forEach(option => {
    option.addEventListener("click",() => {
        option.style.borderBottom = "1px solid black"
    })
});