document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.navbar a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            if (link.getAttribute('href').startsWith('#')) {
                event.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Ajusta este valor según sea necesario
                    behavior: 'smooth'
                });
            }
        });
    });
});
