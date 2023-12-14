const gallery = document.querySelector('.gallery');

let currentIndex = 0;

function nextImage() {
    currentIndex++;
    if (currentIndex >= gallery.children.length) {
        currentIndex = 0;
    }
    updateGallery();
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = gallery.children.length - 1;
    }
    updateGallery();
}

function updateGallery() {
    const translateValue = -currentIndex * 100 + '%';
    gallery.style.transform = `translateX(${translateValue})`;
}

setInterval(nextImage, 3000); // Change d'image toutes les 3 secondes
