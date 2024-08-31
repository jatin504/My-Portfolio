const sidemenu = document.querySelector("#sidemenu");
const nav = document.querySelector("nav");
const navlinks = document.querySelector("nav ul");

function openmenu() {
  sidemenu.style.transform = "translateX(-16rem)";
}

function closemenu() {
  sidemenu.style.transform = "translateX(16rem)";
}

window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    nav.classList.add(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm"
    );
    navlinks.classList.remove("bg-white", "shadow-sm", "bg-opacity-50");
  } else {
    nav.classList.remove(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm"
    );
    navlinks.classList.add("bg-white", "shadow-sm", "bg-opacity-50");
  }
});

// function SendMail() {


//     emailjs
//       .send("service_dpppc4j", "template_i8e2dir", params)
//       .then(function (res) {
//         alert("Success! " + res.status);
//       });
//   }

function SendMail(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Use the correct service ID and template ID from your EmailJS account
    emailjs.sendForm('service_dpppc4j', 'template_i8e2dir', event.target)
      .then((result) => {
        alert('Message sent successfully!');
        event.target.reset(); // Reset the form after successful submission
      }, (error) => {
        alert('Failed to send message: ' + error.text);
      });
  }
  