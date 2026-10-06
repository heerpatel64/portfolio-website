// ================= DARK / LIGHT MODE =================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';

    } else {

        themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';

    }

});


// ================= CONTACT FORM VALIDATION =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let valid = true;


    // Name validation

    if (name === "") {

        nameError.textContent = "Please enter your name.";
        valid = false;

    }


    // Email validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.textContent = "Please enter your email.";
        valid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent = "Please enter a valid email.";
        valid = false;

    }


    // Message validation

    if (message === "") {

        messageError.textContent = "Please enter a message.";
        valid = false;

    }


    // Successful submission

    if (valid) {

        successMessage.textContent =
            "Thank you! Your message has been submitted successfully.";

        contactForm.reset();

    }

});


// ================= MOBILE NAVBAR =================

const navLinks = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbarCollapse.classList.contains("show")) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(navbarCollapse);

            if (bsCollapse) {
                bsCollapse.hide();
            }

        }

    });

});