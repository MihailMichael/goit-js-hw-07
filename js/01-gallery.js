import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const items = [];
galleryItems.forEach(element =>{
    const photo = document.createElement('div')
    photo.className = 'photo__item'
    const photoLink = document.createElement('a')
    photoLink.className = 'photo__link'
    photoLink.href = element.original
    const photoItem = document.createElement('img')
    photoItem.className = 'gallery__image'
    photoItem.src = element.preview;
    photoItem.setAttribute('data-source', element.original)
    photoItem.alt = element.description;
    photo.append(photoLink);
    photoLink.append(photoItem)
    items.push(photo)
})
gallery.append(...items)
gallery.addEventListener('click', event =>{
    event.preventDefault();
    if(event.target.nodeName !== 'IMG'){
        return
    }
    const selectPhoto = event.target.getAttribute('data-source')
    const instance = basicLightbox.create(`<img src = "${selectPhoto}" width="800" height= "600">`)
    instance.show()
    gallery.addEventListener('keydown', event => {
        if(event.key === 'Escape'){
            instance.close()
        }
    })
})