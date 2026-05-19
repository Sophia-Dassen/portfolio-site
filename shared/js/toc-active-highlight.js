const sections =
    document.querySelectorAll('section[id], h5[id], h6[id]');

const tocLinks =
    document.querySelectorAll('.toc-link');

const observer =
    new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

        if (entry.isIntersecting) {

            const activeId =
            entry.target.id;

            tocLinks.forEach((link) => {

            link.classList.remove(
                'toc-link-active'
            );

            });

            const activeLink =
            document.querySelector(
                `.toc-link[href="#${activeId}"]`
            );

            if (activeLink) {

            activeLink.classList.add(
                'toc-link-active'
            );

            }

        }

        });

    },

    {
        rootMargin:
        '-20% 0px -70% 0px',

        threshold: 0
    }

    );

sections.forEach((section) => {

    observer.observe(section);

});
