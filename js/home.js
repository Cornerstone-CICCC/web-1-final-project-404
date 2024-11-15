
(function() {
    emailjs.init('2UvQwli4N-kG1yMxe');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_ciccc', 'template_0gibnm4', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}

// catch the size and then add the element 
window.addEventListener("resize", () =>{
    if(window.innerWidth < 1200){
        console.log(true)
    }
})