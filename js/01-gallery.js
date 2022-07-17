import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

//Створення і рендер розмітки на підставі масиву даних galleryItems і наданого
// шаблону елемента галереї.+
//Реалізація делегування на div.gallery і отримання url великого зображення.+

//Відкриття модального вікна по кліку на елементі галереї.
// Для цього ознайомся з документацією і прикладами.
//Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям.
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки
// basicLightbox.

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

gallery.addEventListener("click", galleryHandler);

gallery.innerHTML = createGallery;
function galleryHandler(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const source = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${source}"  width="800" height="600">`
  );

  instance.show();

  window.addEventListener("keydown", keyPressHandler);

  function keyPressHandler(e) {
    if (e.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", keyPressHandler);
    }
  }
}
