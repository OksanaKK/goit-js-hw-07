import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const createGallery = galleryItems
  .map(
    (item) => `<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="Image description"
  />
</a>
</div>`
  )
  .join("");

gallery.innerHTML = createGallery;

gallery.addEventListener("click", galleryHandler);

function galleryHandler(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }



  const source = event.target.dataset.source;
  const alt = event.target.alt;


  const instance = basicLightbox.create(
    `<img src="${source}" alt = '${alt}' width="800" height="600">`
  );

  instance.show();
}
  window.addEventListener("keydown", keyPressHandler);

  function keyPressHandler(e) {
    if (e.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", keyPressHandler); 
    
  }
}

console.log(galleryItems);