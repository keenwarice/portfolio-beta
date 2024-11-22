let currentSlide = 0;
const panels = document.querySelectorAll('.panel');
const totalPanels = panels.length;

function changeSlide(direction) {
    panels[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + totalPanels) % totalPanels;
    panels[currentSlide].classList.add('active');
    document.getElementById('carousel').style.transform = `rotateY(${currentSlide * -60}deg)`;
}

function scrollToProjects() {
    document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth' });
}

function generateParticles() {
    const particleContainer = document.querySelector('.particles');
    for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particleContainer.appendChild(particle);
    }
}

window.onload = function() {
    generateParticles();
};