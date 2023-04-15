const nextBtnEl = document.querySelector(".next");
const prevBtnEl = document.querySelector(".prev");
const imagesEl = document.querySelector(".images");
const allImgEl = document.querySelectorAll("img");
const imgContEl = document.querySelector(".img-container");
const randomBtnEl = document.querySelector(".random-btn");
const returnEl = document.querySelector(".return");
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
    imagesEl.style.transform = `translateX(-${(currentImg - 1) * 764}px)`;
    timeout = setTimeout(() => {
        currentImg++
        updateImg()
    }, 5555);
};

const galioSkin = [
    {
        skin: "Classic Galio"
    },
    {
        skin: "Enchanted Galio"
    },
    {
        skin: "Hextech Galio"
    },
    {
        skin: "Commando Galio"
    },
    {
        skin: "Gatekeeper Galio"
    },
    {
        skin: "Debonair Galio"
    },
    {
        skin: "Birdio",
        chroma: [
        "default",
        "2nd",
        "3rd",
        "4th",
        "5th",
        "6th",
        "7th"
      ]
    },
    {
        skin: "Infernal Galio",
        chroma: [
        "default",
        "2nd",
        "3rd",
        "4th",
        "5th",
        "6th"
      ]
    },
    {
        skin: "Dragon Guardian Galio",
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
        skin: "Mythmaker Galio",
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
        ]
    }
  ];

randomBtnEl.addEventListener("click", randomChroma());
  
function randomChroma(){
    const galioAllSkins = galioSkin[Math.floor(Math.random() * galioSkin.length)].skin;
    const resultEl = document.querySelector(".result");
    const chromaEl = document.querySelector(".galio-chroma");
    
    if (galioAllSkins.includes("Classic")) {
      const galioClassicResult = "Your skin is " + galioAllSkins + "!";
        resultEl.style.backgroundImage = "url('img/galio_skins/classic.jpg')";
        resultEl.style.boxShadow = "0 0 45px 70px rgba(211, 96, 170, .33)";
        chromaEl.innerHTML = galioClassicResult;
      
    }else if (galioAllSkins.includes("Enchanted")){
        const galioEnchantedResult = "Your skin is " + galioAllSkins + "!";
        resultEl.style.backgroundImage = "url('img/galio_skins/enchanted.jpg')";
        resultEl.style.boxShadow = "0 0 45px 70px rgba(246, 134, 209, .33)";
        chromaEl.innerHTML = galioEnchantedResult;
      
    }else if (galioAllSkins.includes("Hextech")){
        const galioHexResult = "Your skin is " + galioAllSkins + "!";
        resultEl.style.backgroundImage = "url('img/galio_skins/hextech.jpg')";
        resultEl.style.boxShadow = "0 0 45px 70px rgba(153, 200, 210, .33)";
        chromaEl.innerHTML = galioHexResult;
       
    }else if (galioAllSkins.includes("Commando")){
        const galioCommResult = "Your skin is " + galioAllSkins + "!";
        resultEl.style.backgroundImage = "url('img/galio_skins/commando.jpg')";
        resultEl.style.boxShadow = "0 0 45px 70px rgba(105, 77, 197, .33)";
        chromaEl.innerHTML = galioCommResult;
       
    }else if (galioAllSkins.includes("Gatekeeper")){
        const galioGateResult = "Your skin is " + galioAllSkins + "!";
        resultEl.style.backgroundImage = "url('img/galio_skins/gatekeeper.jpg')";
        resultEl.style.boxShadow = "0 0 45px 70px rgba(105, 77, 197, .33)";
        chromaEl.innerHTML = galioGateResult;
       
    }else if (galioAllSkins.includes("Debonair")){
        const galioDebonairResult = "Your skin is " + galioAllSkins + "!";
        resultEl.style.backgroundImage = "url('img/galio_skins/debonair.jpg')";
        resultEl.style.boxShadow = "0 0 45px 70px rgba(105, 77, 197, .33)";
        chromaEl.innerHTML = galioDebonairResult;
       
    }else if (galioAllSkins.includes("Birdio")){
        const birdioChroma = galioSkin[6].chroma[Math.floor(Math.random() * 7)];
        resultEl.style.backgroundImage = "url('img/galio_skins/birdio.jpg')";
        resultEl.style.boxShadow = "0 0 45px 70px rgba(91, 189, 133, .33)";
  
        if(birdioChroma.includes("default")){
          const birdioResult = "Your skin is " + galioAllSkins + " with classic look!";
          chromaEl.innerHTML = birdioResult
        }else{
        const birdioResult = "Your skin is " + galioAllSkins + " with " + birdioChroma + " chroma!";
        chromaEl.innerHTML = birdioResult
        };
       
    }else if (galioAllSkins.includes("Infernal")){
      const galioInfernalChroma = galioSkin[7].chroma[Math.floor(Math.random() * 6)];
      resultEl.style.backgroundImage = "url('img/galio_skins/infernal.jpg')";
      resultEl.style.boxShadow = "0 0 45px 70px rgba(91, 189, 133, .33)";

      if(galioInfernalChroma.includes("default")){
        const galioInfernalResult = "Your skin is " + galioAllSkins + " with classic look!";
        chromaEl.innerHTML = galioInfernalResult
      }else{
      const galioInfernalResult = "Your skin is " + galioAllSkins + " with " + galioInfernalChroma + " chroma!";
      chromaEl.innerHTML = galioInfernalResult
      };

    }else if (galioAllSkins.includes("Dragon")){
      const galioDragonChroma = galioSkin[8].chroma[Math.floor(Math.random() * 9)];
      resultEl.style.backgroundImage = "url('img/galio_skins/dragon.jpg')";
      resultEl.style.boxShadow = "0 0 45px 70px rgba(91, 189, 133, .33)";

      if(galioDragonChroma.includes("default")){
        const galioDragonResult = "Your skin is " + galioAllSkins + " with classic look!";
        chromaEl.innerHTML = galioDragonResult
      }else{
      const galioDragonResult = "Your skin is " + galioAllSkins + " with " + galioDragonChroma + " chroma!";
      chromaEl.innerHTML = galioDragonResult
      };

    }else if (galioAllSkins.includes("Mythmaker")){
        const galioMythChroma = galioSkin[9].chroma[Math.floor(Math.random() * 9)];
        resultEl.style.backgroundImage = "url('img/galio_skins/mythmaker.jpg')";
        resultEl.style.boxShadow = "0 0 45px 70px rgba(91, 189, 133, .33)";
  
        if(galioMythChroma.includes("default")){
          const galioMythResult = "Your skin is " + galioAllSkins + " with classic look!";
          chromaEl.innerHTML = galioMythResult
        }else{
        const galioMythResult = "Your skin is " + galioAllSkins + " with " + galioMythChroma + " chroma!";
        chromaEl.innerHTML = galioMythResult
        };
    };
  };
