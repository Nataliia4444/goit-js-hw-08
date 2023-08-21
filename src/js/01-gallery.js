import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const gallery = document.querySelector('.gallery');
const img = galleryItems
  .map(
    img => `<li class="gallery__item">
   <a class="gallery__link" href=${img.original}>
      <img class="gallery__image" src=${img.preview} alt=${img.description} />
   </a>
</li>`
  )
  .join('');
const image = img;
gallery.innerHTML = image;
const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDeloy: 250,
});
lightbox.on('show.simplelightbox', function (e) {
  e.preventDefault();
});
