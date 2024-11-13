// header
fetch("header.html")
.then((response) => response.text())
.then((data) => {
    document.querySelector("body").insertAdjacentHTML('afterbegin', data);
        // burguer menu //
        //container
        const buergerSec = document.querySelector("#Options_Burguer");
        // container
        const cont = document.createElement("div");
        cont.classList.add("list");
        // elements
        const home = document.createElement("a");
        home.textContent = "Home";
        home.href = "#";
        const mywork = document.createElement("a");
        mywork.textContent = "Mywork";
        mywork.href= "";
        const services = document.createElement("a");
        services.textContent = "Services";
        services.href = "#";
        const clases = document.createElement("a");
        clases.textContent = "Clases";
        clases.href = "#";
        const beauty = document.createElement("a");
        beauty.textContent = "BeautyTips";
        beauty.href = "#";
        const about = document.createElement("a");
        about.textContent = "About";
        about.href = "#";
        const contact = document.createElement("a");
        contact.textContent = "Contac";
        contact.href = "#";

        //appede elements
        cont.append(home,mywork,services,clases,beauty,about,contact)

        // click event
        const menu = document.querySelector("#action");

        menu.addEventListener("click", () =>{
            buergerSec.classList.toggle("active");
            if(buergerSec.classList.contains("active")){
                buergerSec.innerHTML = " ";
            }
            else{
                buergerSec.append(cont);
            }
        });

        // se the size of the window
        window.addEventListener("resize", () => {
            if(window.innerWidth >= 1200 && !buergerSec.classList.contains("active")){
                buergerSec.innerHTML = " ";
                buergerSec.classList.remove("active");
            }
        });
});
// footer
fetch("footer.html")
.then((response) => response.text())
.then((data) => document.querySelector("body").insertAdjacentHTML('beforeend', data));


// Bootstrap
function loadBootstrap() {
    const bootstrapScript = document.createElement('script');
    bootstrapScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
    bootstrapScript.integrity = "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz";
    bootstrapScript.crossOrigin = "anonymous";
    document.body.appendChild(bootstrapScript);
}
// after page load add Bootstrap
document.addEventListener('DOMContentLoaded', loadBootstrap);




