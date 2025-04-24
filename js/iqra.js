document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.menu-toggle');
  const tabs = document.querySelector('.tabs');

  toggleButton.addEventListener('click', function () {
    tabs.classList.toggle('show');
  });
});

$(document).ready(function() {
  var slideIndex = 0;

  function showSlides() {
    var slides = $('.slide');
    
    for (var i = 0; i < slides.length; i++) {
      slides.eq(i).hide();
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    
    slides.eq(slideIndex - 1).fadeIn(1000);
    setTimeout(showSlides, 5000); // Change image every 2 seconds (2000ms)
  }

  showSlides();

  function plusSlides(n) {
    slideIndex += n;
    showSlides();
  }
});

(function () {
  emailjs.init("Cv1dKpyaNm0DXDdFt"); // Replace with your actual EmailJS public key
})();

// Form submit handler
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent default form action

      emailjs.sendForm('service_l5wv7yd', 'template_mckujc3', this)
        .then(function (response) {
          alert("Message sent successfully!");
        }, function (error) {
          alert("Failed to send message. Please try again later.");
          console.error(error);
        });
    });
  }
});
