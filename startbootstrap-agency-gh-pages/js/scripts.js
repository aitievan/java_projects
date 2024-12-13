/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 
window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Function to fetch a random quote
    function fetchQuote() {
        //const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const apiUrl = "https://zenquotes.io/api/random";

        fetch(proxyUrl + apiUrl)
            .then(response => response.json())
            .then(data => {
                const quote = data[0].q; // Text of the quote
                const author = data[0].a; // Author of the quote

                // Update the content on the page
                const quoteText = document.getElementById('quote-text');
                const quoteAuthor = document.getElementById('quote-author');

                quoteText.textContent = `"${quote}"`;
                quoteAuthor.textContent = `- ${author}`;
            })
            .catch(error => {
                console.error("Error fetching quote:", error);
                const quoteText = document.getElementById('quote-text');
                const quoteAuthor = document.getElementById('quote-author');

                quoteText.textContent = "Не удалось загрузить цитату. Попробуйте позже.";
                quoteAuthor.textContent = "";
            });
    }

    // Add event listener to the "Get New Quote" button
    const newQuoteBtn = document.getElementById('new-quote-btn');
    if (newQuoteBtn) {
        newQuoteBtn.addEventListener('click', fetchQuote);
    }

    // Load the first quote when the page is loaded
    fetchQuote();
});
