// Adding JavaScript for Form Interaction and Validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Retrieving Form Values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    // Form Validation
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields before submitting.');
      return;
    }
  
    // Simulating Form Submission Success
    alert(`Thank you for your message, ${name}! I will get back to you soon.`);
    
    // Clear Form Fields
    document.getElementById('contact-form').reset();
  });
  