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

const nautilusSkin = [
    {
        skin: "Classic Nautilus"
    },
    {
        skin: "Abyssal Nautilus"
    },
    {
        skin: "Subterranean Nautilus"
    },
    {
        skin: "Astronautilus",
        chroma: [
            "Chrono"
        ]
    },
    {
        skin: "Warden Nautilus"
    },
    {
        skin: "Worldbreaker Nautilus"
    },
    {
        skin: "Conqueror Nautilus"
    },
    {
        skin: "Shan Hai Scrolls Nautilus",
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
        skin: "Fright Night Nautilus",
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
    const nautAllSkins = nautilusSkin[Math.floor(Math.random() * nautilusSkin.length)].skin;
    const resultEl = document.querySelector(".result");
    const chromaEl = document.querySelector(".naut-chroma");
    
    if (nautAllSkins.includes("Classic")) {
      const nautClassicResult = "Your skin is " + nautAllSkins + "!";
        resultEl.style.backgroundImage = "url('img/nautilus_skins/classic.jpg')";
        resultEl.style.boxShadow = "0 0 45px 70px rgba(211, 96, 170, .33)";
        chromaEl.innerHTML = nautClassicResult;
      
    }else if (nautAllSkins.includes("Abyssal")){
        const nautAbyssResult = "Your skin is " + nautAllSkins + "!";
        resultEl.style.backgroundImage = "url('img/nautilus_skins/abyssal.jpg')";
        resultEl.style.boxShadow = "0 0 45px 70px rgba(246, 134, 209, .33)";
        chromaEl.innerHTML = nautAbyssResult;
      
    }else if (nautAllSkins.includes("Subterranean")){
        const nautSubResult = "Your skin is " + nautAllSkins + "!";
        resultEl.style.backgroundImage = "url('img/nautilus_skins/subterranean.jpg')";
        resultEl.style.boxShadow = "0 0 45px 70px rgba(153, 200, 210, .33)";
        chromaEl.innerHTML = nautSubResult;
       
    }else if (nautAllSkins.includes("Astronautilus")){
        const astroChroma = nautilusSkin[3].chroma[Math.floor(Math.random() * 2)];
        resultEl.style.backgroundImage = "url('img/nautilus_skins/astro.jpg')";
        resultEl.style.boxShadow = "0 0 45px 70px rgba(91, 189, 133, .33)";
  
        if(astroChroma.includes("default")){
          const astroResult = "Your skin is " + nautAllSkins + " with classic look!";
          chromaEl.innerHTML = astroResult
        }else{
        const astroResult = "Your skin is " + nautAllSkins + " with " + astroChroma + " chroma!";
        chromaEl.innerHTML = astroResult
        };
       
    }else if (nautAllSkins.includes("Warden")){
        const nautWarResult = "Your skin is " + nautAllSkins + "!";
        resultEl.style.backgroundImage = "url('img/nautilus_skins/warden.jpg')";
        resultEl.style.boxShadow = "0 0 45px 70px rgba(105, 77, 197, .33)";
        chromaEl.innerHTML = nautWarResult;
       
    }else if (nautAllSkins.includes("World")){
        const nautWorldResult = "Your skin is " + nautAllSkins + "!";
        resultEl.style.backgroundImage = "url('img/nautilus_skins/world.jpg')";
        resultEl.style.boxShadow = "0 0 45px 70px rgba(105, 77, 197, .33)";
        chromaEl.innerHTML = nautWorldResult;
       
    }else if (nautAllSkins.includes("Conqueror")){
        const nautConqResult = "Your skin is " + nautAllSkins + "!";
        resultEl.style.backgroundImage = "url('img/nautilus_skins/conqueror.jpg')";
        resultEl.style.boxShadow = "0 0 45px 70px rgba(105, 77, 197, .33)";
        chromaEl.innerHTML = nautConqResult;
       
    }else if (nautAllSkins.includes("Shan Hai")){
      const nautShanChroma = nautilusSkin[7].chroma[Math.floor(Math.random() * 9)];
      resultEl.style.backgroundImage = "url('img/nautilus_skins/shan.jpg')";
      resultEl.style.boxShadow = "0 0 45px 70px rgba(91, 189, 133, .33)";

      if(nautShanChroma.includes("default")){
        const nautShanResult = "Your skin is " + nautAllSkins + " with classic look!";
        chromaEl.innerHTML = nautShanResult
      }else{
      const nautShanResult = "Your skin is " + nautAllSkins + " with " + nautShanChroma + " chroma!";
      chromaEl.innerHTML = nautShanResult
      };

    }else if (nautAllSkins.includes("Fright")){
      const nautFrightChroma = nautilusSkin[8].chroma[Math.floor(Math.random() * 9)];
      resultEl.style.backgroundImage = "url('img/nautilus_skins/fright.jpg')";
      resultEl.style.boxShadow = "0 0 45px 70px rgba(91, 189, 133, .33)";

      if(nautFrightChroma.includes("default")){
        const nautFrightResult = "Your skin is " + nautAllSkins + " with classic look!";
        chromaEl.innerHTML = nautFrightResult
      }else{
      const nautFrightResult = "Your skin is " + nautAllSkins + " with " + nautFrightChroma + " chroma!";
      chromaEl.innerHTML = nautFrightResult
      };
    };
  };
