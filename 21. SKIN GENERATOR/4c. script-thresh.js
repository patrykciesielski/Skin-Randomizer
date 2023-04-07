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
    imagesEl.style.transform = `translateX(-${(currentImg - 1) * 764}px)`;
    timeout = setTimeout(() => {
        currentImg++
        updateImg()
    }, 5555);
};

const threshSkin = [
    {
    skin: "Classic Thresh"
    },
    {
    skin: "Deep Terror Thresh"
    },
    {
    skin: "Championship Thresh",
    chroma: [
        "default",
        "Golden"
    ]
    },
    {
    skin: "Blood Moon Thresh"
    },
    {
    skin: "SSW Thresh"
    },
    {
    skin: "Dark Star Thresh",
    chroma: [
        "default",
        "Antimatter"
    ]
    },
    {
    skin: "High Noon Thresh",
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
    skin: "Pulsfire Thresh"
    },
    {
    skin: "Prestige Pulsfire"
    },
    {
    skin: "FPX Thresh",
    chroma: [
        "default",
        "Elite"
    ]
    },
    {
    skin: "Spirit Blossom Thresh",
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
    skin: "Unbound Thresh"
    },
    {
    skin: "Steel Dragon Thresh",
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
    skin: "Lunar Emperor Thresh",
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
  ];

randomBtnEl.addEventListener("click", randomChroma());
  
function randomChroma(){
    const threshAllSkins = threshSkin[Math.floor(Math.random() * threshSkin.length)].skin;
    const resultEl = document.querySelector(".result");
    const chromaEl = document.querySelector(".thresh-chroma");
    
    if (threshAllSkins.includes("Classic")) {
      const threshClassicResult = "Your skin is " + threshAllSkins + "!";
        resultEl.style.backgroundImage = "url('img/thresh_skins/classic.jpg')";
        resultEl.style.boxShadow = "0 0 45px 50px rgba(65, 149, 129, .33)";
        chromaEl.innerHTML = threshClassicResult;
      
    }else if (threshAllSkins.includes("Deep")){
        const threshDeepResult = "Your skin is " + threshAllSkins + "!";
        resultEl.style.backgroundImage = "url('img/thresh_skins/deep.jpg')";
        resultEl.style.boxShadow = "0 0 45px 50px rgba(3, 45, 75, .33)";
        chromaEl.innerHTML = threshDeepResult;
      
    }else if (threshAllSkins.includes("Championship")){
        const threshChampChroma = threshSkin[2].chroma[Math.floor(Math.random() * 2)];
        resultEl.style.backgroundImage = "url('img/thresh_skins/championship.jpg')";
        resultEl.style.boxShadow = "0 0 45px 50px rgba(48, 119, 240, .33)";
  
        if(threshChampChroma.includes("default")){
          const threshChampResult = "Your skin is " + threshAllSkins + " with classic look!";
          chromaEl.innerHTML = threshChampResult
        }else{
        const threshChampResult = "Your skin is " + threshAllSkins + " with " + threshChampChroma + " chroma!";
        chromaEl.innerHTML = threshChampResult
        };
       
    }else if (threshAllSkins.includes("Blood")){
        const threshBloodResult = "Your skin is " + threshAllSkins + "!";
        resultEl.style.backgroundImage = "url('img/thresh_skins/blood.jpg')";
        resultEl.style.boxShadow = "0 0 45px 50px rgba(159, 11, 30, .33)";
        chromaEl.innerHTML = threshBloodResult;
       
    }else if (threshAllSkins.includes("SSW")){
        const threshSswResult = "Your skin is " + threshAllSkins + "!";
        resultEl.style.backgroundImage = "url('img/thresh_skins/ssw.jpg')";
        resultEl.style.boxShadow = "0 0 45px 50px rgba(47, 49, 91, .33)";
        chromaEl.innerHTML = threshSswResult;
       
    }else if (threshAllSkins.includes("Dark Star")){
        const threshDarkChroma = threshSkin[5].chroma[Math.floor(Math.random() * 2)];
        resultEl.style.backgroundImage = "url('img/thresh_skins/dark_star.jpg')";
        resultEl.style.boxShadow = "0 0 45px 50px rgba(163, 103, 198, .33)";
  
        if(threshDarkChroma.includes("default")){
          const threshDarkResult = "Your skin is " + threshAllSkins + " with classic look!";
          chromaEl.innerHTML = threshDarkResult
        }else{
        const threshDarkResult = "Your skin is " + threshAllSkins + " with " + threshDarkChroma + " chroma!";
        chromaEl.innerHTML = threshDarkResult
        };
       
    }else if (threshAllSkins.includes("High")){
        const threshHighChroma = threshSkin[6].chroma[Math.floor(Math.random() * 6)];
        resultEl.style.backgroundImage = "url('img/thresh_skins/high.jpg')";
        resultEl.style.boxShadow = "0 0 45px 50px rgba(142, 77, 49, .33)";
  
        if(threshHighChroma.includes("default")){
          const threshHighResult = "Your skin is " + threshAllSkins + " with classic look!";
          chromaEl.innerHTML = threshHighResult
        }else{
        const threshHighResult = "Your skin is " + threshAllSkins + " with " + threshHighChroma + " chroma!";
        chromaEl.innerHTML = threshHighResult
        };
       
    }else if (threshAllSkins.includes("Pulsfire Thresh")){
        const threshPulsResult = "Your skin is " + threshAllSkins + "!";
        resultEl.style.backgroundImage = "url('img/thresh_skins/pulsfire.jpg')";
        resultEl.style.boxShadow = "0 0 45px 50px rgba(97, 76, 179, .33)";
        chromaEl.innerHTML = threshPulsResult;

    }else if (threshAllSkins.includes("Prestige Pulsfire")){
        const prePulsResult = "Your skin is " + threshAllSkins + " Thresh!";
        resultEl.style.backgroundImage = "url('img/thresh_skins/pulsfire_pre.jpg')";
        resultEl.style.boxShadow = "0 0 45px 50px rgba(233, 143, 101, .33)";
        chromaEl.innerHTML = prePulsResult;

    }else if (threshAllSkins.includes("FPX")){
        const threshFPXChroma = threshSkin[9].chroma[Math.floor(Math.random() * 2)];
        resultEl.style.backgroundImage = "url('img/thresh_skins/fpx.jpg')";
        resultEl.style.boxShadow = "0 0 45px 50px rgba(86, 29, 29, .33)";

        if(threshFPXChroma.includes("default")){
            const threshFPXResult = "Your skin is " + threshAllSkins + " with classic look!";
            chromaEl.innerHTML = threshFPXResult
        }else{
            const threshFPXResult = "Your skin is " + threshAllSkins + " with " + threshFPXChroma + " chroma!";
            chromaEl.innerHTML = threshFPXResult
    };
    
    }else if (threshAllSkins.includes("Spirit")){
        const threshSpiritChroma = threshSkin[10].chroma[Math.floor(Math.random() * 9)];
        resultEl.style.backgroundImage = "url('img/thresh_skins/spirit.jpg')";
        resultEl.style.boxShadow = "0 0 45px 50px rgba(185, 123, 248, .33)";

        if(threshSpiritChroma.includes("default")){
            const threshSpiritResult = "Your skin is " + threshAllSkins + " with classic look!";
            chromaEl.innerHTML = threshSpiritResult
        }else{
            const threshSpiritResult = "Your skin is " + threshAllSkins + " with " + threshSpiritChroma + " chroma!";
            chromaEl.innerHTML = threshSpiritResult
    };
    
    }else if (threshAllSkins.includes("Unbound")){
    const threshUnboundResult = "Your skin is " + threshAllSkins + "!";
    resultEl.style.backgroundImage = "url('img/thresh_skins/unbound.jpg')";
    resultEl.style.boxShadow = "0 0 45px 50px rgba(24, 153, 138, .33)";
    chromaEl.innerHTML = threshUnboundResult;

    }else if (threshAllSkins.includes("Steel")){
        const threshSteelChroma = threshSkin[12].chroma[Math.floor(Math.random() * 10)];
        resultEl.style.backgroundImage = "url('img/thresh_skins/steel.jpg')";
        resultEl.style.boxShadow = "0 0 45px 50px rgba(78, 148, 55, .33)";

        if(threshSteelChroma.includes("default")){
            const threshSteelResult = "Your skin is " + threshAllSkins + " with classic look!";
            chromaEl.innerHTML = threshSteelResult
        }else{
            const threshSteelResult = "Your skin is " + threshAllSkins + " with " + threshSteelChroma + " chroma!";
            chromaEl.innerHTML = threshSteelResult
    };
    
    }else if (threshAllSkins.includes("Lunar")){
        const threshLunarChroma = threshSkin[13].chroma[Math.floor(Math.random() * 9)];
        resultEl.style.backgroundImage = "url('img/thresh_skins/lunar.jpg')";
        resultEl.style.boxShadow = "0 0 45px 50px rgba(207, 139, 92, .33)";

        if(threshLunarChroma.includes("default")){
            const threshLunarResult = "Your skin is " + threshAllSkins + " with classic look!";
            chromaEl.innerHTML = threshLunarResult
        }else{
            const threshLunarResult = "Your skin is " + threshAllSkins + " with " + threshLunarChroma + " chroma!";
            chromaEl.innerHTML = threshLunarResult
    };
    }
  };