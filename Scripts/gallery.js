document.addEventListener("DOMContentLoaded", function() {
    // Get all gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Get the lightbox elements
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');


    // Loop through each gallery item
    galleryItems.forEach(function(item) {
        // Add click event listener to each gallery item
        item.addEventListener('click', function() {
            // Get the image source, title, and description from the clicked gallery item
            const imageSrc = item.querySelector('img').src;
            const title = item.querySelector('.title').textContent;
            const description = item.querySelector('.description').textContent;

            // Set the lightbox image source, title, and description
            lightboxImage.src = imageSrc;
            lightboxTitle.textContent = title;
            lightboxDescription.textContent = description;

            // Show the lightbox
            lightbox.style.display = 'block';
        });
    });

    // Close the lightbox when the close button is clicked
    lightboxClose.addEventListener('click', function() {
       
        var details = document.getElementById('lightbox-details');
      
      // change color
      details.style.backgroundColor = 'rgb(228, 255, 247)';
      lightbox.style.display = 'none';
    });

    // Close the lightbox when clicking outside the lightbox content
   
        lightbox.addEventListener('click', function(event) {
            if (event.target === lightbox || !event.target.closest('.lightbox-item')) {
               
                var details = document.getElementById('lightbox-details');
      
      // change color
      details.style.backgroundColor = 'rgb(228, 255, 247)';
      lightbox.style.display = 'none';
            }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const picdesign = document.querySelector(".picdesign");
    const firstImg = picdesign.querySelector("img");
    const arrowIcons = document.querySelectorAll(".wrapper i");
    const rightarrow = document.getElementById("right");
    const leftarrow = document.getElementById("left");

    let firstImgWidth = firstImg.clientWidth + 20;

    arrowIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            if (icon.id === "left") {
                picdesign.scrollLeft -= firstImgWidth;
                leftarrow.style.display= "none"
                rightarrow.style.display = "block"
                
                
            } else if (icon.id === "right") {
                picdesign.scrollLeft += firstImgWidth;
                rightarrow.style.display= "none"
                leftarrow.style.display = "block"
            }
        });
    });
});


  
document.querySelectorAll('input[name="color"]').forEach(function(input) {
    input.addEventListener('change', function() {
      var selectedColor = this.value;
      var details = document.getElementById('lightbox-details');
      
      // change color
      details.style.backgroundColor = selectedColor;
      
    });
  });
  
  document.getElementById('font').addEventListener('change', function() {
    var selectedFont = this.value;
    var details = document.getElementById('info');
    
    // Change font family
    details.style.fontFamily = selectedFont;
});
  
  