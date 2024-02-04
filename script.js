/*****Card flip*****/
let flop = document.querySelector(".main-photo");

flop.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("hop");
});



/*****Hamburger Menu*****/
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

/*****Photogallery*****/
document.querySelector('.show-more').addEventListener('click', function() {
    document.querySelectorAll('.hide').forEach(function(item, index) {
        if (index > 2) {
            item.style.display = 'inline-block';
        }
    });
    document.querySelector('.show-more').style.display = 'none';
    document.querySelector('.show-less').style.display = 'inline-block';
});

document.querySelector('.show-less').addEventListener('click', function() {
    document.querySelectorAll('.photo-gallery a').forEach(function(item, index) {
        if (index > 2) {
            item.style.display = 'none';
        }
    });
    document.querySelector('.show-more').style.display = 'inline-block';
    document.querySelector('.show-less').style.display = 'none';
});