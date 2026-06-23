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

function setupSmoothScroll( 
    buttonSelector, 
    targetSelector, 
    offset = 20, 
    duration = 950 
) {

    const button = 
        document.querySelector( 
            buttonSelector 
        ); 
    
    const target = 
        document.querySelector( 
            targetSelector 
        );
    
    if ( 
        !button || 
        !target 
    ) { 
        return; 
    }


    button.addEventListener(

        'click',

        event => {

            event.preventDefault();

            const targetY =

                target
                    .getBoundingClientRect()
                    .top

                + window.pageYOffset

                - offset;

            smoothScrollTo(
                targetY,
                duration
            );

        }

    );

}

// Home page CTA 
setupSmoothScroll( 
    '.home-hero-CTA', 
    '#projects' 
);

// Project page CTA 
setupSmoothScroll( 
    '.project-page-hero-CTA', 
    '#problem-statement' 
);


window.addEventListener(
    'load',
    () => {

        const params =
            new URLSearchParams(
                window.location.search
            );

        if (
            params.get('scroll')
            === 'projects'
        ) {

            const projectsSection =
                document.querySelector(
                    '#projects'
                );

            const targetY =

                projectsSection
                    .getBoundingClientRect()
                    .top

                + window.pageYOffset

                - 20;

            smoothScrollTo(
                targetY,
                1100
            );

        }

    }
);
