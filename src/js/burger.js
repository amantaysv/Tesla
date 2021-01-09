document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.burger').classList.toggle('burger_active');
    document.querySelector('.nav').classList.toggle('nav_active');
});