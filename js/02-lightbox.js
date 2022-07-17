import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const createGallery = galleryItems
  .map(
    (item) => `<a class="gallery__item" href="${item.original}">
    <img 
    class="gallery__image"
    src="${item.preview}"
     alt="${item.description}" />
  </a>`
  )
  .join("");

gallery.addEventListener("click", galleryHandler);
gallery.innerHTML = createGallery;

function galleryHandler(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});

console.log(galleryItems);
