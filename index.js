// const navToggle = document.querySelector('.toggle');
// const navLinks = document.querySelectorAll('.menu')

// navToggle.addEventListener('click', () => {
//     document.body.classList.toggle('menu-active');
// });

// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         document.body.classList.remove('nav-open');
//     })
// })


$('.toggle').on('click', function() {
	$('.menu').toggleClass('active');
});

$('.nav__link').on('click', function() {
	$('.menu').removeClass('active');
});