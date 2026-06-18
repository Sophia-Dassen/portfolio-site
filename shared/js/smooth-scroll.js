const architectureButton =
    document.getElementById('scroll-to-architecture');

const architectureSection =
    document.getElementById('problem-statement');

architectureButton.addEventListener('click', (event) => {

    event.preventDefault();

    const targetY =
    architectureSection.getBoundingClientRect().top
    + window.pageYOffset
    - 20;

    smoothScrollTo(targetY, 750);

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
             1 - Math.pow(1 - percent, 3);

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
