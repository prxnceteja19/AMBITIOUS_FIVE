// form.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('one');
    const emailInput = document.getElementById('email'); // Assuming an email input is added
    const passwordInput = document.getElementById('password');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Validation logic
      let isValid = true;
  
      if (nameInput.value.trim() === '') {
        showError(nameInput, 'Name is required');
        isValid = false;
      } else {
        showSuccess(nameInput);
      }
  
      // Add email and password validation as needed
      // ...
  
      if (isValid) {
        // Submit the form or display a confirmation message
        alert('Form submitted successfully!');
        // You can also use AJAX to send the form data to a server
      }
    });
  
    form.addEventListener('reset', () => {
      // Clear validation messages and reset form fields
      clearValidationMessages();
    });
  
    function showError(input, message) {
      const formControl = input.parentElement;
      const small = formControl.querySelector('small');
      small.innerText = message;
      formControl.className = 'form-control error';
    }
  
    function showSuccess(input) {
      const formControl = input.parentElement;
      formControl.className = 'form-control success';
    }
  
    function clearValidationMessages() {
      const formControls = form.querySelectorAll('.form-control');
      formControls.forEach(formControl => {
        formControl.className = 'form-control';
        formControl.querySelector('small').innerText = '';
      });
    }
  });