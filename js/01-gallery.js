import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector(".gallery");
// console.log(galleryRef);
const galleryItem = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}" />
    </a>
    </div>
    `;
  })
  .join("");
// console.log(galleryItem);
galleryRef.insertAdjacentHTML("beforeend", galleryItem);

galleryRef.addEventListener("click", onImage);

function onImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" 
    width="800" height="600"/>`);
  instance.show();

  galleryRef.addEventListener("keydown", (event) => {
    // console.log(event.code);
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
