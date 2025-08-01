document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  if (!username || !password) {
    error.textContent = "Both fields are required!";
    return;
  }

  if (username === "user123" && password === "password") {
    error.textContent = "";
    alert("Login successful!");
    // Optionally redirect
    // window.location.href = "dashboard.html";
  } else {
    error.textContent = "Incorrect username or password.";
  }
});
