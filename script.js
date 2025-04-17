document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader');
    // Always show loading animation on index.html
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 2000);

    // Handle darkening effect before navigation
    document.querySelectorAll('.chapter-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent immediate navigation
            const href = link.getAttribute('href');
            
            // Add fade-out class to body
            document.body.classList.add('fade-out');

            // Navigate after the darkening animation completes
            setTimeout(() => {
                window.location.href = href;
            }, 500); // Match the duration of the fade-out transition
        });
    });
});