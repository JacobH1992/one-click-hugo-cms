// JS Goes here - ES6 supported

import lax from "lax.js"

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

// Initialise Lax
window.onload = function() {
	lax.setup({ /* opts */ }) // init

	document.addEventListener('scroll', function(e) {
	  lax.update(window.scrollY) // update every scroll
	}, false)

	lax.update(window.scrollY) // set initial positions
}

// Burger menu
var burger = document.querySelector('.burger');
var nav = document.querySelector('nav');

burger.onclick = function() {
  console.log('nav toggled');
  nav.classList.toggle('nav-active');
}
