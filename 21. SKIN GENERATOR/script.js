/* MAIN PAGE #################################################### */

const barsEl = document.querySelector(".bars");
const sidebarEl = document.querySelector(".sidebar");
const funcEl = document.getElementById("func");
const aboutEl = document.getElementById("about");
const contactEl = document.getElementById("contact");
const functextEl = document.querySelector(".functext");
const abouttextEl = document.querySelector(".abouttext");
const contacttextEl = document.querySelector(".contacttext");
const sidebarhideEl = document.querySelector(".sidebarhide");
const championsEl = document.querySelector(".champions");

barsEl.addEventListener("click", () => {
    sidebarEl.classList.toggle("active");
    championsEl.classList.toggle("active");
});

sidebarhideEl.addEventListener("click", () => {
    sidebarEl.classList.add("active");
    championsEl.classList.remove("active");
    functextEl.classList.add("active");
});

funcEl.addEventListener("click", () => {
    functextEl.classList.toggle("active");
    abouttextEl.classList.add("active");
    contacttextEl.classList.add("active");
});

aboutEl.addEventListener("click", () => {
    abouttextEl.classList.toggle("active");
    functextEl.classList.add("active");
    contacttextEl.classList.add("active");
});

contactEl.addEventListener("click", () => {
    contacttextEl.classList.toggle("active");
    functextEl.classList.add("active");
    abouttextEl.classList.add("active");
});

