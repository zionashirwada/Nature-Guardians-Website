//changing image and color in banner in aperals

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


///filter setting

document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.filter_img');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const categoryId = this.getAttribute('id').split('-')[1];
            const categoryContainers = document.querySelectorAll('.category_container');

            categoryContainers.forEach(container => {
                container.style.display = 'none';
            });

            if (categoryId === '0') {
                categoryContainers.forEach(container => {
                    container.style.display = 'block';
                });
            } else {
                const targetCategory = document.getElementById(`category-${categoryId}`);
                if (targetCategory) {
                    targetCategory.style.display = 'block';
                }
            }
        });
    });
});


/// add to basket
document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.card-button');
    const basketItemsContainer = document.getElementById('basket-items');
    
    const clearButton = document.getElementById('clear');
    const errorMessage = document.getElementById('error-message');
    let total = 0;
    let itemCount = 0;
    

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (itemCount >= 5) {
                errorMessage.innerHTML = `<p>Maximum of 5 items are allowed in one order</p>`;
                return;
            }
            const card = this.closest('.card');
            const itemImage = card.querySelector('.item_img').src;
            const itemName = card.querySelector('.item_title').textContent;
            // Convert the price string to a number by removing the '£' sign and parsing it
            const itemPrice = parseFloat(card.querySelector('.price').textContent.replace('£', ''));
            itemCount++;
            total += itemPrice;
            const basketItem = document.createElement('div');
            basketItem.classList.add('basket-item');
            basketItem.innerHTML = `
                <div class="item-image">
                    <img src="${itemImage}" alt="item">   
                </div>
                <div class="item-details">
                    <h3>${itemName}</h3>
                    <p>Price: £${itemPrice.toFixed(2)}</p>
                </div>
                
            `;
            
           //append total at botom
            basketItemsContainer.appendChild(basketItem);
            const basketTotalContainer = document.getElementById('basket-total');
            basketTotalContainer.innerHTML = `
                <div id="basket-footer">
                    <div id="total">Total:</div>
                    <div id="value">£${total.toFixed(2)}</div>
                </div>
            `;
           
        });
        clearButton.addEventListener('click', function() {
            // Remove all items from the basket
            basketItemsContainer.innerHTML = '';
            const basketTotalContainer = document.getElementById('basket-total');
            basketTotalContainer.innerHTML = '';
            errorMessage.innerHTML = ``;
            // Reset total to zero
            total = 0;
            itemCount=0;
            
        });
    });

   
});
