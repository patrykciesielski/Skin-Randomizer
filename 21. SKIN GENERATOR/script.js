/* CHAMPIONS MECHANIX @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
const pykeEl = document.getElementById("pyke");
const sennaEl = document.getElementById("senna");
const swainEl = document.getElementById("swain");
const threshEl = document.getElementById("thresh");
const randomEl = document.getElementById("random");
const rakanEl = document.getElementById("rakan");
const seraEl = document.getElementById("sera");
const galioEl = document.getElementById("galio");
const nautEl = document.getElementById("nautilus");

pykeEl.addEventListener("click", () => {
    location.href = "1a. pyke.html"
});
sennaEl.addEventListener("click", () => {
    location.href = "2a. senna.html"
});
swainEl.addEventListener("click", () => {
    location.href = "3a. swain.html"
});
threshEl.addEventListener("click", () => {
    location.href = "4a. thresh.html"
});
randomEl.addEventListener("click", () => {
    location.href = "0a. random.html"
});
rakanEl.addEventListener("click", () => {
    location.href = "5a. rakan.html"
});
seraEl.addEventListener("click", () => {
    location.href = "6a. seraphine.html"
});
galioEl.addEventListener("click", () => {
    location.href = "7a. galio.html"
});
nautEl.addEventListener("click", () => {
    location.href = "8a. nautilus.html"
});
/* CHAMPIONS MECHANIX @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
/* SIDEBAR MECHANIX @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

const barsEl = document.querySelector(".fa-bars");
const sidebarEl = document.querySelector(".sidebar");
const championsEl = document.querySelector(".champions");
const logoEl = document.getElementById("logo");
const textEl = document.querySelector(".text");
const funcEl = document.getElementById("func");
const aboutEl = document.getElementById("about");
const contactEl = document.getElementById("contact");
const arrowEl = document.querySelector(".fa-arrow-left");

barsEl.addEventListener("click", () => {
    sidebarEl.classList.toggle("active");
    championsEl.classList.add("active");
    barsEl.style.visibility = "hidden";
});

logoEl.addEventListener("click", () => {
    sidebarEl.classList.add("active");
    championsEl.classList.remove("active");
    barsEl.style.visibility = "visible";
});

arrowEl.addEventListener("click", () => {
    sidebarEl.classList.add("active");
    championsEl.classList.remove("active");
    barsEl.style.visibility = "visible";
});

funcEl.addEventListener("mouseover", () => {
    textEl.classList.remove("active");
    textEl.innerHTML = "<p>Skin Randomizer allows one to roll for random champion from champions pool provided, then roll for both random skin and chroma.<p><br>One can pick specific champion, and then roll for skin and chroma aswell.<p><br>At last. one can pick specific champion with specific skin and roll for random chroma. "
});

aboutEl.addEventListener("mouseover", () => {
    textEl.classList.remove("active");
    textEl.innerHTML = "<p>Skin Randomizer is my 1st somewhat major project on a way to becoming a decent programmer. <p><br>I started it out of necessity - I needed exactly this functionality in my daily life, but there was nothing similar to be found.<p>I decided to create it myself and learn everything from absolute tabula rasa I was to achieve it. <p><br>I had awful lot of fun in doing so, and on accident - I found a passion."
});

contactEl.addEventListener("mouseover", () => {
    textEl.classList.remove("active");
    textEl.innerHTML = "<p>Contact"
});
/* SIDEBAR MECHANIX @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */



