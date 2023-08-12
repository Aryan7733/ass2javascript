document.addEventListener('DOMContentLoaded', function() {
    // Get the featured image and thumbnail images
    var featuredImage = document.querySelector('#gallery figure img');
    var thumbnails = document.querySelectorAll('#gallery ul li img');
  
    // Add click event listeners to each thumbnail image
    thumbnails.forEach(function(thumbnail) {
      thumbnail.addEventListener('click', function() {
        // Get the path of the full-sized image
        var fullSizeImagePath = this.src.replace('-small', '-large');
        
        // Update the featured image source and alt attributes
        featuredImage.src = fullSizeImagePath;
        featuredImage.alt = this.alt;
  
        // Update the caption with the image title
        var caption = document.querySelector('#gallery figure figcaption');
        caption.textContent = this.getAttribute('data-title');
  
        // Remove the 'active' class from all thumbnails
        thumbnails.forEach(function(thumb) {
          thumb.parentNode.classList.remove('active');
        });
  
        // Add the 'active' class to the clicked thumbnail
        this.parentNode.classList.add('active');
      });
    });
  });
  