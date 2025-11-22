// Contact form handler
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon. (Mock submission)');
      this.reset();
    });
  }
});