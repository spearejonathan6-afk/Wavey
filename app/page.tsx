

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Create an Account</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }

    body {
      background-color: #f4f6f8;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 20px;
    }

    .signup-card {
      background: #ffffff;
      padding: 32px;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      width: 100%;
      max-width: 400px;
    }

    h2 {
      margin-bottom: 8px;
      color: #1f2937;
      text-align: center;
    }

    p.subtitle {
      margin-bottom: 24px;
      color: #6b7280;
      font-size: 14px;
      text-align: center;
    }

    .form-group {
      margin-bottom: 16px;
    }

    label {
      display: block;
      margin-bottom: 6px;
      font-size: 14px;
      font-weight: 500;
      color: #374151;
    }

    input {
      width: 100%;
      padding: 10px 12px;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      font-size: 14px;
      transition: border-color 0.2s;
    }

    input:focus {
      outline: none;
      border-color: #2563eb;
    }

    button {
      width: 100%;
      padding: 12px;
      background-color: #2563eb;
      color: #ffffff;
      border: none;
      border-radius: 6px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      margin-top: 8px;
      transition: background-color 0.2s;
    }

    button:hover {
      background-color: #1d4ed8;
    }

    .login-link {
      margin-top: 16px;
      text-align: center;
      font-size: 14px;
      color: #6b7280;
    }

    .login-link a {
      color: #2563eb;
      text-decoration: none;
      font-weight: 500;
    }

    .login-link a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>

  <div class="signup-card">
    <h2>Create Account</h2>
    <p class="subtitle">Sign up to get started</p>

    <form action="/signup" method="POST">
      <div class="form-group">
        <label for="fullname">Full Name</label>
        <input type="text" id="fullname" name="fullname" placeholder="Jane Doe" required />
      </div>

      <div class="form-group">
        <label for="email">Email Address</label>
        <input type="email" id="email" name="email" placeholder="you@example.com" required />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="••••••••" minlength="8" required />
      </div>

      <button type="submit">Sign Up</button>
    </form>

    <div class="login-link">
      Already have an account? <a href="/login">Log in</a>
    </div>
  </div>

</body>
</html>