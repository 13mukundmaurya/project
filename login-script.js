document.addEventListener("DOMContentLoaded", () => {
    // Tab switching functionality
    const tabBtns = document.querySelectorAll(".tab-btn")
    const tabContents = document.querySelectorAll(".tab-content")
  
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Remove active class from all buttons and contents
        tabBtns.forEach((btn) => btn.classList.remove("active"))
        tabContents.forEach((content) => content.classList.remove("active"))
  
        // Add active class to clicked button
        btn.classList.add("active")
  
        // Show corresponding content
        const tabId = btn.getAttribute("data-tab")
        document.getElementById(`${tabId}-tab`).classList.add("active")
      })
    })
  
    // Forgot password link
    const forgotPasswordLink = document.getElementById("forgotPasswordLink")
    if (forgotPasswordLink) {
      forgotPasswordLink.addEventListener("click", (e) => {
        e.preventDefault()
  
        // Hide all tabs and show forgot password tab
        tabBtns.forEach((btn) => btn.classList.remove("active"))
        tabContents.forEach((content) => content.classList.remove("active"))
  
        document.getElementById("forgot-tab").classList.add("active")
      })
    }
  
    // Back to login link
    const backToLoginLink = document.getElementById("backToLoginLink")
    if (backToLoginLink) {
      backToLoginLink.addEventListener("click", (e) => {
        e.preventDefault()
  
        // Hide all tabs and show login tab
        tabBtns.forEach((btn) => btn.classList.remove("active"))
        tabContents.forEach((content) => content.classList.remove("active"))
  
        document.querySelector('[data-tab="login"]').classList.add("active")
        document.getElementById("login-tab").classList.add("active")
      })
    }
  
    // Login form submission
    const loginForm = document.getElementById("loginForm")
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        const email = document.getElementById("loginEmail").value
        const password = document.getElementById("loginPassword").value
        const rememberMe = document.getElementById("rememberMe").checked
  
        // Here you would typically send the data to a server for authentication
        console.log("Login attempt:", { email, password, rememberMe })
  
        // For demo purposes, simulate successful login
        alert("Login successful! Redirecting to dashboard...")
  
        // Redirect to index page after successful login
        // In a real application, you would redirect after server confirmation
        setTimeout(() => {
          window.location.href = "index.html"
        }, 1500)
      })
    }
  
    // Registration form submission
    const registerForm = document.getElementById("registerForm")
    if (registerForm) {
      registerForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        const name = document.getElementById("registerName").value
        const email = document.getElementById("registerEmail").value
        const password = document.getElementById("registerPassword").value
        const confirmPassword = document.getElementById("confirmPassword").value
        const agreeTerms = document.getElementById("agreeTerms").checked
  
        // Validate passwords match
        if (password !== confirmPassword) {
          alert("Passwords do not match!")
          return
        }
  
        // Here you would typically send the data to a server for registration
        console.log("Registration attempt:", { name, email, password, agreeTerms })
  
        // For demo purposes, simulate successful registration
        alert("Registration successful! You can now log in with your credentials.")
  
        // Switch to login tab after successful registration
        tabBtns.forEach((btn) => btn.classList.remove("active"))
        tabContents.forEach((content) => content.classList.remove("active"))
  
        document.querySelector('[data-tab="login"]').classList.add("active")
        document.getElementById("login-tab").classList.add("active")
  
        // Clear the registration form
        registerForm.reset()
      })
    }
  
    // Forgot password form submission
    const forgotPasswordForm = document.getElementById("forgotPasswordForm")
    if (forgotPasswordForm) {
      forgotPasswordForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        const email = document.getElementById("forgotEmail").value
  
        // Here you would typically send the data to a server to handle password reset
        console.log("Password reset request for:", email)
  
        // For demo purposes, simulate successful request
        alert("Password reset link has been sent to your email address.")
  
        // Switch back to login tab
        tabBtns.forEach((btn) => btn.classList.remove("active"))
        tabContents.forEach((content) => content.classList.remove("active"))
  
        document.querySelector('[data-tab="login"]').classList.add("active")
        document.getElementById("login-tab").classList.add("active")
  
        // Clear the form
        forgotPasswordForm.reset()
      })
    }
  
    // Password visibility toggle
    function createPasswordToggle(inputId) {
      const passwordInput = document.getElementById(inputId)
      if (!passwordInput) return
  
      const toggleBtn = document.createElement("button")
      toggleBtn.type = "button"
      toggleBtn.className = "password-toggle"
      toggleBtn.innerHTML = '<i class="far fa-eye"></i>'
      toggleBtn.style.position = "absolute"
      toggleBtn.style.right = "10px"
      toggleBtn.style.top = "50%"
      toggleBtn.style.transform = "translateY(-50%)"
      toggleBtn.style.background = "none"
      toggleBtn.style.border = "none"
      toggleBtn.style.cursor = "pointer"
      toggleBtn.style.color = "var(--text-light)"
  
      passwordInput.parentElement.style.position = "relative"
      passwordInput.parentElement.appendChild(toggleBtn)
  
      toggleBtn.addEventListener("click", () => {
        if (passwordInput.type === "password") {
          passwordInput.type = "text"
          toggleBtn.innerHTML = '<i class="far fa-eye-slash"></i>'
        } else {
          passwordInput.type = "password"
          toggleBtn.innerHTML = '<i class="far fa-eye"></i>'
        }
      })
    }
  
    // Create password toggles for all password fields
    createPasswordToggle("loginPassword")
    createPasswordToggle("registerPassword")
    createPasswordToggle("confirmPassword")
  
    // Social login buttons
    const socialButtons = document.querySelectorAll(".social-btn")
    socialButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const provider = btn.classList.contains("google") ? "Google" : "Facebook"
        alert(`${provider} login is not implemented in this demo.`)
      })
    })
  })
  
  