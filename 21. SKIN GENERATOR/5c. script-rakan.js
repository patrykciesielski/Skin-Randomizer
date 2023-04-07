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

const rakanSkin = [
    {
    skin: "Classic Rakan"
    },
    {
    skin: "Cosmic Dawn Rakan"
    },
    {
    skin: "Sweetheart Rakan"
    },
    {
    skin: "SSG Rakan"
    },
    {
    skin: "IG Rakan"
    },
    {
    skin: "Star Guardian Rakan",
    chroma: [
        "default",
        "2nd",
        "3rd",
        "4th"
    ]
    },
    {
    skin: "Elderwood Rakan",
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
    skin: "Arcana Rakan",
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
    skin: "Broken Covenant Rakan",
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
    }
  ];

randomBtnEl.addEventListener("click", randomChroma());

function randomChroma(){
    const rakanAllSkins = rakanSkin[Math.floor(Math.random() * rakanSkin.length)].skin;
    const resultEl = document.querySelector(".result");
    const chromaEl = document.querySelector(".rakan-chroma");
    
    if (rakanAllSkins.includes("Classic")) {
      const rakanClassicResult = "Your skin is " + rakanAllSkins + "!";
        resultEl.style.backgroundImage = "url('img/rakan_skins/classic.jpg')";
        resultEl.style.boxShadow = "0 0 45px 50px rgba(65, 149, 129, .33)";
        chromaEl.innerHTML = rakanClassicResult;
      
    }else if (rakanAllSkins.includes("Cosmic")){
        const rakanCosmicResult = "Your skin is " + rakanAllSkins + "!";
        resultEl.style.backgroundImage = "url('img/rakan_skins/cosmic.jpg')";
        resultEl.style.boxShadow = "0 0 45px 50px rgba(3, 45, 75, .33)";
        chromaEl.innerHTML = rakanCosmicResult;
      
    }else if (rakanAllSkins.includes("Sweetheart")){
        const rakanSweetResult = "Your skin is " + rakanAllSkins + "!";
        resultEl.style.backgroundImage = "url('img/rakan_skins/sweetheart.jpg')";
        resultEl.style.boxShadow = "0 0 45px 50px rgba(3, 45, 75, .33)";
        chromaEl.innerHTML = rakanSweetResult;
       
    }else if (rakanAllSkins.includes("SSG")){
        const rakanSSGResult = "Your skin is " + rakanAllSkins + "!";
        resultEl.style.backgroundImage = "url('img/rakan_skins/ssg.jpg')";
        resultEl.style.boxShadow = "0 0 45px 50px rgba(159, 11, 30, .33)";
        chromaEl.innerHTML = rakanSSGResult;
       
    }else if (rakanAllSkins.includes("IG")){
        const rakanIGResult = "Your skin is " + rakanAllSkins + "!";
        resultEl.style.backgroundImage = "url('img/rakan_skins/ig.jpg')";
        resultEl.style.boxShadow = "0 0 45px 50px rgba(47, 49, 91, .33)";
        chromaEl.innerHTML = rakanIGResult;
       
    }else if (rakanAllSkins.includes("Star Guardian")){
        const rakanStarChroma = rakanSkin[5].chroma[Math.floor(Math.random() * 4)];
        resultEl.style.backgroundImage = "url('img/rakan_skins/star_guardian.jpg')";
        resultEl.style.boxShadow = "0 0 45px 50px rgba(163, 103, 198, .33)";
  
        if(rakanStarChroma.includes("default")){
          const rakanStarResult = "Your skin is " + rakanAllSkins + " with classic look!";
          chromaEl.innerHTML = rakanStarResult
        }else{
        const rakanStarResult = "Your skin is " + rakanAllSkins + " with " + rakanStarChroma + " chroma!";
        chromaEl.innerHTML = rakanStarResult
        };
       
    }else if (rakanAllSkins.includes("Elderwood")){
        const rakanElderChroma = rakanSkin[6].chroma[Math.floor(Math.random() * 9)];
        resultEl.style.backgroundImage = "url('img/rakan_skins/elderwood.jpg')";
        resultEl.style.boxShadow = "0 0 45px 50px rgba(142, 77, 49, .33)";
  
        if(rakanElderChroma.includes("default")){
          const rakanElderResult = "Your skin is " + rakanAllSkins + " with classic look!";
          chromaEl.innerHTML = rakanElderResult
        }else{
        const rakanElderResult = "Your skin is " + rakanAllSkins + " with " + rakanElderChroma + " chroma!";
        chromaEl.innerHTML = rakanElderResult
        };
       
    }else if (rakanAllSkins.includes("Arcana")){
        const rakanArcanaChroma = rakanSkin[7].chroma[Math.floor(Math.random() * 9)];
        resultEl.style.backgroundImage = "url('img/rakan_skins/arcana.jpg')";
        resultEl.style.boxShadow = "0 0 45px 50px rgba(142, 77, 49, .33)";
  
        if(rakanArcanaChroma.includes("default")){
          const rakanArcanaResult = "Your skin is " + rakanAllSkins + " with classic look!";
          chromaEl.innerHTML = rakanArcanaResult
        }else{
        const rakanArcanaResult = "Your skin is " + rakanAllSkins + " with " + rakanArcanaChroma + " chroma!";
        chromaEl.innerHTML = rakanArcanaResult
        };

    }else if (rakanAllSkins.includes("Broken")){
        const rakanBrokenChroma = rakanSkin[8].chroma[Math.floor(Math.random() * 9)];
        resultEl.style.backgroundImage = "url('img/rakan_skins/broken.jpg')";
        resultEl.style.boxShadow = "0 0 45px 50px rgba(142, 77, 49, .33)";
  
        if(rakanBrokenChroma.includes("default")){
          const rakanBrokenResult = "Your skin is " + rakanAllSkins + " with classic look!";
          chromaEl.innerHTML = rakanBrokenResult
        }else{
        const rakanBrokenResult = "Your skin is " + rakanAllSkins + " with " + rakanBrokenChroma + " chroma!";
        chromaEl.innerHTML = rakanBrokenResult
        };
    }
  };