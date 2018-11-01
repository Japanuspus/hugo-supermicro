var cookies = 0;
var button = document.getElementById('cookiebutton');
var el = document.getElementById('cookiecount');

function addCookie( ) {
  // One more cookie
  cookies = cookies+1;
  // Update the page
  // If we forget to do this, the displayed number will not match the variable.
  // Front-end frameworks like [vue](https://vuejs.org/) help by doing this automatically.
  el.textContent = cookies;
}
button.addEventListener('click', addCookie)


