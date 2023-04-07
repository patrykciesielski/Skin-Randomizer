const nextBtnEl = document.querySelector(".next");
const prevBtnEl = document.querySelector(".prev");
const imagesEl = document.querySelector(".images");
const allImgEl = document.querySelectorAll("img");
const imgContEl = document.querySelector(".img-container");
const randomBtnEl = document.querySelector(".random-btn");
const returnEl = document.querySelector(".return");
const gradientEl = document.querySelector(".gradient");
const resultEl = document.querySelector(".result");

let currentImg = 1
let timeout;

nextBtnEl.addEventListener("click", () => {
    currentImg++;
    clearTimeout(timeout);
    updateImg();
});

prevBtnEl.addEventListener("click", () => {
    currentImg--;
    clearTimeout(timeout);
    updateImg();
});

randomBtnEl.addEventListener("click", () => {
    imgContEl.classList.add("active");
    returnEl.classList.remove("active");
    randomBtnEl.classList.add("active");
    resultEl.classList.remove("active");
});

returnEl.addEventListener("click", () => {
    imgContEl.classList.remove("active");
    returnEl.classList.add("active");
    randomBtnEl.classList.remove("active");
    resultEl.classList.add("active");
})

updateImg();

function updateImg(){
    if (currentImg > allImgEl.length){
        currentImg = 1;
    }else if(currentImg < 1){
        currentImg = allImgEl.length;
    }
    imagesEl.style.transform = `translateX(-${(currentImg - 1) * 752}px)`;
    timeout = setTimeout(() => {
        currentImg++
        updateImg()
    }, 5555);
};

const seraSkin = [
    {
      skin: "Classic Seraphine"
    },
    {
      skin: "K/DA All Out Indie Seraphine"
    },
    {
      skin: "K/DA All Out Rising Star Seraphine"
    },
    {
      skin: "K/DA All Out Superstar Seraphine"
    },
    {
      skin: "Graceful Pheonix Seraphine",
      chroma: [
        "default",
        "2nd",
        "3rd",
        "4th",
        "5th",
        "6th",
        "7th",
        "8th",
        "9th",
        "10th"
      ]
    },
    {
      skin: "Ocean Song Seraphine",
      chroma: [
        "default",
        "2nd",
        "3rd",
        "4th",
        "5th",
        "6th",
        "7th",
        "8th",
        "9th"
      ]
    },
    {
      skin: "Prestige Ocean Song"
    },
    {
      skin: "Faerie Court Seraphine",
      chroma: [
        "default",
        "2nd",
        "3rd",
        "4th",
        "5th",
        "6th",
        "7th",
        "8th",
        "9th",
        "10th"
      ]
    }
  ];

randomBtnEl.addEventListener("click", randomChroma());
  
function randomChroma(){
    const seraAllSkins = seraSkin[Math.floor(Math.random() * 8)].skin;
    const resultEl = document.querySelector(".result");
    const chromaEl = document.querySelector(".sera-chroma");
    
    if (seraAllSkins.includes("Classic")) {
      const seraClassicResult = "Your skin is " + seraAllSkins + "!";
        resultEl.style.backgroundImage = "url('img/sera_skins/classic.jpg')";
        resultEl.style.boxShadow = "0 0 45px 70px rgba(211, 96, 170, .33)";
        chromaEl.innerHTML = seraClassicResult;
      
    }else if (seraAllSkins.includes("Indie")){
        const seraIndieResult = "Your skin is " + seraAllSkins + "!";
        resultEl.style.backgroundImage = "url('img/sera_skins/indie.jpg')";
        resultEl.style.boxShadow = "0 0 45px 70px rgba(246, 134, 209, .33)";
        chromaEl.innerHTML = seraIndieResult;
      
    }else if (seraAllSkins.includes("Rising")){
        const seraRisingResult = "Your skin is " + seraAllSkins + "!";
        resultEl.style.backgroundImage = "url('img/sera_skins/rising.jpg')";
        resultEl.style.boxShadow = "0 0 45px 70px rgba(153, 200, 210, .33)";
        chromaEl.innerHTML = seraRisingResult;
       
    }else if (seraAllSkins.includes("Superstar")){
        const seraSuperResult = "Your skin is " + seraAllSkins + "!";
        resultEl.style.backgroundImage = "url('img/sera_skins/superstar.jpg')";
        resultEl.style.boxShadow = "0 0 45px 70px rgba(105, 77, 197, .33)";
        chromaEl.innerHTML = seraSuperResult;
       
    }else if (seraAllSkins.includes("Graceful")){
      const seraGraceChroma = seraSkin[4].chroma[Math.floor(Math.random() * 10)];
      resultEl.style.backgroundImage = "url('img/sera_skins/graceful.jpg')";
      resultEl.style.boxShadow = "0 0 45px 70px rgba(240, 159, 86, .33)";

      if(seraGraceChroma.includes("default")){
        const seraGraceResult = "Your skin is " + seraAllSkins + " with classic look!";
        chromaEl.innerHTML = seraGraceResult
      }else{
      const seraGraceResult = "Your skin is " + seraAllSkins + " with " + seraGraceChroma + " chroma!";
      chromaEl.innerHTML = seraGraceResult
      };
       
    }else if (seraAllSkins.includes("Ocean Song Seraphine")){
      const seraOceanChroma = seraSkin[5].chroma[Math.floor(Math.random() * 9)];
      resultEl.style.backgroundImage = "url('img/sera_skins/ocean.jpg')";
      resultEl.style.boxShadow = "0 0 45px 70px rgba(225, 182, 116, .33)";

      if(seraOceanChroma.includes("default")){
        const seraOceanResult = "Your skin is " + seraAllSkins + " with classic look!";
        chromaEl.innerHTML = seraOceanResult
      }else{
      const seraOceanResult = "Your skin is " + seraOceanSkins + " with " + seraOceanChroma + " chroma!";
      chromaEl.innerHTML = seraOceanResult
      };
       
    }else if (seraAllSkins.includes("Prestige")){
        const preSongResult = "Your skin is " + seraAllSkins + " Seraphine!";
        resultEl.style.backgroundImage = "url('img/sera_skins/ocean_pre.jpg')";
        resultEl.style.boxShadow = "0 0 45px 70px rgba(65, 157, 184, .33)";
        chromaEl.innerHTML = preSongResult;
       
    }else if (seraAllSkins.includes("Faerie")){
      const seraFaerieChroma = seraSkin[7].chroma[Math.floor(Math.random() * 10)];
      resultEl.style.backgroundImage = "url('img/sera_skins/faerie.jpg')";
      resultEl.style.boxShadow = "0 0 45px 70px rgba(91, 189, 133, .33)";

      if(seraFaerieChroma.includes("default")){
        const seraFaerieResult = "Your skin is " + seraAllSkins + " with classic look!";
        chromaEl.innerHTML = seraFaerieResult
      }else{
      const seraFaerieResult = "Your skin is " + seraAllSkins + " with " + seraFaerieChroma + " chroma!";
      chromaEl.innerHTML = seraFaerieResult
      };
    };
  };