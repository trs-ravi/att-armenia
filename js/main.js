$(document).ready(function () {

    const cards = $('.info-card');
    let currentIndex = 2; // Our Land by default

    function setActive(index) {
        cards.removeClass('active');
        cards.eq(index).addClass('active');
    }

    // Initial state
    setActive(currentIndex);

    /* Click on card */
    cards.on('click', function () {
        currentIndex = $(this).index();
        setActive(currentIndex);
    });

    /* Arrow navigation */
    $('.card-arrow.down').on('click', function () {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            setActive(currentIndex);
        }
    });

    $('.card-arrow.up').on('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            setActive(currentIndex);
        }
    });

    /* Mouse wheel navigation */
    $('.left-cards').on('wheel', function (e) {
        e.preventDefault();

        if (e.originalEvent.deltaY > 0 && currentIndex < cards.length - 1) {
            currentIndex++;
        } 
        else if (e.originalEvent.deltaY < 0 && currentIndex > 0) {
            currentIndex--;
        }

        setActive(currentIndex);
    });

    /* Right menu (unchanged) */
    // $('.right-menu a').on('click', function (e) {
    //     e.preventDefault();
    //     alert('Link clicked');
    // });

        $('#hamburger').on('click', function () {
        $('#mainMenu').toggleClass('active');
    });
});









