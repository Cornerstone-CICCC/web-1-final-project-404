const buttons = document.querySelectorAll("h5");

const makeup = document.querySelector(".makeup");
const hair = document.querySelector(".hair");

// add event listeners to the buttons
buttons.forEach(button => { 
    button.addEventListener("click", () =>{
        if(button.textContent == "Makeup"){
            button.classList.remove("active");
            buttons[1].classList.add("active");
            // images //
            if(makeup.classList.contains("hide")){
                makeup.classList.add("show")
                makeup.classList.remove("hide")
                hair.classList.add("hide");
            }
            
        }
        else if(button.textContent == "Hairstyle"){
            button.classList.remove("active");
            buttons[0].classList.add("active");
            // images //
            if(hair.classList.contains("hide")){
                hair.classList.remove("hide");
                makeup.classList.add("hide")
                makeup.classList.remove("show")
            }
        }
    })
});