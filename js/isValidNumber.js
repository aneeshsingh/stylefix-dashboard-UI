[].forEach.call(
  document.querySelectorAll('.phone-field'),
  function (el) {
      // initialise plugin
    var iti = window.intlTelInput(el, {
      separateDialCode: true,
      initialCountry: 'au',
      placeholderNumberType: 'Mobile',
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js"
    });
    
    var reset = function() {
      el.classList.remove("is-invalid");
    };
    
    // on blur: validate
    el.addEventListener('blur', function() {
      reset();
      if (el.value.trim()) {
        if (iti.isValidNumber()) {
          console.log('valid');
        } else {
          el.classList.add("is-invalid");
        }
      }
    });
    
    // on keyup / change flag: reset
    el.addEventListener('change', reset);
    el.addEventListener('keyup', reset);
  }
);
