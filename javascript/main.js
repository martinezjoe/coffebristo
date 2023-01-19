// Loader

onload = () => {
    const load = document.getElementById('load');

    setTimeout(() => {
        load.style.display = 'none'
    }, 2500)
}


// -----------------------------------------------------
// Mostrar menu 

const navMenu = document.getElementById('nav-menu');

const navClose = document.getElementById('nav-close'); 

const navToggle = document.getElementById('nav-toggle');

    

// Usamos el condicional para validar si la constante existe 
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
};

// Para esconder el menú 

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
};

//----------------------------------------------------

// Eliminamos el menu en movil, esto es que cuando le damos click a un enlace, automaticamente el menu se cierra

const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(link=> link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
}));

// -------------------------------------------------

// Cambiar el color del backgroud de la barra de navegacion

const scrollHeader = () =>{
    const header = document.getElementById('header');
    // Cuando la vista supere 50 vh, entonces se cambia el color del background de la barra de nav.
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header');
};


window.addEventListener('scroll', scrollHeader);


// ----------------------------------------------

// Mixitup Filter Portfolio

let mixerProducts = mixitup('.products__content', {
    selectors: {
        target: '.products__card'
    },
    animation: {
        duration: 300
    }
});

// Filtro por defecto de los productos 

mixerProducts.filter('.orders')


// Link active work  

const linkProducts = document.querySelectorAll('.products__item');

function activeWork() {
    linkProducts.forEach(link => {
        link.classList.remove('active-products');
    });
    this.classList.add('active-products');
};

linkProducts.forEach((link) => {
    link.addEventListener('click', activeWork);
});

// ----------------------------------------------------------

// Mostrar el Scroll Up

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up');
    // Cuando el scroll sea mayor a 350 vh se mostrara el Scroll Up
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

// --------------------------------------------------------------------

// Cambiar el color del link del nav correspondiente a la seccion que ve el usario 

const sections = document.querySelectorAll('section[id]');
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset;

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link');
		}else{
			sectionsClass.classList.remove('active-link');
		}                                                    
	});
};

window.addEventListener('scroll', scrollActive);