//Hamburger EventListener
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// MY CODE ATTEMPT, had issues due to DOM loading AFTER the javascript.
// used a defer attribute in the head tag with my script link to fix
// const hamburger = document.querySelector
// ('.hamburger');
// const navMenu = document.querySelector
// ('.nav-menu');
// hamburger.addEventListener("click", ()  =>  
// {
//     hamburger.classList.toggle(" active");
//     navMenu.classList.toggle(" active");
// });
// document.querySelectorAll(".nav-link").
// forEach((n) =>
//     n.addEventListener("click",() => {
// hamburger.classList.remove("active");
// navMenu.classList.remove("active");
// }) 
// );







