document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error");

  if (username === "admin" && password === "1234") {
    errorMessage.textContent = "";
    alert("Login successful!");
    // Redirect or proceed to next page here
  } else {
    errorMessage.textContent = "Invalid username or password.";
  }
});
