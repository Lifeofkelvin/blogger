const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".navs");
const navLinks = document.querySelector(".dropdown");
const subMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("close-menu");

  menu.classList.toggle("active");
});

document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', () => {
            // Close all other dropdowns
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    const otherParent = otherDropdown.parentElement;
                    const otherNavLinks = otherParent.querySelector('.nav-links');
                    otherNavLinks.style.display = 'none';
                }
            });

            // Toggle the clicked dropdown
            const parent = dropdown.parentElement;
            const navLinks = parent.querySelector('.nav-links');
            navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'flex';
        });
    });

    // Close dropdowns if clicked outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.product')) {
            dropdowns.forEach(dropdown => {
                const parent = dropdown.parentElement;
                const navLinks = parent.querySelector('.nav-links');
                navLinks.style.display = 'none';
            });
        }
    });
});


