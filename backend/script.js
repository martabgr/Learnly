fetch('/api/message')
  .then(res => res.json())
  .then(data => {
    document.getElementById('message').textContent = data.message;
  });
