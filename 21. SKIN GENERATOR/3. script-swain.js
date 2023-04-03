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
    imagesEl.style.transform = `translateX(-${(currentImg - 1) * 752}px)`;
    timeout = setTimeout(() => {
        currentImg++
        updateImg()
    }, 5555);
};

const swainSkin = [
    {
      skin: "Classic Swain"
    },
    {
      skin: "Northern Front Swain"
    },
    {
      skin: "Bilgewater Swain"
    },
    {
      skin: "Tyrant Swain",
    },
    {
      skin: "Dragon Master Swain",
      chroma: [
        "default",
        "2nd",
        "3rd",
        "4th",
        "5th",
        "6th",
        "7th",
      ]
    },
    {
      skin: "Crystal Rose Swain",
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
    skin: "Hextech Swain"
    },
    {
      skin: "Winterblessed Swain",
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
    const swainAllSkins = swainSkin[Math.floor(Math.random() * 8)].skin;
    const resultEl = document.querySelector(".result");
    const chromaEl = document.querySelector(".swain-chroma");
    
    if (swainAllSkins.includes("Classic")) {
        const swainClassicResult = "Your skin is " + swainAllSkins + "!";
        resultEl.style.backgroundImage = "url('img/swain_skins/classic.jpg')";
        chromaEl.innerHTML = swainClassicResult;
      
    }else if (swainAllSkins.includes("Northern")){
        const swainNorthResult = "Your skin is " + swainAllSkins + "!";
        resultEl.style.backgroundImage = "url('img/swain_skins/northern.jpg')";
        chromaEl.innerHTML = swainNorthResult;

      
     }else if (swainAllSkins.includes("Bilge")){
      const swainBilgeResult = "Your skin is " + swainAllSkins + "!";
      resultEl.style.backgroundImage = "url('img/swain_skins/bilgewater.jpg')";
      chromaEl.innerHTML = swainBilgeResult;
       
    }else if (swainAllSkins.includes("Tyrant")){
        const swainTyrantResult = "Your skin is " + swainAllSkins + "!";
        resultEl.style.backgroundImage = "url('img/swain_skins/tyrant.jpg')";
        chromaEl.innerHTML = swainTyrantResult;
       
    }else if (swainAllSkins.includes("Dragon")){
        const swainDragonChroma = swainSkin[4].chroma[Math.floor(Math.random() * 7)];
        resultEl.style.backgroundImage = "url('img/swain_skins/dragon.jpg')";
        if(swainDragonChroma.includes("default")){
          const swainDragonResult = "Your skin is " + swainAllSkins + " with classic look!";
          chromaEl.innerHTML = swainDragonResult
        }else{
        const swainDragonResult = "Your skin is " + swainAllSkins + " with " + swainDragonChroma + " chroma!";
        chromaEl.innerHTML = swainDragonResult
        };
       
    }else if (swainAllSkins.includes("Crystal")){
        const swainCrystalChroma = swainSkin[5].chroma[Math.floor(Math.random() * 10)];
        resultEl.style.backgroundImage = "url('img/swain_skins/crystal.jpg')";
        if(swainCrystalChroma.includes("default")){
          const swainCrystalResult = "Your skin is " + swainAllSkins + " with classic look!";
          chromaEl.innerHTML = swainCrystalResult
        }else{
        const swainCrystalResult = "Your skin is " + swainAllSkins + " with " + swainCrystalChroma + " chroma!";
        chromaEl.innerHTML = swainCrystalResult
        };
       
     }else if (swainAllSkins.includes("Hextech")){
      const swainHexResult = "Your skin is " + swainAllSkins + "!";
      resultEl.style.backgroundImage = "url('img/swain_skins/hextech.jpg')";
      chromaEl.innerHTML = swainHexResult;
       
    }else if (swainAllSkins.includes("Winter")){
        const swainWinterChroma = swainSkin[7].chroma[Math.floor(Math.random() * 10)];
        resultEl.style.backgroundImage = "url('img/swain_skins/winter.jpg')";
        if(swainWinterChroma.includes("default")){
          const swainWinterResult = "Your skin is " + swainAllSkins + " with classic look!";
          chromaEl.innerHTML = swainWinterResult
        }else{
        const swainWinterResult = "Your skin is " + swainAllSkins + " with " + swainWinterChroma + " chroma!";
        chromaEl.innerHTML = swainWinterResult
        };
    };
  };