const architectureButton =
    document.getElementById('scroll-to-architecture');

const architectureSection =
    document.getElementById('raw-skill-mentions-dataset');

architectureButton.addEventListener('click', (event) => {

    event.preventDefault();

    const targetY =
    architectureSection.getBoundingClientRect().top
    + window.pageYOffset
    - 20;

    smoothScrollTo(targetY, 1400);

});

function smoothScrollTo(targetY, duration) {

    const startY = window.pageYOffset;
    const difference = targetY - startY;

    let startTime = null;

    function step(currentTime) {

    if (!startTime) startTime = currentTime;

    const time = currentTime - startTime;

    const percent = Math.min(time / duration, 1);

    const ease =
        percent < 0.5
        ? 4 * percent * percent * percent
        : 1 - Math.pow(-2 * percent + 2, 3) / 2;

    window.scrollTo(
        0,
        startY + difference * ease
    );

    if (time < duration) {
        requestAnimationFrame(step);
    }

    }

    requestAnimationFrame(step);

}
