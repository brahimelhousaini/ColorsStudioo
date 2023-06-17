/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')

 document.addEventListener("DOMContentLoaded", function(event) {
    setTimeout(function() {
      var introElement = document.querySelector(".intro");
      introElement.classList.add("hidden");
    }, 500); // تحديد الوقت بالمللي ثانية (هنا 3 ثواني)
  });