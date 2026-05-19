const tocButtons = document.querySelectorAll(
    '.toc-button, .floating-toc-button'
);

const tocOverlay =
    document.querySelector('.toc-overlay');

const tocCloseButton =
    document.querySelector('.toc-close-button');

function openTOC() {
    document.body.classList.add('toc-open');
}

function closeTOC() {
    document.body.classList.remove('toc-open');
}

tocButtons.forEach((button) => {
    button.addEventListener('click', openTOC);
});

tocOverlay.addEventListener('click', closeTOC);

tocCloseButton.addEventListener('click', closeTOC);
