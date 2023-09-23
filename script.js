(function() {
    'use strict';
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();


  const button = document.querySelector(".btn-for-top");

  window.addEventListener("scroll", function (event) {
    if (window.scrollY <= 150) {
      button.classList.remove("visible");
    } else {
      button.classList.add("visible");
    }
  });