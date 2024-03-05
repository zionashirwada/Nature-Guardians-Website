const images = ['Images/shop/t1.png', 'Images/shop/t2.png', 'Images/shop/t3.png'];
const colors = ['#C9E78A', '#F7DC6F', '#85C1E9'];
const secondcolors = ['#086b45', '#d17d0e', '#304f73'];
const titles = ['Monkey print T-shirt', 'Tiger print T-shirt', 'Elephant print T-shirt'];
let currentIndex = 0;

function updateImageAndColor() {
    document.getElementById('timage').src = images[currentIndex];
    document.getElementById('banner_container').style.backgroundColor = colors[currentIndex];
    document.getElementById('t-title').innerHTML = titles[currentIndex];
    document.getElementById('t-title').style.color = secondcolors[currentIndex];
    document.getElementById('t-price').style.backgroundColor = secondcolors[currentIndex];
    document.getElementById('t-button').style.color = secondcolors[currentIndex];
    document.getElementById('t-button').style.borderColor = secondcolors[currentIndex];4
    
}
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImageAndColor();
    document.getElementById('banner_img');
    
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImageAndColor();
    document.getElementById('banner_img');
    
}

