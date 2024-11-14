const buttons = document.querySelectorAll("h5");

// sections //
catalogD = document.querySelector(".desktop_catalog");
catalogP = document.querySelector(".phone");
// phone
const makeup = document.querySelector(".makeup");
const hair = document.querySelector(".hair");
// desktop
const makeupD = document.querySelector(".makeup_D");
const hairD = document.querySelector(".hair_D");


// add evento for resize
window.addEventListener("resize", () => {
    if(window.innerWidth > 1200){
        catalogD.style.display = "grid";
        catalogP.style.display = "none";
    }
    if(window.innerWidth < 1200){
        catalogD.style.display = "none";
        catalogP.style.display = "grid";
        
    }
})

// if opened first in phone
if(window.innerWidth < 1200){
    catalogD.style.display = "none";
    catalogP.style.display = "grid";
}

// add event listeners to the buttons
buttons.forEach(button => { 
    button.addEventListener("click", () =>{
        if(button.textContent == "Makeup"){
            button.classList.remove("active");
            buttons[1].classList.add("active");
            // images //
                if(makeupD.classList.contains("hide")){
                    makeupD.classList.add("show");
                    makeupD.classList.remove("hide");
                    hairD.classList.add("hide");
                    makeup.classList.add("show");
                    makeup.classList.remove("hide");
                    hair.classList.add("hide");
                }
            
        }
        else if(button.textContent == "Hairstyle"){
            button.classList.remove("active");
            buttons[0].classList.add("active");
            // images //
                if(hairD.classList.contains("hide")){
                    hairD.classList.remove("hide");
                    makeupD.classList.add("hide");
                    makeupD.classList.remove("show");
                    hair.classList.remove("hide");
                    makeup.classList.add("hide");
                    makeup.classList.remove("show")
                }
        }
    })
});