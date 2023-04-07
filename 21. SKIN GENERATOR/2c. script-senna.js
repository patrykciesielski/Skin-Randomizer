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

const sennaSkin = [
    {
      skin: "Classic"
    },
    {
      skin: "True Damage Senna",
      chroma: [
        "default",
        "2nd",
        "3rd",
        "4th",
        "5th",
        "6th",
        "7th",
        "8th"
      ]
    },
    {
      skin: "Prestige True Damage"
    },
    {
      skin: "High Noon",
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
      skin: "Project",
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
      skin: "Lunar Eclipse Senna",
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
    skin: "Prestige Lunar Eclipse"
    },
    {
      skin: "Bewitching",
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
    const sennaAllSkins = sennaSkin[Math.floor(Math.random() * 8)].skin;
    const resultEl = document.querySelector(".result");
    const chromaEl = document.querySelector(".senna-chroma");
    
    if (sennaAllSkins.includes("Classic")) {
        const sennaClassicResult = "Your skin is " + sennaAllSkins + " Senna!";
        resultEl.style.backgroundImage = "url('img/senna_skins/classic.jpg')";
        resultEl.style.boxShadow = "0 0 45px 50px rgba(42, 73, 74, .33)";
        chromaEl.innerHTML = sennaClassicResult;
      
    }else if (sennaAllSkins.includes("True Damage Senna")){
        const sennaTrueChroma = sennaSkin[1].chroma[Math.floor(Math.random() * 8)];
        resultEl.style.backgroundImage = "url('img/senna_skins/true.jpg')";
        resultEl.style.boxShadow = "0 0 45px 50px rgba(163, 243, 248, .33)";
        if(sennaTrueChroma.includes("default")){
          const sennaTrueResult = "Your skin is " + sennaAllSkins + " with classic look!";
          chromaEl.innerHTML = sennaTrueResult
        }else{
        const sennaTrueResult = "Your skin is " + sennaAllSkins + " with " + sennaTrueChroma + " chroma!";
        chromaEl.innerHTML = sennaTrueResult
        };
      
     }else if (sennaAllSkins.includes("Prestige True Damage")){
      const presTrueResult = "Your skin is " + sennaAllSkins + " Senna!";
      resultEl.style.backgroundImage = "url('img/senna_skins/true_pre.jpg')";
      resultEl.style.boxShadow = "0 0 45px 50px rgba(50, 49, 89, .33)";
      chromaEl.innerHTML = presTrueResult;
       
    }else if (sennaAllSkins.includes("High")){
        const sennaHighChroma = sennaSkin[3].chroma[Math.floor(Math.random() * 7)];
        resultEl.style.backgroundImage = "url('img/senna_skins/high.jpg')";
        resultEl.style.boxShadow = "0 0 45px 50px rgba(62, 34, 33, .33)";
        if(sennaHighChroma.includes("default")){
          const sennaHighResult = "Your skin is " + sennaAllSkins + " Senna with classic look!";
          chromaEl.innerHTML = sennaHighResult
        }else{
        const sennaHighResult = "Your skin is " + sennaAllSkins + " Senna with " + sennaHighChroma + " chroma!";
        chromaEl.innerHTML = sennaHighResult
        };
       
    }else if (sennaAllSkins.includes("Project")){
        const sennaProjectChroma = sennaSkin[4].chroma[Math.floor(Math.random() * 10)];
        resultEl.style.backgroundImage = "url('img/senna_skins/project.jpg')";
        resultEl.style.boxShadow = "0 0 45px 50px rgba(97, 42, 102, .33)";
        if(sennaProjectChroma.includes("default")){
          const sennaProjectResult = "Your skin is " + sennaAllSkins + " Senna with classic look!";
          chromaEl.innerHTML = sennaProjectResult
        }else{
        const sennaProjectResult = "Your skin is " + sennaAllSkins + " Senna with " + sennaProjectChroma + " chroma!";
        chromaEl.innerHTML = sennaProjectResult
        };
       
    }else if (sennaAllSkins.includes("Lunar Eclipse Senna")){
        const classicLunarChroma = sennaSkin[5].chroma[Math.floor(Math.random() * 9)];
        resultEl.style.backgroundImage = "url('img/senna_skins/lunar.jpg')";
        resultEl.style.boxShadow = "0 0 45px 50px rgba(32, 50, 71, .33)";
        if(classicLunarChroma.includes("default")){
          const classicLunarResult = "Your skin is " + sennaAllSkins + "Senna with classic look!";
          chromaEl.innerHTML = classicLunarResult
        }else{
        const classicLunarResult = "Your skin is " + sennaAllSkins + " Senna with " + classicLunarChroma + " chroma!";
        chromaEl.innerHTML = classicLunarResult
        };
       
     }else if (sennaAllSkins.includes("Prestige Lunar")){
      const presLunarResult = "Your skin is " + sennaAllSkins + " Senna!";
      resultEl.style.backgroundImage = "url('img/senna_skins/lunar_pre.jpg')";
      resultEl.style.boxShadow = "0 0 45px 50px rgba(212, 201, 207, .33)";
      chromaEl.innerHTML = presLunarResult;
       
    }else if (sennaAllSkins.includes("Bewitching")){
        const sennaBewChroma = sennaSkin[7].chroma[Math.floor(Math.random() * 9)];
        resultEl.style.backgroundImage = "url('img/senna_skins/bewitching.jpg')";
        resultEl.style.boxShadow = "0 0 45px 50px rgba(74, 119, 105, .33)";
        if(sennaBewChroma.includes("default")){
          const sennaBewResult = "Your skin is " + sennaAllSkins + " Senna with classic look!";
          chromaEl.innerHTML = sennaBewResult
        }else{
        const sennaBewResult = "Your skin is " + sennaAllSkins + " Senna with " + sennaBewChroma + " chroma!";
        chromaEl.innerHTML = sennaBewResult
        };
    };
  };