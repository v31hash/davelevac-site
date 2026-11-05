
(function () {
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var required = form.querySelectorAll('[required]');
    var ok = true;

    required.forEach(function (el) {
      var valid = el.value.trim() !== '' && (el.type !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value));
      el.setAttribute('aria-invalid', valid ? 'false' : 'true');
      if (!valid && ok) { el.focus(); ok = false; }
    });

    if (!ok) { status.textContent = 'Please complete the required fields.'; return; }
    status.textContent = 'Form handler not connected yet';
  });
})();