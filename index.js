const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	
	
	burger.addEventListener('click', ()=> {
		// Toggle nav
		nav.classList.toggle('nav-active');
		
		
		// Animate links
		navLinks.forEach((link, index) => {
			if(link.style.animation){
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
			}
		});

		// Burger animation

		burger.classList.toggle('toggle');
	});

	nav.addEventListener('click', ()=> {
		nav.classList.remove('nav-active');
		burger.classList.toggle('toggle');
	});
}


const app = () => {
	navSlide();
}

app();
