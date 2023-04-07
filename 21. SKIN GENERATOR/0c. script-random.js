const champEl = document.querySelector(".result-champion");
const skinEl = document.querySelector(".result-skin");
const chromaEl = document.querySelector(".result-chroma");

const championList = ["Pyke", "Senna", "Swain", "Thresh", "Rakan", "Seraphine"];

/* OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS */

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

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

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

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

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

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

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
  }
];

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

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

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

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

/* OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS */

function randomChampion(){
  const championResult = championList[Math.floor(Math.random() * championList.length)];
  champEl.innerHTML = championResult;

/* PYKE PYKE PYKE PYKE PYKE PYKE PYKE PYKE PYKE PYKE PYKE PYKE PYKE PYKE PYKE PYKE PYKE PYKE PYKE PYKE */

  if (championResult.includes("Pyke")){
    const pykeSkinResult = pykeSkin[Math.floor(Math.random() * pykeSkin.length)].skin;
    skinEl.innerHTML = pykeSkinResult;

    if (pykeSkinResult.includes("Classic")){
      chromaEl.innerHTML = "This skin has no chromas yet!";
      skinEl.innerHTML = "Classic Pyke Skin"

    }else if (pykeSkinResult.includes("Sand")){
      const pykeSandChroma = pykeSkin[1].chroma[Math.floor(Math.random() * 8)];

      if (pykeSandChroma.includes("default")){
        chromaEl.innerHTML = "Classic look!"
      }else{
      chromaEl.innerHTML = pykeSandChroma + " chroma";
      };  

    }else if (pykeSkinResult.includes("Blood")){
      const pykeBloodChroma = pykeSkin[2].chroma[Math.floor(Math.random() * 7)];

        if (pykeBloodChroma.includes("default")){
          chromaEl.innerHTML = "Classic look!"
        }else{
          chromaEl.innerHTML = pykeBloodChroma + " chroma";
        };

    }else if (pykeSkinResult.includes("Project")){
      const pykeProjectChroma = pykeSkin[3].chroma[Math.floor(Math.random() * 9)];

      if (pykeProjectChroma.includes("default")){
        chromaEl.innerHTML = "Classic look!"
      }else{
        chromaEl.innerHTML = pykeProjectChroma + " chroma";
      };

    }else if (pykeSkinResult.includes("PsyOps")){
      const pykePsyChroma = pykeSkin[4].chroma[Math.floor(Math.random() * 9)];

      if (pykePsyChroma.includes("default")){
        chromaEl.innerHTML = "Classic look!"
      }else{
        chromaEl.innerHTML = pykePsyChroma + " chroma";
      };

    }else if (pykeSkinResult.includes("Sentinel")){
      const pykeSentinelChroma = pykeSkin[5].chroma[Math.floor(Math.random() * 10)];

      if (pykeSentinelChroma.includes("default")){
        chromaEl.innerHTML = "Classic look!"
      }else{
        chromaEl.innerHTML = pykeSentinelChroma + " chroma";
      };

    }else if (pykeSkinResult.includes("Ashen")){
      const pykeAshenChroma = pykeSkin[6].chroma[Math.floor(Math.random() * 2)];

      if (pykeAshenChroma.includes("default")){
        chromaEl.innerHTML = "Classic look!"
      }else{
        chromaEl.innerHTML = pykeAshenChroma + " chroma"
      };

    }else if (pykeSkinResult.includes("Empy")){
      const pykeEmpyChroma = pykeSkin[7].chroma[Math.floor(Math.random() * 7)];

      if (pykeEmpyChroma.includes("default")){
        chromaEl.innerHTML = "Classic look!"
      }else{
        chromaEl.innerHTML = pykeEmpyChroma + " chroma"
      };
    }

/* SENNA SENNA SENNA SENNA SENNA SENNA SENNA SENNA SENNA SENNA SENNA SENNA SENNA SENNA SENNA SENNA SENNA SENNA */

  }else if (championResult.includes("Senna")){
    const sennaSkinResult = sennaSkin[Math.floor(Math.random() * sennaSkin.length)].skin;
    skinEl.innerHTML = sennaSkinResult;

    if (sennaSkinResult.includes("Classic")){
      chromaEl.innerHTML = "This skin has no chromas yet!";
      skinEl.innerHTML = "Classic Senna Skin"

    }else if (sennaSkinResult.includes("True Damage Senna")){
      const sennaTrueChroma = sennaSkin[1].chroma[Math.floor(Math.random() * 8)];

      if (sennaTrueChroma.includes("default")){
        chromaEl.innerHTML = "Classic look!"
      }else{
      chromaEl.innerHTML = sennaTrueChroma + " chroma";
      };  

    }else if (sennaSkinResult.includes("Prestige True Damage")){
      chromaEl.innerHTML = "This skin has no chromas yet!";
      skinEl.innerHTML = sennaSkinResult + " Senna";

    }else if (sennaSkinResult.includes("High")){
      const sennaHighChroma = sennaSkin[3].chroma[Math.floor(Math.random() * 7)];
      skinEl.innerHTML = sennaSkinResult + " Senna";

      if (sennaHighChroma.includes("default")){
        chromaEl.innerHTML = "Classic look!"
      }else{
      chromaEl.innerHTML = sennaHighChroma + " chroma";
      };  

    }else if (sennaSkinResult.includes("Project")){
      const sennaProChroma = sennaSkin[4].chroma[Math.floor(Math.random() * 10)];
      skinEl.innerHTML = sennaSkinResult + " Senna";

      if (sennaProChroma.includes("default")){
        chromaEl.innerHTML = "Classic look!"
      }else{
      chromaEl.innerHTML = sennaProChroma + " chroma";
      };  

    }else if (sennaSkinResult.includes("Lunar Eclipse Senna")){
      const sennaLunarChroma = sennaSkin[5].chroma[Math.floor(Math.random() * 9)];

      if (sennaLunarChroma.includes("default")){
        chromaEl.innerHTML = "Classic look!"
      }else{
      chromaEl.innerHTML = sennaLunarChroma + " chroma";
      };  

    }else if (sennaSkinResult.includes("Prestige Lunar")){
      chromaEl.innerHTML = "This skin has no chromas yet!";
      skinEl.innerHTML = sennaSkinResult + " Senna";

    }else if (sennaSkinResult.includes("Bewitching")){
      const sennaBewChroma = sennaSkin[7].chroma[Math.floor(Math.random() * 9)];

      if (sennaBewChroma.includes("default")){
        chromaEl.innerHTML = "Classic look!"
      }else{
      chromaEl.innerHTML = sennaBewChroma + " chroma";
      };  
    }

/* SWAIN SWAIN SWAIN SWAIN SWAIN SWAIN SWAIN SWAIN SWAIN SWAIN SWAIN SWAIN SWAIN SWAIN SWAIN SWAIN SWAIN SWAIN SWAIN */

  }else if (championResult.includes("Swain")){
    const swainSkinResult = swainSkin[Math.floor(Math.random() * swainSkin.length)].skin;
    skinEl.innerHTML = swainSkinResult;

    if (swainSkinResult.includes("Classic")){
      chromaEl.innerHTML = "This skin has no chromas yet!";
      skinEl.innerHTML = "Classic Swain Skin"

    }else if (swainSkinResult.includes("North")){
      chromaEl.innerHTML = "This skin has no chromas yet!";
      skinEl.innerHTML = swainSkinResult

    }else if (swainSkinResult.includes("Bilgewater")){
      chromaEl.innerHTML = "This skin has no chromas yet!";
      skinEl.innerHTML = swainSkinResult

    }else if (swainSkinResult.includes("Tyrant")){
      chromaEl.innerHTML = "This skin has no chromas yet!";
      skinEl.innerHTML = swainSkinResult

    }else if (swainSkinResult.includes("Dragon")){
      const swainDragonChroma = swainSkin[4].chroma[Math.floor(Math.random() * 7)];

      if (swainDragonChroma.includes("default")){
        chromaEl.innerHTML = "Classic look!"
      }else{
      chromaEl.innerHTML = swainDragonChroma + " chroma";
      };  

    }else if (swainSkinResult.includes("Crystal")){
      const swainCrystalChroma = swainSkin[5].chroma[Math.floor(Math.random() * 10)];

      if (swainCrystalChroma.includes("default")){
        chromaEl.innerHTML = "Classic look!"
      }else{
      chromaEl.innerHTML = swainCrystalChroma + " chroma";
      };  

    }else if (swainSkinResult.includes("Hextech")){
      chromaEl.innerHTML = "This skin has no chromas yet!";
      skinEl.innerHTML = swainSkinResult

    }else if (swainSkinResult.includes("Winter")){
      const swainWinterChroma = swainSkin[7].chroma[Math.floor(Math.random() * 10)];

      if (swainWinterChroma.includes("default")){
        chromaEl.innerHTML = "Classic look!"
      }else{
      chromaEl.innerHTML = swainWinterChroma + " chroma";
      };
    }
    
/* THRESH THRESH THRESH THRESH THRESH THRESH THRESH THRESH THRESH THRESH THRESH THRESH THRESH THRESH THRESH THRESH */

}else if (championResult.includes("Thresh")){
  const threshSkinResult = threshSkin[Math.floor(Math.random() * threshSkin.length)].skin;
  skinEl.innerHTML = threshSkinResult;

  if (threshSkinResult.includes("Classic")){
    chromaEl.innerHTML = "This skin has no chromas yet!";
    skinEl.innerHTML = "Classic Thresh Skin"

  }else if (threshSkinResult.includes("Deep")){
    chromaEl.innerHTML = "This skin has no chromas yet!";
    skinEl.innerHTML = threshSkinResult

  }else if (threshSkinResult.includes("Championship")){
    const threshChampChroma = threshSkin[2].chroma[Math.floor(Math.random() * 2)];

    if (threshChampChroma.includes("default")){
      chromaEl.innerHTML = "Classic look!"
    }else{
    chromaEl.innerHTML = threshChampChroma + " chroma";
    };  

  }else if (threshSkinResult.includes("Blood")){
    chromaEl.innerHTML = "This skin has no chromas yet!";
    skinEl.innerHTML = threshSkinResult

  }else if (threshSkinResult.includes("SSW")){
    chromaEl.innerHTML = "This skin has no chromas yet!";
    skinEl.innerHTML = threshSkinResult

  }else if (threshSkinResult.includes("Dark Star")){
    const threshDarkChroma = threshSkin[5].chroma[Math.floor(Math.random() * 2)];

    if (threshDarkChroma.includes("default")){
      chromaEl.innerHTML = "Classic look!"
    }else{
    chromaEl.innerHTML = threshDarkChroma + " chroma";
    };  

  }else if (threshSkinResult.includes("High")){
    const threshHighChroma = threshSkin[6].chroma[Math.floor(Math.random() * 6)];

    if (threshHighChroma.includes("default")){
      chromaEl.innerHTML = "Classic look!"
    }else{
    chromaEl.innerHTML = threshHighChroma + " chroma";
    };  

  }else if (threshSkinResult.includes("Pulsfire Thresh")){
    chromaEl.innerHTML = "This skin has no chromas yet!";
    skinEl.innerHTML = threshSkinResult

  }else if (threshSkinResult.includes("Prestige Pulsfire")){
    chromaEl.innerHTML = "This skin has no chromas yet!";
    skinEl.innerHTML = threshSkinResult + " Thresh"

  }else if (threshSkinResult.includes("FPX")){
    const threshFPXChroma = threshSkin[9].chroma[Math.floor(Math.random() * 2)];

    if (threshFPXChroma.includes("default")){
      chromaEl.innerHTML = "Classic look!"
    }else{
    chromaEl.innerHTML = threshFPXChroma + " chroma";
    };  

  }else if (threshSkinResult.includes("Spirit")){
    const threshSpiritChroma = threshSkin[10].chroma[Math.floor(Math.random() * 9)];

    if (threshSpiritChroma.includes("default")){
      chromaEl.innerHTML = "Classic look!"
    }else{
    chromaEl.innerHTML = threshSpiritChroma + " chroma";
    };  

  }else if (threshSkinResult.includes("Unbound")){
    chromaEl.innerHTML = "This skin has no chromas yet!";
    skinEl.innerHTML = threshSkinResult

  }else if (threshSkinResult.includes("Steel")){
    const threshSteelChroma = threshSkin[12].chroma[Math.floor(Math.random() * 10)];

    if (threshSteelChroma.includes("default")){
      chromaEl.innerHTML = "Classic look!"
    }else{
    chromaEl.innerHTML = threshSteelChroma + " chroma";
    };  

  }else if (threshSkinResult.includes("Lunar")){
    const threshLunarChroma = threshSkin[13].chroma[Math.floor(Math.random() * 10)];

    if (threshLunarChroma.includes("default")){
      chromaEl.innerHTML = "Classic look!"
    }else{
    chromaEl.innerHTML = threshLunarChroma + " chroma";
    };  
  }

/*RAKAN RAKAN RAKAN RAKAN RAKAN RAKAN RAKAN RAKAN RAKAN RAKAN RAKAN RAKAN RAKAN RAKAN RAKAN RAKAN RAKAN RAKAN RAKAN */

}else if (championResult.includes("Rakan")){
  const rakanSkinResult = rakanSkin[Math.floor(Math.random() * rakanSkin.length)].skin;
  skinEl.innerHTML = rakanSkinResult;

  if (rakanSkinResult.includes("Classic")){
    chromaEl.innerHTML = "This skin has no chromas yet!";
    skinEl.innerHTML = "Classic Rakan Skin"

  }else if (rakanSkinResult.includes("Cosmic")){
    chromaEl.innerHTML = "This skin has no chromas yet!";
    skinEl.innerHTML = rakanSkinResult

  }else if (rakanSkinResult.includes("Sweetheart")){
    chromaEl.innerHTML = "This skin has no chromas yet!";
    skinEl.innerHTML = rakanSkinResult

  }else if (rakanSkinResult.includes("SSG")){
    chromaEl.innerHTML = "This skin has no chromas yet!";
    skinEl.innerHTML = rakanSkinResult

  }else if (rakanSkinResult.includes("IG")){
    chromaEl.innerHTML = "This skin has no chromas yet!";
    skinEl.innerHTML = rakanSkinResult

  }else if (rakanSkinResult.includes("Star")){
    const rakanStarChroma = rakanSkin[5].chroma[Math.floor(Math.random() * 4)];

    if (rakanStarChroma.includes("default")){
      chromaEl.innerHTML = "Classic look!"
    }else{
      chromaEl.innerHTML = rakanStarChroma + " chroma";
    };

  }else if (rakanSkinResult.includes("Elderwood")){
    const rakanElderChroma = rakanSkin[6].chroma[Math.floor(Math.random() * 9)];

    if (rakanElderChroma.includes("default")){
      chromaEl.innerHTML = "Classic look!"
    }else{
      chromaEl.innerHTML = rakanElderChroma + " chroma"
    };

  }else if (rakanSkinResult.includes("Arcana")){
    const rakanArcanaChroma = rakanSkin[7].chroma[Math.floor(Math.random() * 9)];

    if (rakanArcanaChroma.includes("default")){
      chromaEl.innerHTML = "Classic look!"
    }else{
      chromaEl.innerHTML = rakanArcanaChroma + " chroma"
    };

  }else if (rakanSkinResult.includes("Broken")){
    const rakanBrokenChroma = rakanSkin[8].chroma[Math.floor(Math.random() * 9)];

    if (rakanBrokenChroma.includes("default")){
      chromaEl.innerHTML = "Classic look!"
    }else{
      chromaEl.innerHTML = rakanBrokenChroma + " chroma"
    };
  }

/* SERAPHINE SERAPHINE SERAPHINE SERAPHINE SERAPHINE SERAPHINE SERAPHINE SERAPHINE SERAPHINE SERAPHINE SERAPHINE SERAPHINE SERAPHINE */

  }else if (championResult.includes("Seraphine")){
    const seraSkinResult = seraSkin[Math.floor(Math.random() * seraSkin.length)].skin;
    skinEl.innerHTML = seraSkinResult;

    if (seraSkinResult.includes("Classic")){
      chromaEl.innerHTML = "This skin has no chromas yet!";
      skinEl.innerHTML = "Classic Seraphine Skin"

    }else if (seraSkinResult.includes("Indie")){
      chromaEl.innerHTML = "This skin has no chromas yet!";
      skinEl.innerHTML = seraSkinResult

    }else if (seraSkinResult.includes("Rising")){
      chromaEl.innerHTML = "This skin has no chromas yet!";
      skinEl.innerHTML = seraSkinResult

    }else if (seraSkinResult.includes("Superstar")){
      chromaEl.innerHTML = "This skin has no chromas yet!";
      skinEl.innerHTML = seraSkinResult

    }else if (seraSkinResult.includes("Graceful")){
      const seraGraceChroma = seraSkin[4].chroma[Math.floor(Math.random() * 10)];
      skinEl.innerHTML = seraSkinResult

      if (seraGraceChroma.includes("default")){
        chromaEl.innerHTML = "Classic look!"
      }else{
      chromaEl.innerHTML = seraGraceChroma + " chroma";
      };  

    }else if (seraSkinResult.includes("Ocean Song Seraphine")){
      const seraOceanChroma = seraSkin[5].chroma[Math.floor(Math.random() * 9)];

      if (seraOceanChroma.includes("default")){
        chromaEl.innerHTML = "Classic look!"
      }else{
      chromaEl.innerHTML = seraOceanChroma + " chroma";
      };  

    }else if (seraSkinResult.includes("Prestige Ocean Song")){
      chromaEl.innerHTML = "This skin has no chromas yet!";
      skinEl.innerHTML = seraSkinResult + " Seraphine";

    }else if (seraSkinResult.includes("Faerie")){
      const seraFaerieChroma = seraSkin[7].chroma[Math.floor(Math.random() * 10)];

      if (seraFaerieChroma.includes("default")){
        chromaEl.innerHTML = "Classic look!"
      }else{
      chromaEl.innerHTML = seraFaerieChroma + " chroma";
      };  
    }
  }
};
