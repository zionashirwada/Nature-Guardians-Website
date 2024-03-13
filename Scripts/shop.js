//changing image and color in banner in aperals

const images = ['Images/shop/t1.png', 'Images/shop/t2.png', 'Images/shop/t3.png'];
const colors = ['#C9E78A', '#F7DC6F', '#85C1E9'];
const secondcolors = ['#086b45', '#d17d0e', '#304f73'];
const titles = ['Monkey print T-shirt', 'Tiger print T-shirt', 'Elephant print T-shirt'];
let currentIndex = 0;
var CalculatedGrandTotal;

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

document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById('submit-button');
    const myForm = document.getElementById('detail-form');
    
    myForm.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        
        // Check if the form is valid
        if (myForm.checkValidity()) {
            const checkoutSection = document.getElementById('checkout');
            const successSection = document.getElementById('checkout-success');
        checkoutSection.style.display = 'none';
        successSection.style.display = 'flex';
                    console.log('Form is valid! Proceeding with custom function...');
        } else {
            // If the form is not valid, display an error message or handle it accordingly
            console.log('Form is not valid. Please fill out all required fields.');
        }
    });
    
});

function validateForm() {
    var requiredFields = document.querySelectorAll('input[required]');
    for (var i = 0; i < requiredFields.length; i++) {
      if (requiredFields[i].value.trim() === '') {
        alert('Please fill in all required fields.');
        return false; // Prevent form submission
      }
    }
    successbuttonaction()
 
    return true; // Allow form submission
  }


function successbuttonaction(){
    const checkoutSection = document.getElementById('checkout');
    const successSection = document.getElementById('checkout-success');
checkoutSection.style.display = 'none';
successSection.style.display = 'flex';


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




// Function to updateCheckout section
function updateCheckout(itemImage, itemName, itemSize, itemPrice,total) {
    const table = document.querySelector('#summery-table tbody');
    
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><img class="itemimage" src="${itemImage}"></td>
        <td><p class="table-itemname col2">${itemName}</p></td>
        <td><p class="table-customize col3">${itemSize}</p></td>
        <td><p class="table-price col4">£${itemPrice.toFixed(2)}</p></td>
    `;
    
    table.appendChild(row);

    const CheckoutSubtotal = document.getElementById('subtotal');
    CheckoutSubtotal.innerHTML = `
    £ ${total.toFixed(2)}
            `;
            
            var discount = ((total/100)*15)
            var grandtotal = (total - discount) + 22;
            CalculatedGrandTotal = grandtotal;
            

            const CheckoutDiscount = document.getElementById('discount');
            CheckoutDiscount.innerHTML = `
            - £ ${discount.toFixed(2)}
            `;
            const CheckoutGrandtotal = document.getElementById('grandtotal');
            CheckoutGrandtotal.innerHTML = `
            £ ${grandtotal.toFixed(2)}
            `;

}






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

            //error messege if 5 items exceeded
            if (itemCount >= 5) {
                errorMessage.innerHTML = `<p>Maximum of 5 items are allowed in one order</p>`;
                return;
            }
            const card = this.closest('.card');
            const itemImage = card.querySelector('.item_img').src;
            const itemName = card.querySelector('.item_title').textContent;
            const selectedSize = card.querySelector('input[class="radio"]:checked').value;
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
                    <p>Size: ${selectedSize} &nbsp &nbsp &nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Price: £${itemPrice.toFixed(2)}</p>
                    
                </div>
                
            `;
            
            
       // Update the table
       updateCheckout(itemImage, itemName, selectedSize, itemPrice,total);


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
            const table = document.querySelector('#summery-table tbody');
            table.innerHTML=` <tr>
            <th class="col1"></th>
            <th  class="col2">Name</th>
            <th class="col3">Customization</th>
            <th class="col4">Price</th>
          </tr> `;


            // Reset total to zero
            total = 0;
            itemCount=0;


            //checkout button 
            
            
        });

        //checkout button onclick
        const checkoutButton = document.getElementById('checkout-button');
         const shopSection = document.getElementById('shop');
        const checkoutSection = document.getElementById('checkout');
    
    checkoutButton.addEventListener('click', function() {
        if (itemCount < 1) {
            errorMessage.innerHTML = `<p>You should have a minimum of 1 item to Checkout</p>`;
        } else {
            shopSection.style.display = 'none';
            checkoutSection.style.display = 'flex';
        }
    });

//success button onclick




    });

   
});