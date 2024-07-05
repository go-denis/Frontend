const accessKey = 'xUS-v3OnTadWIsE_EQtoDNtfyaLis54d3_U-7Lm2ZuU';
const imageContainer = document.getElementById('image-container');
const imageElement = document.getElementById('image');
const photographerInfo = document.getElementById('photographer-info');
const likeButton = document.getElementById('like-button');
const likeCount = document.getElementById('like-count');
const newImageButton = document.getElementById('new-image-button');
const previousImagesContainer = document.getElementById('previous-images-container');

let currentImage = {};
let likedImages = JSON.parse(localStorage.getItem('likedImages')) || {};

document.addEventListener('DOMContentLoaded', () => {
    loadRandomImage();
    renderPreviousImages();
});

newImageButton.addEventListener('click', loadRandomImage);
likeButton.addEventListener('click', toggleLike);


async function fetchRandomImage() {
    const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}`);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
}

async function loadRandomImage() {
    currentImage = await fetchRandomImage();
    displayImage(currentImage);
    saveImageToHistory(currentImage);
}

function displayImage(image) {
    imageElement.src = image.urls.regular;
    photographerInfo.innerHTML = `Photo by <a href="${image.user.links.html}" target="_blank">${image.user.name}</a>`;
    updateLikeButton(image.id);
    updateLikeCount(image.id);
}

function updateLikeButton(imageId) {
    if (likedImages[imageId]) {
        likeButton.textContent = 'Unlike';
    } else {
        likeButton.textContent = 'Like';
    }
}

function updateLikeCount(imageId) {
    likeCount.textContent = likedImages[imageId] || 0;
}

function toggleLike() {
    const imageId = currentImage.id;
    if (likedImages[imageId]) {
        delete likedImages[imageId];
    } else {
        likedImages[imageId] = 1;
    }
    localStorage.setItem('likedImages', JSON.stringify(likedImages));
    updateLikeButton(imageId);
    updateLikeCount(imageId);
}

function saveImageToHistory(image) {
    let previousImages = JSON.parse(localStorage.getItem('previousImages')) || [];
    previousImages.push(image);
    localStorage.setItem('previousImages', JSON.stringify(previousImages));
    renderPreviousImages();
}

function renderPreviousImages() {
    previousImagesContainer.innerHTML = '';
    const previousImages = JSON.parse(localStorage.getItem('previousImages')) || [];
    previousImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.urls.thumb;
        imgElement.addEventListener('click', () => displayImage(image));
        previousImagesContainer.appendChild(imgElement);
    });
}