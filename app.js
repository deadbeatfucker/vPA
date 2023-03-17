<script src="app.js"></script>
<script>
  const submitContactForm = () => {
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const message = document.getElementById('message-input').value;

    const data = {
      name: name,
      email: email,
      message: message
    };

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        // Handle response from server-side code
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
</script>
