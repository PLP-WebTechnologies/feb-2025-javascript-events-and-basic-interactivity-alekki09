// Button click: change text color const colorBtn = document.getElementById("colorChangeBtn"); colorBtn.addEventListener("click", () => { colorBtn.textContent = "Color Changed!"; colorBtn.style.backgroundColor = "#28a745"; colorBtn.style.color = "white"; });

// Double click: secret action const dblClickBtn = document.getElementById("doubleClickBtn"); dblClickBtn.addEventListener("dblclick", () => { alert("Secret double-click activated!"); });

// Keypress detection const keypressDisplay = document.getElementById("keypressDisplay"); document.addEventListener("keydown", (e) => { keypressDisplay.textContent = You pressed: ${e.key}; });

// Image gallery const galleryImg = document.getElementById("galleryImg"); const nextImg = document.getElementById("nextImg"); const images = [ "https://via.placeholder.com/150", "https://via.placeholder.com/150/0000FF", "https://via.placeholder.com/150/FF0000" ]; let imgIndex = 0; nextImg.addEventListener("click", () => { imgIndex = (imgIndex + 1) % images.length; galleryImg.src = images[imgIndex]; });

// Tabs / Accordion const tabBtns = document.querySelectorAll(".tabBtn"); const tabContents = document.querySelectorAll(".tabContent");

tabBtns.forEach((btn, index) => { btn.addEventListener("click", () => { tabContents.forEach(c => c.style.display = "none"); tabContents[index].style.display = "block"; }); });

// Form Validation const email = document.getElementById("email"); const password = document.getElementById("password"); const emailFeedback = document.getElementById("emailFeedback"); const passwordFeedback = document.getElementById("passwordFeedback"); const form = document.getElementById("signupForm");

email.addEventListener("input", () => { const valid = /^[^\s@]+@[^\s@]+.[^\s@]+$/.test(email.value); emailFeedback.textContent = valid ? "" : "Invalid email format."; });

password.addEventListener("input", () => { passwordFeedback.textContent = password.value.length >= 8 ? "" : "Password must be at least 8 characters."; });

form.addEventListener("submit", (e) => { if (!email.value || !password.value || password.value.length < 8) { e.preventDefault(); alert("Please fix errors before submitting."); } });

