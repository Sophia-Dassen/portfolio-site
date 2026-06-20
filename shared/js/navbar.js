const navbar =
    document.querySelector('.top-navbar');

const floatingTocButton =
    document.querySelector('.floating-toc-button');

const homeMenuButton =
    document.querySelector('.home-menu-button');

const homeMenuLabel =
    document.querySelector('.home-menu-label');

const homeBrandLink =
    document.querySelector('.home-brand-link');

const homeNavLinks =
    document.querySelectorAll('.home-nav-menu a');

function setHomeMenuOpen(isOpen) {

    document.body.classList.toggle(
        'home-menu-open',
        isOpen
    );

    if (homeMenuButton) {

        homeMenuButton.setAttribute(
            'aria-expanded',
            String(isOpen)
        );

        homeMenuButton.setAttribute(
            'aria-label',
            isOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
        );

    }

    if (homeMenuLabel) {

        homeMenuLabel.textContent =
            isOpen
                ? 'Close'
                : 'Menu';

    }

    if (
        navbar &&
        isOpen
    ) {

        navbar.classList.remove(
            'top-navbar-hidden'
        );

    }

}

if (homeMenuButton) {

    homeMenuButton.addEventListener('click', () => {

        setHomeMenuOpen(
            !document.body.classList.contains('home-menu-open')
        );

    });

}

if (homeBrandLink) {

    homeBrandLink.addEventListener('click', () => {

        setHomeMenuOpen(false);

    });

}

homeNavLinks.forEach(link => {

    link.addEventListener('click', () => {

        setHomeMenuOpen(false);

    });

});

document.addEventListener('keydown', event => {

    if (
        event.key === 'Escape' &&
        document.body.classList.contains('home-menu-open')
    ) {

        setHomeMenuOpen(false);

    }

});

if (navbar) {

    let lastScrollY =
        window.scrollY;

    let navbarVisible =
        true;

    let downScrollAccumulated = 0;
    let upScrollAccumulated = 0;

    window.addEventListener('scroll', () => {

        const currentScrollY =
        window.scrollY;

        if (document.body.classList.contains('home-menu-open')) {

            navbar.classList.remove(
                'top-navbar-hidden'
            );

            lastScrollY =
            currentScrollY;

            return;

        }

        const difference =
        currentScrollY - lastScrollY;

        // SCROLLING DOWN
        if (difference > 0) {

            downScrollAccumulated += difference;
            upScrollAccumulated = 0;

            if (
                downScrollAccumulated > 20 &&
                navbarVisible
            ) {

                navbar.classList.add(
                'top-navbar-hidden'
                );

                if (floatingTocButton) {

                    floatingTocButton.classList.add(
                    'floating-toc-button-visible'
                    );

                }

                navbarVisible = false;
            }

        }

        // SCROLLING UP
        else if (difference < 0) {
    
            upScrollAccumulated += Math.abs(difference);
            downScrollAccumulated = 0;

            if (
                upScrollAccumulated > 50 &&
                !navbarVisible
            ) {

                navbar.classList.remove(
                'top-navbar-hidden'
                );

                if (floatingTocButton) {

                    floatingTocButton.classList.remove(
                    'floating-toc-button-visible'
                    );

                }

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

}
