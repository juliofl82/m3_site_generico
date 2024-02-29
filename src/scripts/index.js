document.addEventListener('DOMContentLoaded', function () {

    var modalOpenButtons = document.querySelectorAll('.modal-open-button');
    var modal = document.getElementById('modal');
    var closeModalButton = document.querySelector('.close-button');

    modalOpenButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            modal.style.display = 'block';
        });
    });

    closeModalButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});


  
