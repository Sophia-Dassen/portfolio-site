const navbar =
    document.querySelector('.top-navbar');

const floatingTocButton =
    document.querySelector('.floating-toc-button');

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
