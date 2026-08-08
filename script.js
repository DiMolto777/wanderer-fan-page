/* ===================== SISTEMA DE PESTAÑAS ===================== */
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.tab-section');

function activateTab(id) {
  // Quita "active" de todos los links y secciones
  navLinks.forEach(link => link.classList.remove('active'));
  sections.forEach(sec => sec.classList.remove('active-section'));

  // Activa el link y la sección que coinciden con el id
  document.querySelector(`.nav-link[href="#${id}"]`).classList.add('active');
  document.getElementById(id).classList.add('active-section');
}

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // evita el salto brusco del navegador
    const id = link.getAttribute('href').substring(1); // quita el "#"
    activateTab(id);
  });
});

// Al cargar la página, muestra "Inicio" por defecto
activateTab('inicio');

/* ===================== CARRUSEL (solo en la sección Inicio) ===================== */
const track = document.getElementById('carouselTrack');
const slides = track.children;
const dotsContainer = document.getElementById('dots');
let index = 0;

for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
}
const dots = dotsContainer.children;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
  for (let d of dots) d.classList.remove('active');
  dots[index].classList.add('active');
}

function moveSlide(dir) {
  index = (index + dir + slides.length) % slides.length;
  updateCarousel();
}

function goToSlide(i) {
  index = i;
  updateCarousel();
}

setInterval(() => moveSlide(1), 4000);
