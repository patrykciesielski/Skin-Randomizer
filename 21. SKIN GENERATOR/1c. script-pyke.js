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

/* SLIDER SKINS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
const classicSkin = document.getElementById("classic");
const sandSkin = document.getElementById("sand");
const bloodSkin = document.getElementById("blood");
const projectSkin = document.getElementById("project");
const psyopsSkin = document.getElementById("psyops");
const sentinelSkin = document.getElementById("sentinel");
const ashenSkin = document.getElementById("ashen");
const empySkin = document.getElementById("empy");
/* SLIDER SKINS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

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
    rollEl.classList.remove("active");
});

/* IMG SLIDER @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
updateImg();

function updateImg(){
    if (currentImg > allImgEl.length){
        currentImg = 1;
    }else if(currentImg < 1){
        currentImg = allImgEl.length;
    }
    imagesEl.style.transform = `translateX(-${(currentImg - 1) * 1002}px)`;
    timeout = setTimeout(() => {
        currentImg++
        updateImg()
    }, 6666);
};
/* IMG SLIDER @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

const pykeSkin = [
    {
      skin: "Classic Pyke",
    },
    {
      skin: "Sand Wraith Pyke",
      chroma:[
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
      skin: "Blood Moon Pyke",
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
      skin: "Project Pyke",
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
      skin: "PsyOps Pyke",
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
      skin: "Sentinel Pyke",
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
      skin: "Ashen Knight Pyke",
      chroma: [
        "default",
        "Emberwoken"
      ]
    },
    {
      skin: "Empyrean Pyke",
      chroma: [
        "default",
        "2nd",
        "3rd",
        "4th",
        "5th",
        "6th",
        "7th"
      ]
    }
  ];

randomBtnEl.addEventListener("click", randomChroma());

function randomChroma(){
    const pykeAllSkins = pykeSkin[Math.floor(Math.random() * pykeSkin.length)].skin;
    const resultEl = document.querySelector(".result");
    const chromaEl = document.querySelector(".pyke-chroma");
    
    if (pykeAllSkins.includes("Classic")) {
      const pykeClassicResult = "Your skin is " + pykeAllSkins + "!";
        resultEl.style.backgroundImage = "url('img/pyke_skins/1classic.jpg')";
        resultEl.style.boxShadow = "0 0 45px 60px rgba(39, 95, 82, .33)";
        chromaEl.innerHTML = pykeClassicResult;
      
    }else if (pykeAllSkins.includes("Sand")){
      const pykeSandChroma = pykeSkin[1].chroma[Math.floor(Math.random() * 8)];
      resultEl.style.backgroundImage = "url('img/pyke_skins/1sand.jpg')";
      resultEl.style.boxShadow = "0 0 45px 60px rgba(159, 122, 85, .33)";

      if(pykeSandChroma.includes("default")){
        const pykeSandResult = "Your skin is " + pykeAllSkins + " with classic look!";
        chromaEl.innerHTML = pykeSandResult
      }else{
      const pykeSandResult = "Your skin is " + pykeAllSkins + " with " + pykeSandChroma + " chroma!";
      chromaEl.innerHTML = pykeSandResult
      };
      
    }else if (pykeAllSkins.includes("Blood")){
      const pykeBloodChroma = pykeSkin[2].chroma[Math.floor(Math.random() * 7)];
      resultEl.style.backgroundImage = "url('img/pyke_skins/1blood.jpg')";
      resultEl.style.boxShadow = "0 0 45px 60px rgba(51, 56, 69, .33)";

      if(pykeBloodChroma.includes("default")){
        const pykeBloodResult = "Your skin is " + pykeAllSkins + " with classic look!";
        chromaEl.innerHTML = pykeBloodResult
      }else{
      const pykeBloodResult = "Your skin is " + pykeAllSkins + " with " + pykeBloodChroma + " chroma!";
      chromaEl.innerHTML = pykeBloodResult
      };
       
    }else if (pykeAllSkins.includes("Project")){
      const pykeProjectChroma = pykeSkin[3].chroma[Math.floor(Math.random() * 9)];
      resultEl.style.backgroundImage = "url('img/pyke_skins/1project.jpg')";
      resultEl.style.boxShadow = "0 0 45px 60px rgba(79, 63, 125, .33)";

      if(pykeProjectChroma.includes("default")){
        const pykeProjectResult = "Your skin is " + pykeAllSkins + " with classic look!";
        chromaEl.innerHTML = pykeProjectResult
      }else{
      const pykeProjectResult = "Your skin is " + pykeAllSkins + " with " + pykeProjectChroma + " chroma!";
      chromaEl.innerHTML = pykeProjectResult
      };
       
    }else if (pykeAllSkins.includes("Psy")){
      const pykePsyChroma = pykeSkin[4].chroma[Math.floor(Math.random() * 9)];
      resultEl.style.backgroundImage = "url('img/pyke_skins/1psyops.jpg')";
      resultEl.style.boxShadow = "0 0 45px 60px rgba(33, 62, 129, .33)";

      if(pykePsyChroma.includes("default")){
        const pykePsyResult = "Your skin is " + pykeAllSkins + " with classic look!";
        chromaEl.innerHTML = pykePsyResult
      }else{
      const pykePsyResult = "Your skin is " + pykeAllSkins + " with " + pykePsyChroma + " chroma!";
      chromaEl.innerHTML = pykePsyResult
      };
       
    }else if (pykeAllSkins.includes("Sentinel")){
      const pykeSentinelChroma = pykeSkin[5].chroma[Math.floor(Math.random() * 10)];
      resultEl.style.backgroundImage = "url('img/pyke_skins/1sentinel.jpg')";
      resultEl.style.boxShadow = "0 0 45px 60px rgba(38, 57, 65, .33)";

      if(pykeSentinelChroma.includes("default")){
        const pykeSentinelResult = "Your skin is " + pykeAllSkins + " with classic look!";
        chromaEl.innerHTML = pykeSentinelResult
      }else{
      const pykeSentinelResult = "Your skin is " + pykeAllSkins + " with " + pykeSentinelChroma + " chroma!";
      chromaEl.innerHTML = pykeSentinelResult
      };
       
    }else if (pykeAllSkins.includes("Ashen")){
      const pykeAshenChroma = pykeSkin[6].chroma[Math.floor(Math.random() * 2)];
      resultEl.style.backgroundImage = "url('img/pyke_skins/1ashen.jpg')";
      resultEl.style.boxShadow = "0 0 45px 60px rgba(151, 152, 206, .33)";

      if(pykeAshenChroma.includes("default")){
        const pykeAshenResult = "Your skin is " + pykeAllSkins + " with classic look!";
        chromaEl.innerHTML = pykeAshenResult
      }else{
      const pykeAshenResult = "Your skin is " + pykeAllSkins + " with " + pykeAshenChroma + " chroma!";
      chromaEl.innerHTML = pykeAshenResult
      };
       
    }else if (pykeAllSkins.includes("Empy")){
      const pykeEmpyChroma = pykeSkin[7].chroma[Math.floor(Math.random() * 7)];
      resultEl.style.backgroundImage = "url('img/pyke_skins/1empyrean.jpg')";
      resultEl.style.boxShadow = "0 0 45px 60px rgba(254, 246, 167, .33)";

      if(pykeEmpyChroma.includes("default")){
        const pykeEmpyResult = "Your skin is " + pykeAllSkins + " with classic look!";
        chromaEl.innerHTML = pykeEmpyResult
      }else{
      const pykeEmpyResult = "Your skin is " + pykeAllSkins + " with " + pykeEmpyChroma + " chroma!";
      chromaEl.innerHTML = pykeEmpyResult
      };
    };
  };

  
