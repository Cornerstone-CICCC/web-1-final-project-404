// header
fetch("header.html")
.then((response) => response.text())
.then((data) => document.querySelector("body").insertAdjacentHTML('afterbegin', data));
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