function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

function setupLogoInteraction() {
    console.log("Setting up logo interaction");
    
    document.body.addEventListener('mouseover', function(event) {
      const logoLink = event.target.closest('.logo');
      if (logoLink) {
        console.log("Mouseover event triggered on logo");
        logoLink.textContent = '(source code)';
        logoLink.setAttribute('href', 'https://github.com/DavidG626/resume');
        logoLink.setAttribute('target', '_blank');
      }
    });

    document.body.addEventListener('mouseout', function(event) {
      const logoLink = event.target.closest('.logo');
      if (logoLink) {
        console.log("Mouseout event triggered on logo");
        logoLink.textContent = 'David Gutierrez';
        logoLink.setAttribute('href', '#');
        logoLink.removeAttribute('target');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded event triggered");
    setupLogoInteraction();
  });