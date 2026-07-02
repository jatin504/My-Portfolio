const sidemenu = document.querySelector("#sidemenu");
const nav = document.querySelector("nav");
const navlinks = document.querySelector("nav ul");

function openmenu() {
  sidemenu.style.transform = "translateX(-16rem)";
}

function closemenu() {
  sidemenu.style.transform = "translateX(16rem)";
}

// ---------------- dark mode ----------------

function toggleTheme() {
  document.documentElement.classList.toggle("dark");
  localStorage.theme = document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
}

// ---------------- navbar scroll effect ----------------

window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    nav.classList.add(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm",
      "dark:bg-darkTheme",
      "dark:shadow-white/20"
    );
    navlinks.classList.remove(
      "bg-white",
      "shadow-sm",
      "bg-opacity-50",
      "dark:border",
      "dark:border-white/50",
      "dark:bg-transparent"
    );
  } else {
    nav.classList.remove(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm",
      "dark:bg-darkTheme",
      "dark:shadow-white/20"
    );
    navlinks.classList.add(
      "bg-white",
      "shadow-sm",
      "bg-opacity-50",
      "dark:border",
      "dark:border-white/50",
      "dark:bg-transparent"
    );
  }
});

// ---------------- contact form (EmailJS) ----------------

function SendMail(event) {
  event.preventDefault();

  const btn = document.querySelector("#submit-btn");
  const status = document.querySelector("#form-status");

  btn.disabled = true;
  status.textContent = "Sending...";
  status.className = "text-center mt-4 text-sm text-gray-500 dark:text-white/60";

  // Param names must match the EmailJS template placeholders:
  // {{first_name}}, {{phone}}, {{email}}, {{message}}
  const form = event.target;
  const params = {
    first_name: form.from_name.value,
    phone: form.phone.value,
    email: form.email_id.value,
    message: form.message.value,
    reply_to: form.email_id.value,
  };

  emailjs
    .send("service_dpppc4j", "template_i8e2dir", params)
    .then(
      () => {
        status.textContent = "Message sent successfully! I'll get back to you soon.";
        status.className = "text-center mt-4 text-sm text-green-600 dark:text-green-400";
        event.target.reset();
      },
      (error) => {
        status.textContent =
          "Failed to send: " +
          (error.text || "unknown error") +
          " — you can also email me directly at jatinthakur9891@gmail.com";
        status.className = "text-center mt-4 text-sm text-red-600 dark:text-red-400";
      }
    )
    .finally(() => {
      btn.disabled = false;
    });
}
