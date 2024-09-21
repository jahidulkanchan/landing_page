
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    center: true,
    autoplay: true,
    autoplayTimeout: 3000,
    items: 3, /* Adjust based on how many items you want visible */
    responsive: {
      0: {
        items: 1,
     /* Optional for smaller screens */
      },
      600: {
        nav: true,
        items: 1,
        stagePadding: 70,
      },
      1000: {
        nav: true,
        items: 1,
        stagePadding: 100
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


// =========================================================
function toggleAnswer(index) {
  const answers = document.querySelectorAll('.faq-answer');
  const icons = document.querySelectorAll('.faq-question i');

  answers.forEach((answer, i) => {
    if (i === index) {
      answer.classList.toggle('active');
      icons[i].classList.toggle('fa-plus');
      icons[i].classList.toggle('fa-minus');
    } else {
      answer.classList.remove('active');
      icons[i].classList.add('fa-plus');
      icons[i].classList.remove('fa-minus');
    }
  });
}
