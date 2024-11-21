// modal video
$(function(){
    $(".js-modal-btn").modalVideo();
});

// email
(function() {
    emailjs.init('2UvQwli4N-kG1yMxe');
})();

window.onload = function() {
    document.querySelector('.form-info').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_ciccc', 'template_0gibnm4', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
            document.querySelector('.form-info').reset()
    });
}

