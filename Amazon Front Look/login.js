function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Simple validation
    if (email === "" || password === "") {
      alert("Please fill in both fields.");
      return false;
    }
  
    // Simulate a successful login
    alert("Login successful! Welcome to Amazon, " + email);
  
    // Optional prompt after login
    let rememberMe = prompt("Would you like us to remember your login details? (yes/no)");
  
    if (rememberMe.toLowerCase() === 'yes') {
      alert("Your login details will be remembered.");
    } else {
      alert("Your login details won't be remembered.");
    }
  
    return true; // Allow form submission
  }
  