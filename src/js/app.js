// import lax from 'lax.js'

// JS Goes here - ES6 supported
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
