// Create navigation HTML directly in JavaScript to avoid CORS issues
const navHTML = `
<nav class="navbar">
    <div class="nav-container">
        <a href="index.html" class="nav-brand">Abolfazl Mohammadi</a>
        <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <ul class="nav-menu" id="navMenu">
            <li><a href="index.html" class="nav-link">Home</a></li>
            <li><a href="cv.html" class="nav-link">CV</a></li>
            <li><a href="projects.html" class="nav-link">Projects</a></li>
            <li><a href="transcript.html" class="nav-link">Transcript</a></li>
            <li><a href="gallery.html" class="nav-link">Gallery</a></li>
        </ul>
    </div>
</nav>
`;

// Insert navigation HTML
document.getElementById('nav-placeholder').innerHTML = navHTML;

// Highlight active page in navigation
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.style.color = '#3498db';
        link.style.fontWeight = 'bold';
    }
});

// Mobile menu toggle functionality
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});