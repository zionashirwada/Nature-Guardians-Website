const images = ['Images/shop/can1.svg', 'Images/shop/can2.svg', 'Images/shop/can3.svg'];
const colors = ['#C9E78A', '#85C1E9', '#F7DC6F'];
let currentIndex = 0;

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImageAndColor();
    document.getElementById('banner_img').style.transform = 'translateX(100%)';
    setTimeout(() => {
        document.getElementById('banner_img').style.transform = 'translateX(0)';
    }, 50);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImageAndColor();
    document.getElementById('banner_img').style.transform = 'translateX(-100%)';
    setTimeout(() => {
        document.getElementById('banner_img').style.transform = 'translateX(0)';
    }, 50);
}

function updateImageAndColor() {
    document.getElementById('canImage').src = images[currentIndex];
    document.getElementById('banner_container').style.backgroundColor = colors[currentIndex];
}