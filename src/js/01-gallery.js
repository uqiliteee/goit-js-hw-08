// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line


console.log(galleryItems);


const galleryItem = document.querySelector('.gallery');

const galleryCreating = createGalleryMarkup(galleryItems);

galleryItem.insertAdjacentHTML('afterbegin', galleryCreating);
galleryItem.addEventListener('click', onGalleryClick);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>`
    }
    )
    .join('');
}

function onGalleryClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return
    };
}
let lightBox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});