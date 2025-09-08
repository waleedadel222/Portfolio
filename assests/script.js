let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


document.addEventListener('DOMContentLoaded', () => {
  // // adding EmailJS public Key
  emailjs.init({ publicKey: 'rPoAhGzN2_M6VH-no' });

  const form = document.getElementById('contact-form');

  // Message form submission
  form.addEventListener('submit', (e) => {
    
    // prevent page refresh
    e.preventDefault();

    emailjs.sendForm('service_ilxm6ha', 'template_rfcbea7', form)
      .then(() => {

         alert("Thank you, I've received your message successfully ✅");

        // reset form fields
        form.reset();
      })
      .catch((err) => {
        alert("Sorry, something went wrong, please try again later❌");
         console.error("Error Message", err); // Log the error details for debugging
      });
  });
});



