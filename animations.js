// Animación de entrada del logo
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('header .logo');
    const tagline = document.querySelector('.tagline');
    const cards = document.querySelectorAll('.card');
    const button = document.querySelector('.btn-contract');

    // Animación de entrada del logo
    if (logo) {
        logo.style.opacity = '0';
        logo.style.animation = 'slideInDown 0.8s ease-out forwards';
    }

    // Animación de entrada del tagline
    if (tagline) {
        tagline.style.opacity = '0';
        tagline.style.animation = 'fadeIn 1s ease-out 0.3s forwards';
    }

    // Animación de entrada de las tarjetas con efecto stagger
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `slideInLeft 0.6s ease-out ${0.5 + index * 0.2}s forwards`;
    });

    // Animación de entrada del botón
    if (button) {
        button.style.opacity = '0';
        button.style.animation = 'fadeIn 0.8s ease-out 1.2s forwards';
        
        // Efecto de brillo en el botón
        button.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.6)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    }

    // Animación de entrada del about-wrapper
    const aboutWrapper = document.querySelector('.about-wrapper');
    if (aboutWrapper) {
        aboutWrapper.style.opacity = '0';
        aboutWrapper.style.animation = 'slideInUp 0.8s ease-out 0.8s forwards';
    }

    // Efecto hover en las tarjetas
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.boxShadow = '0 4px 12px rgba(255, 255, 255, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.boxShadow = 'none';
        });
    });
});

// Animación en scroll (opcional)
window.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            card.style.opacity = '1';
        }
    });
});
