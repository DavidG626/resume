function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function() {
    const logoDiv = document.querySelector('.logo');
    const logoLink = logoDiv.querySelector('a');
    const originalText = logoLink.textContent;
    const originalHref = logoLink.getAttribute('href');

    logoDiv.addEventListener('mouseover', function() {
        logoLink.textContent = '(source code)';
        logoLink.setAttribute('href', 'https://github.com/DavidG626/resume');
        logoLink.setAttribute('target', '_blank');
    });

    logoDiv.addEventListener('mouseout', function() {
        logoLink.textContent = originalText;
        logoLink.setAttribute('href', originalHref);
        logoLink.removeAttribute('target');
    });
});
   



