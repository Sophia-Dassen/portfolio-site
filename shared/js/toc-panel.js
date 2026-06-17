const tocButtons = document.querySelectorAll(
    '.toc-button, .floating-toc-button'
);

const tocOverlay =
    document.querySelector('.toc-overlay');

const tocCloseButton =
    document.querySelector('.toc-close-button');

const tocPanelLinks =
    document.querySelectorAll('.toc-link');

function openTOC() {
    document.body.classList.add('toc-open');
}

function closeTOC() {
    document.body.classList.remove('toc-open');
}

tocButtons.forEach((button) => {
    button.addEventListener('click', openTOC);
});

tocCloseButton.addEventListener('click', closeTOC);

tocOverlay.addEventListener('click', (event) => {

    if (event.target === tocOverlay) {
        closeTOC();
    }

});

tocPanelLinks.forEach(link => {

    link.addEventListener('click', event => {

        event.preventDefault();

        const target =
            document.querySelector(
                link.getAttribute('href')
            );

        if (!target) {
            return;
        }

        window.scrollTo({
            top:
                target.getBoundingClientRect().top +
                window.scrollY -
                90,
            behavior: 'smooth'
        });

        setTimeout(closeTOC, 120);

    });

});
