document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation
    const hamburger = document.querySelector(".hamburger")
    const navLinks = document.querySelector(".nav-links")
  
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navLinks.classList.toggle("active")
    })
  
    // Close mobile menu when clicking on a nav link
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navLinks.classList.remove("active")
      })
    })
  
    // Testimonial Slider
    const slides = document.querySelectorAll(".testimonial-slide")
    const dots = document.querySelectorAll(".dot")
    const prevBtn = document.querySelector(".prev-btn")
    const nextBtn = document.querySelector(".next-btn")
    let currentSlide = 0
  
    function showSlide(n) {
      slides.forEach((slide) => slide.classList.remove("active"))
      dots.forEach((dot) => dot.classList.remove("active"))
  
      currentSlide = (n + slides.length) % slides.length
  
      slides[currentSlide].classList.add("active")
      dots[currentSlide].classList.add("active")
    }
  
    prevBtn.addEventListener("click", () => {
      showSlide(currentSlide - 1)
    })
  
    nextBtn.addEventListener("click", () => {
      showSlide(currentSlide + 1)
    })
  
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index)
      })
    })
  
    // Auto slide every 5 seconds
    setInterval(() => {
      showSlide(currentSlide + 1)
    }, 5000)
  
    // Package Filtering
    const filterBtns = document.querySelectorAll(".filter-btn")
    const packageCards = document.querySelectorAll(".package-card")
  
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Remove active class from all buttons
        filterBtns.forEach((btn) => btn.classList.remove("active"))
  
        // Add active class to clicked button
        btn.classList.add("active")
  
        const filter = btn.getAttribute("data-filter")
  
        packageCards.forEach((card) => {
          if (filter === "all") {
            card.style.display = "block"
          } else if (card.getAttribute("data-category") === filter) {
            card.style.display = "block"
          } else {
            card.style.display = "none"
          }
        })
      })
    })
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust for header height
            behavior: "smooth",
          })
        }
      })
    })
  
    // Form submission handling
    const contactForm = document.getElementById("contactForm")
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form values
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const subject = document.getElementById("subject").value
        const message = document.getElementById("message").value
  
        // Here you would typically send the data to a server
        // For demo purposes, we'll just log it and show a success message
        console.log("Form submitted:", { name, email, subject, message })
  
        // Show success message
        alert("Thank you for your message! We will get back to you soon.")
  
        // Reset form
        contactForm.reset()
      })
    }
  
    // Newsletter form submission
    const newsletterForm = document.querySelector(".newsletter-form")
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", function (e) {
        e.preventDefault()
  
        const email = this.querySelector('input[type="email"]').value
  
        // Here you would typically send the email to a server
        console.log("Newsletter subscription:", email)
  
        // Show success message
        alert("Thank you for subscribing to our newsletter!")
  
        // Reset form
        this.reset()
      })
    }
  
    // Scroll to top button
    const scrollTopBtn = document.createElement("button")
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>'
    scrollTopBtn.className = "scroll-top-btn"
    document.body.appendChild(scrollTopBtn)
  
    // Add styles for the scroll to top button
    const style = document.createElement("style")
    style.textContent = `
      .scroll-top-btn {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: var(--primary-color);
        color: white;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
      }
      .scroll-top-btn.visible {
        opacity: 1;
        visibility: visible;
      }
      .scroll-top-btn:hover {
        background-color: var(--primary-dark);
        transform: translateY(-3px);
      }
    `
    document.head.appendChild(style)
  
    // Show/hide scroll to top button based on scroll position
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add("visible")
      } else {
        scrollTopBtn.classList.remove("visible")
      }
    })
  
    // Scroll to top when button is clicked
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  })
  
  