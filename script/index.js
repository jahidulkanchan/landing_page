
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    center: true,
    autoplay: true,
    nav: true,
    stagePadding: 150,
    autoplayTimeout: 3000,
    items: 3, /* Adjust based on how many items you want visible */
    responsive: {
      0: {
        items: 1,
     /* Optional for smaller screens */
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }
    },
    onTranslated: function() {
      // Remove center class from all items
      $('.owl-item').removeClass('center');

      // Add center class to the new center item
      $('.owl-item.active').eq(Math.floor($('.owl-item.active').length / 2)).addClass('center');
    }
  });
});
