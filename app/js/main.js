document.addEventListener('DOMContentLoaded', () => {
    // Toggle modo oscuro
    const darkModeToggle = document.getElementById('darkModeToggle');
    const html = document.documentElement;

    // Cargar preferencia guardada
    const darkMode = localStorage.getItem('darkMode') === 'true';
    html.classList.toggle('dark', darkMode);

    darkModeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        localStorage.setItem('darkMode', html.classList.contains('dark'));
    });

    // Animación de entrada para los enlaces
    const links = document.querySelectorAll('main a');
    links.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
    });

    // Contador de clicks
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const clicks = parseInt(localStorage.getItem(`clicks_${link.href}`)) || 0;
            localStorage.setItem(`clicks_${link.href}`, clicks + 1);
            
            // Efecto visual del click
            link.style.transform = 'scale(0.95)';
            setTimeout(() => {
                link.style.transform = 'scale(1)';
                window.location.href = link.href;
            }, 150);
        });
    });
}); 