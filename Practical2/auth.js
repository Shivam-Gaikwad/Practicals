document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Example POST request to backend
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          document.getElementById('message').innerText = "Login successful!";
          localStorage.setItem("token", data.token); // Save JWT token
        } else {
          document.getElementById('message').innerText = "Invalid credentials.";
        }
      })
      .catch(error => {
        document.getElementById('message').innerText = "Error logging in.";
        console.error(error);
      });
  });
  