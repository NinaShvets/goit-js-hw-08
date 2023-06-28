// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

function createGalleryItems(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        ` <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </li>`
    )
    .join('');
}

galleryEl.insertAdjacentHTML('afterbegin', createGalleryItems(galleryItems));

const galleryLinks = document.querySelectorAll('.gallery__link');
const galleryLightbox = new SimpleLightbox(galleryLinks, {
  captionsData: 'alt',

  captionDelay: 250,
});

console.log(galleryItems);
