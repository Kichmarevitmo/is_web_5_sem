document.addEventListener("DOMContentLoaded", function () {
    var currentPage = window.location.href;

    var navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function (link) {
        if (currentPage.includes(link.href)) {
            link.parentNode.classList.add('active');
        }
    });
});