const champEl = document.querySelector(".result-champion");
const skinEl = document.querySelector(".result-skin");
const chromaEl = document.querySelector(".result-chroma");

champEl.innerHTML = "";
skinEl.innerHTML = "";
chromaEl.innerHTML = "";


const allChampions = [
    {
        champion: "Pyke",
        skin: "Sand Wraith Pyke",
        chroma:[
          "Default",
          "Catseye",
          "Obsidian",
          "Pearl",
          "Rose Quartz",
          "Sapphire",
          "Tanzanite",
          "Turquoise"
        ]
      },
      {
        champion: "Pyke",
        skin: "Blood Moon Pyke",
        chroma: [
          "Default",
          "Aquamarine",
          "Citrine",
          "Obsidian",
          "Pearl",
          "Rose Quartz",
          "Ruby"
        ]
      },
]