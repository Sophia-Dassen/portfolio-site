const navbar =
    document.querySelector('.top-navbar');

const floatingTocButton =
    document.querySelector('.floating-toc-button');

let lastScrollY =
    window.scrollY;

let navbarVisible =
    true;

let downScrollAccumulated =
    0;

window.addEventListener('scroll', () => {

    const currentScrollY =
    window.scrollY;

    const difference =
    currentScrollY - lastScrollY;

    // SCROLLING DOWN
    if (difference > 0) {

    downScrollAccumulated += difference;

    if (
        downScrollAccumulated > 20 &&
        navbarVisible
    ) {

        navbar.classList.add(
        'top-navbar-hidden'
        );

        floatingTocButton.classList.add(
        'floating-toc-button-visible'
        );

        navbarVisible = false;
    }

    }

    // SCROLLING UP
    else if (difference < 0) {

    downScrollAccumulated = 0;

    if (!navbarVisible) {

        navbar.classList.remove(
        'top-navbar-hidden'
        );

        floatingTocButton.classList.remove(
        'floating-toc-button-visible'
        );

        navbarVisible = true;
    }

    }

    // ALWAYS SHOW NEAR TOP
    if (currentScrollY <= 10) {

    navbar.classList.remove(
        'top-navbar-hidden'
    );

    navbarVisible = true;
    }

    lastScrollY =
    currentScrollY;

});
