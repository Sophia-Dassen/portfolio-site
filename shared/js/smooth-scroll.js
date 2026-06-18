const architectureButton =
    document.getElementById(
        'scroll-to-architecture'
    );

const architectureSection =
    document.getElementById(
        'problem-statement'
    );

const ease = BezierEasing(.23,.02,.07,.94);

function smoothScrollTo(
    targetY,
    duration = 950
) {

    const startY =
        window.pageYOffset;

    const difference =
        targetY - startY;

    let startTime = null;

    function step(currentTime) {

        if (!startTime) {

            startTime =
                currentTime;

        }

        const elapsedTime =
            currentTime - startTime;

        const percent =
            Math.min(
                elapsedTime / duration,
                1
            );

        const easedPercent =
            ease(percent);

        window.scrollTo(

            0,

            startY
            + difference
            * easedPercent

        );

        if (percent < 1) {

            requestAnimationFrame(
                step
            );

        }

    }

    requestAnimationFrame(
        step
    );

}

architectureButton.addEventListener(

    'click',

    event => {

        event.preventDefault();

        const targetY =

            architectureSection
                .getBoundingClientRect()
                .top

            + window.pageYOffset

            - 20;

        smoothScrollTo(
            targetY,
            950
        );

    }

);
