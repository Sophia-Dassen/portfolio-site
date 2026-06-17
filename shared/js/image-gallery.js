import { sharedPhotoSwipeOptions }
from './photoswipe-init.js';

function changeMainImage(thumbnail)
{
    const gallery =
        thumbnail.closest(".image-gallery");

    gallery.dataset.activeIndex =
    thumbnail.dataset.index;

    const image =
        gallery.querySelector(".gallery-main-image");

    const link =
        gallery.querySelector(".gallery-main-link");

    const caption =
        gallery.querySelector(".gallery-caption");

    image.src =
        thumbnail.dataset.fullImage;

    image.alt =
        thumbnail.alt;

    link.href =
        thumbnail.dataset.fullImage;

    link.dataset.pswpWidth =
        thumbnail.dataset.width;

    link.dataset.pswpHeight =
        thumbnail.dataset.height;

    caption.textContent =
        thumbnail.dataset.caption;

    gallery
        .querySelectorAll(".gallery-thumb")
        .forEach(thumb =>
            thumb.classList.remove("active")
        );

    thumbnail.classList.add("active");
}


function initializeImageGalleries()
{
    document
        .querySelectorAll(".gallery-item")
        .forEach(item =>
        {
            item.addEventListener(
                "click",
                (event) =>
                {
                    event.preventDefault();

                    const thumbnail =
                        item.querySelector(".gallery-thumb");

                    changeMainImage(thumbnail);
                }
            );
        });

    document
        .querySelectorAll(".gallery-main-link")
        .forEach(link =>
        {
            link.addEventListener(
                "click",
                openGallery
            );
        });
}

document.addEventListener("DOMContentLoaded", () =>
{
    initializeImageGalleries();
});


async function openGallery(event)
{
    console.count("openGallery");
    event.preventDefault();

    const gallery =
        event.currentTarget.closest(".image-gallery");

    const activeIndex =
        Number(gallery.dataset.activeIndex);

    const items =
        Array.from(
            gallery.querySelectorAll(".gallery-item")
        )
        .map(item => ({
            src: item.href,
            w: Number(item.dataset.pswpWidth),
            h: Number(item.dataset.pswpHeight)
        }));

    const { default: PhotoSwipe } =
        await import(
            'https://cdn.jsdelivr.net/npm/photoswipe@5/dist/photoswipe.esm.min.js'
        );

    const pswp =
        new PhotoSwipe({

            ...sharedPhotoSwipeOptions,

            dataSource: items,

            index: activeIndex

        });

    pswp.init();
}
