/* MAIN PAGE #################################################### */

const barsEl = document.querySelector(".bars");
const sidebarEl = document.querySelector(".sidebar");
const funcEl = document.getElementById("func");
const aboutEl = document.getElementById("about");
const contactEl = document.getElementById("contact");
const functextEl = document.querySelector(".functext");

barsEl.addEventListener("click", () => {
    sidebarEl.classList.toggle("active");
});

funcEl.addEventListener("mouseover", () => {
    aboutEl.style.marginTop = '400px';
    functextEl.classList.remove("active"); 
});

funcEl.addEventListener("click", () => {
    aboutEl.style.marginTop = '30px';
    functextEl.classList.add("active"); 
});
