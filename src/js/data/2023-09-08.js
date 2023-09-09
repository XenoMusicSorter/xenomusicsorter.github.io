dataSetVersion = "2023-09-08"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Song Role",
    key: "role",
    tooltip: "Check this to restrict to certain song roles.",
    checked: false,
    sub: [
      { name: "Title Themes", key: "title" },
      { name: "Vocal Tracks", key: "vocal", tooltip: "This does NOT include choirs or Kajiurago!" },
      { name: "Area Themes", key: "area" },
      { name: "Day Themes", key: "day" },
      { name: "Night Themes", key: "night" },
      { name: "Battle Themes", key: "battle" },
      { name: "Final Boss Themes", key: "boss" },
    ]
  },
  {
    name: "Filter by Composers",
    key: "composers",
    tooltip: "Check this to restrict to certain composers.",
    checked: false,
    sub: [
      { name: "Mitsuda", key: "mitsuda" },
      { name: "Kajiura", key: "kajiura" },
      { name: "Shimomura", key: "shimomura" },
      { name: "Narita", key: "narita" },
      { name: "Kiyota", key: "kiyota" },
      { name: "Hiramatsu", key: "hiramatsu" },
      { name: "ACE+", key: "ace" },
      { name: "Kameoka", key: "kameoka" },
      { name: "Yoshimura", key: "yoshimura" },
      { name: "Sawano", key: "sawano" },
      { name: "Abounnasr", key: "abounnasr" },
      { name: "Kunigo", key: "kunigo" },
      { name: "Fujii", key: "fujii" },
      { name: "Noguchi", key: "noguchi" },
      { name: "Yagi", key: "yagi" }
    ]
  },
  {
    name: "Filter by Game",
    key: "games",
    tooltip: "Check this to restrict by game.",
    checked: false,
    sub: [
      { name: "Xenogears", key: "XG" },
      { name: "Xenosaga Episode 1", key: "XS1" },
      { name: "Xenosaga Episode 2", key: "XS2" },
      { name: "Xenosaga Episode 3", key: "XS3" },
      { name: "Xenoblade Chronicles", key: "XC1" },
      { name: "Future Connected", key: "FC" },
      { name: "Xenoblade Chronicles X", key: "XCX" },
      { name: "Xenoblade Chronicles 2", key: "XC2" },
      { name: "The Golden Country", key: "TGC" },
      { name: "Xenoblade Chronicles 3", key: "XC3" },
      { name: "Future Redeemed", key: "FR"}
    ]
  },
  {
    name: "Restrict Spoilers",
    key: "spoiler",
    tooltip: "Check this to restrict spoilers.",
    checked: false
  },
  {
    name: "Restrict Duplicates",
    key: "duplicate",
    tooltip: "Check this to restrict duplicates.",
    checked: false
  }
];

dataSet[dataSetVersion].songData = [
  // Xenogears
  {
    name: "Dark Daybreak",
    img: "XG.png",
    music: "XG/1.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "STARS OF TEARS (OUT TAKE)",
    img: "XG.png",
    music: "XG/2.mp3",
    opts: {
      role: ["vocal"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Bonds of Sea and Flame",
    img: "XG.png",
    music: "XG/3.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "My Village is Number One!",
    img: "XG.png",
    music: "XG/4.mp3",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Valley Where the Wind Is Born",
    img: "XG.png",
    music: "XG/5.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Faraway Promise",
    img: "XG.png",
    music: "XG/6.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Steel Giant",
    img: "XG.png",
    music: "XG/7.mp3",
    opts: {
      role: ["battle"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "The Blackmoon Forest",
    img: "XG.png",
    music: "XG/8.mp3",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Where the Egg of Dreams Hatches",
    img: "XG.png",
    music: "XG/9.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Dozing Off (Short Version)",
    img: "XG.png",
    music: "XG/10.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XG"],
    },
    duplicate: true,
  },
  {
    name: "Dazil, Town of Burning Sands",
    img: "XG.png",
    music: "XG/11.mp3",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Aspiration",
    img: "XG.png",
    music: "XG/12.mp3",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Grahf, Ruler of Darkness",
    img: "XG.png",
    music: "XG/13.mp3",
    opts: {
      role: ["battle"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Fuse",
    img: "XG.png",
    music: "XG/14.mp3",
    opts: {
      role: ["battle"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "After the Soldiers' Dream",
    img: "XG.png",
    music: "XG/15.mp3",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Unstealable Jewel",
    img: "XG.png",
    music: "XG/16.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Aveh, The Ancient Dance",
    img: "XG.png",
    music: "XG/17.mp3",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Invasion",
    img: "XG.png",
    music: "XG/18.mp3",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Stage of Death",
    img: "XG.png",
    music: "XG/19.mp3",
    opts: {
      role: ["battle"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "In A Dark Slumber...",
    img: "XG.png",
    music: "XG/20.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "The Gentle Breeze Sings",
    img: "XG.png",
    music: "XG/21.mp3",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Our Wounded Bodies Shall Advance Towards the Light",
    img: "XG.png",
    music: "XG/22.mp3",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "lost... Broken Shards",
    img: "XG.png",
    music: "XG/23.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Thames, Spirit of the Men of the Sea",
    img: "XG.png",
    music: "XG/24.mp3",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "The Blue Traveler",
    img: "XG.png",
    music: "XG/25.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "In a Prison of Peace and Regret",
    img: "XG.png",
    music: "XG/26.mp3",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Jaws of Ice",
    img: "XG.png",
    music: "XG/27.mp3",
    opts: {
      role: ["area", "battle"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Crimson Knight",
    img: "XG.png",
    music: "XG/28.mp3",
    opts: {
      role: ["battle"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "October Mermaid",
    img: "XG.png",
    music: "XG/29.mp3",
    opts: {
      role: ["battle"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "The Wind Calls to Shevat in the Blue Sky",
    img: "XG.png",
    music: "XG/30.mp3",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "The Sky, the Clouds, and You",
    img: "XG.png",
    music: "XG/31.mp3",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "A Gathering of Stars in the Night Sky",
    img: "XG.png",
    music: "XG/32.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Tears of the Stars, Thoughts of the People",
    img: "XG.png",
    music: "XG/33.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Flight",
    img: "XG.png",
    music: "XG/34.mp3",
    opts: {
      role: ["battle"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Wings",
    img: "XG.png",
    music: "XG/35.mp3",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Solaris, Celestial Paradise",
    img: "XG.png",
    music: "XG/36.mp3",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Dozing Off (Long Version)",
    img: "XG.png",
    music: "XG/37.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "The One Who is Torn Apart",
    img: "XG.png",
    music: "XG/38.mp3",
    opts: {
      role: ["area", "battle"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "A Prayer for the Joy Man Desires",
    img: "XG.png",
    music: "XG/39.mp3",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Premonition",
    img: "XG.png",
    music: "XG/40.mp3",
    opts: {
      role: ["area", "battle"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Awakening",
    img: "XG.png",
    music: "XG/41.mp3",
    opts: {
      role: ["battle", "boss"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "One Who Bares Fangs at God",
    img: "XG.png",
    music: "XG/42.mp3",
    opts: {
      role: ["battle", "boss"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "The Beginning and the End",
    img: "XG.png",
    music: "XG/43.mp3",
    opts: {
      role: ["vocal"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "SMALL TWO OF PIECES ~Broken Shards~",
    img: "XG.png",
    music: "XG/44.mp3",
    opts: {
      role: ["vocal"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  // Xenosaga Episode 1
  {
    name: "Prologue",
    img: "XS1.png",
    music: "XS1/1.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Opening",
    img: "XS1.png",
    music: "XS1/2.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Battle",
    img: "XS1.png",
    music: "XS1/3.mp3",
    opts: {
      role: ["battle"],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Battle's End",
    img: "XS1.png",
    music: "XS1/4.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Startup Test",
    img: "XS1.png",
    music: "XS1/5.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Reminiscence",
    img: "XS1.png",
    music: "XS1/6.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Gnosis",
    img: "XS1.png",
    music: "XS1/7.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Awakening",
    img: "XS1.png",
    music: "XS1/8.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Shion's Crisis",
    img: "XS1.png",
    music: "XS1/9.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Battling KOS-MOS",
    img: "XS1.png",
    music: "XS1/10.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Sorrow",
    img: "XS1.png",
    music: "XS1/11.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Life or Death",
    img: "XS1.png",
    music: "XS1/12.mp3",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Game Over",
    img: "XS1.png",
    music: "XS1/13.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Margulis",
    img: "XS1.png",
    music: "XS1/14.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Pursued Spaceship",
    img: "XS1.png",
    music: "XS1/15.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Relief",
    img: "XS1.png",
    music: "XS1/16.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Everyday",
    img: "XS1.png",
    music: "XS1/17.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "U.M.N.MODE",
    img: "XS1.png",
    music: "XS1/18.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Durandal",
    img: "XS1.png",
    music: "XS1/19.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Invading the Enemy Ship",
    img: "XS1.png",
    music: "XS1/20.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "U-TIC Organization",
    img: "XS1.png",
    music: "XS1/21.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "The Girl Who Closed Her Heart",
    img: "XS1.png",
    music: "XS1/22.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Kookai Foundation",
    img: "XS1.png",
    music: "XS1/23.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Shion ~Memories of the Past~",
    img: "XS1.png",
    music: "XS1/24.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Ormus",
    img: "XS1.png",
    music: "XS1/25.mp3",
    opts: {
      role: ["vocal", "area"],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Nephilim",
    img: "XS1.png",
    music: "XS1/26.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Warmth",
    img: "XS1.png",
    music: "XS1/27.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Anxiety",
    img: "XS1.png",
    music: "XS1/28.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "The Resurrection",
    img: "XS1.png",
    music: "XS1/29.mp3",
    opts: {
      role: ["vocal"],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "The Beach of Nothingness",
    img: "XS1.png",
    music: "XS1/30.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Green Sleeves",
    img: "XS1.png",
    music: "XS1/31.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Zarathustra",
    img: "XS1.png",
    music: "XS1/32.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "KOS-MOS",
    img: "XS1.png",
    music: "XS1/33.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Panic",
    img: "XS1.png",
    music: "XS1/34.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Song of Nephilim",
    img: "XS1.png",
    music: "XS1/35.mp3",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "The Miracle",
    img: "XS1.png",
    music: "XS1/36.mp3",
    opts: {
      role: ["vocal"],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Inner Space",
    img: "XS1.png",
    music: "XS1/37.mp3",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Albedo",
    img: "XS1.png",
    music: "XS1/38.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Omega",
    img: "XS1.png",
    music: "XS1/39.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Proto Merkabah",
    img: "XS1.png",
    music: "XS1/40.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Last Battle",
    img: "XS1.png",
    music: "XS1/41.mp3",
    opts: {
      role: ["battle", "boss"],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Pain",
    img: "XS1.png",
    music: "XS1/42.mp3",
    opts: {
      role: ["vocal"],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Escape",
    img: "XS1.png",
    music: "XS1/43.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Kokoro",
    img: "XS1.png",
    music: "XS1/44.mp3",
    opts: {
      role: ["vocal"],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Shion ~Emotion~",
    img: "XS1.png",
    music: "XS1/45.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  // Xenosaga Episode 2
  {
    name: "in the beginning, there was...",
    img: "XS2.png",
    music: "XS2/1.mp3",
    opts: {
      role: ["title"],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "first meeting",
    img: "XS2.png",
    music: "XS2/2.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "Xenosaga II opening theme",
    img: "XS2.png",
    music: "XS2/3.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "assault",
    img: "XS2.png",
    music: "XS2/4.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "strain~Jin",
    img: "XS2.png",
    music: "XS2/5.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "here he comes",
    img: "XS2.png",
    music: "XS2/6.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "fatal fight (Jin & Margulis)",
    img: "XS2.png",
    music: "XS2/7.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "R&D report",
    img: "XS2.png",
    music: "XS2/8.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "chase",
    img: "XS2.png",
    music: "XS2/9.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "surrounded",
    img: "XS2.png",
    music: "XS2/10.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "lamentation",
    img: "XS2.png",
    music: "XS2/11.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "Albedo",
    img: "XS2.png",
    music: "XS2/12.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "communication breakdown",
    img: "XS2.png",
    music: "XS2/13.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "Sakura (theme-piano ver.)",
    img: "XS2.png",
    music: "XS2/14.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "Sakura #2 (theme-simple voc.ver.)",
    img: "XS2.png",
    music: "XS2/15.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "strained",
    img: "XS2.png",
    music: "XS2/16.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "Jr. #2",
    img: "XS2.png",
    music: "XS2/17.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "strained #2~Albedo #2",
    img: "XS2.png",
    music: "XS2/18.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "in the beginning. there was... #2",
    img: "XS2.png",
    music: "XS2/19.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "battle of Elsa",
    img: "XS2.png",
    music: "XS2/20.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "here she comes (KOS-MOS)",
    img: "XS2.png",
    music: "XS2/21.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "battle of Elsa #2",
    img: "XS2.png",
    music: "XS2/22.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "gate out",
    img: "XS2.png",
    music: "XS2/23.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "here he comes #2",
    img: "XS2.png",
    music: "XS2/24.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "creeping fear",
    img: "XS2.png",
    music: "XS2/25.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "U-DO~Febronia",
    img: "XS2.png",
    music: "XS2/26.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "final crisis",
    img: "XS2.png",
    music: "XS2/27.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "presentiment~Jr. #3",
    img: "XS2.png",
    music: "XS2/28.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "a area of battle~bitter #2",
    img: "XS2.png",
    music: "XS2/29.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "inside~Sakura #3",
    img: "XS2.png",
    music: "XS2/30.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "I am free",
    img: "XS2.png",
    music: "XS2/31.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "Sakura #4 (theme-gentle strings ver.)",
    img: "XS2.png",
    music: "XS2/32.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "Sweet Song (Xenosaga II ending theme)",
    img: "XS2.png",
    music: "XS2/33.mp3",
    opts: {
      role: ["vocal"],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "Jr.",
    img: "XS2.png",
    music: "XS2/34.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "Jr. #4",
    img: "XS2.png",
    music: "XS2/35.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "fatal fight #2",
    img: "XS2.png",
    music: "XS2/36.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "bitter",
    img: "XS2.png",
    music: "XS2/37.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "Nephilim",
    img: "XS2.png",
    music: "XS2/38.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "the image theme of Xenosaga II #piano ver.",
    img: "XS2.png",
    music: "XS2/39.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "the image theme of Xenosaga II",
    img: "XS2.png",
    music: "XS2/40.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  // Xenosaga Episode III
  {
    name: "a prelude to the tragedy",
    img: "XS3.png",
    music: "XS3/1.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "fallout",
    img: "XS3.png",
    music: "XS3/2.mp3",
    opts: {
      role: ["battle"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "we've got the believe in something",
    img: "XS3.png",
    music: "XS3/3.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "a dark omen",
    img: "XS3.png",
    music: "XS3/4.mp3",
    opts: {
      role: ["area"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "forgotten sanctuary",
    img: "XS3.png",
    music: "XS3/5.mp3",
    opts: {
      role: ["area"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "creeping into",
    img: "XS3.png",
    music: "XS3/6.mp3",
    opts: {
      role: ["area"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "the battle of your soul",
    img: "XS3.png",
    music: "XS3/7.mp3",
    opts: {
      role: ["battle"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "rolling down the U.M.N.",
    img: "XS3.png",
    music: "XS3/8.mp3",
    opts: {
      role: ["area"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "in a limestone cave",
    img: "XS3.png",
    music: "XS3/9.mp3",
    opts: {
      role: ["area"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "inferno",
    img: "XS3.png",
    music: "XS3/10.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "on our ways",
    img: "XS3.png",
    music: "XS3/11.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "a new world",
    img: "XS3.png",
    music: "XS3/12.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "T-elos",
    img: "XS3.png",
    music: "XS3/13.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "the Miltia incidents",
    img: "XS3.png",
    music: "XS3/14.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "Febronia",
    img: "XS3.png",
    music: "XS3/15.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "promised pain",
    img: "XS3.png",
    music: "XS3/16.mp3",
    opts: {
      role: ["battle", "boss"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "mother, I miss you",
    img: "XS3.png",
    music: "XS3/17.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "fate",
    img: "XS3.png",
    music: "XS3/18.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "Zarathustra dungeon",
    img: "XS3.png",
    music: "XS3/19.mp3",
    opts: {
      role: ["area"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "shifting territories",
    img: "XS3.png",
    music: "XS3/20.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "hepatica#2",
    img: "XS3.png",
    music: "XS3/21.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "the harsh truth",
    img: "XS3.png",
    music: "XS3/22.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "to the last place",
    img: "XS3.png",
    music: "XS3/23.mp3",
    opts: {
      role: ["area"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "hepatica (KOS-MOS)",
    img: "XS3.png",
    music: "XS3/24.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "battleland",
    img: "XS3.png",
    music: "XS3/25.mp3",
    opts: {
      role: ["battle"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "a memory of a tragedy",
    img: "XS3.png",
    music: "XS3/26.mp3",
    opts: {
      role: ["area"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "testament",
    img: "XS3.png",
    music: "XS3/27.mp3",
    opts: {
      role: ["battle"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "survive",
    img: "XS3.png",
    music: "XS3/28.mp3",
    opts: {
      role: ["battle"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "T-elos#2",
    img: "XS3.png",
    music: "XS3/29.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "she's coming back",
    img: "XS3.png",
    music: "XS3/30.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "when the grief lets you go",
    img: "XS3.png",
    music: "XS3/31.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "godsibb",
    img: "XS3.png",
    music: "XS3/32.mp3",
    opts: {
      role: ["battle"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "Febronia#2",
    img: "XS3.png",
    music: "XS3/33.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "crisis coming",
    img: "XS3.png",
    music: "XS3/34.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "a new world#2",
    img: "XS3.png",
    music: "XS3/35.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "outrageous",
    img: "XS3.png",
    music: "XS3/36.mp3",
    opts: {
      role: ["battle"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "when the grief lets you go#2",
    img: "XS3.png",
    music: "XS3/37.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "I love you, sincerely",
    img: "XS3.png",
    music: "XS3/38.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "hepatica#3~I believe in you",
    img: "XS3.png",
    music: "XS3/39.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "maybe tomorrow~ending medley",
    img: "XS3.png",
    music: "XS3/40.mp3",
    opts: {
      role: ["vocal"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  // Xenoblade Chronicles: Definitive Edition
  {
    name: "Main Theme",
    img: "XC1.png",
    music: "XC1/1.mp3",
    opts: {
      role: ["title"],
      composers: ["shimomura", "narita"],
      games: ["XC1"],
    }
  },
  {
    name: "Prologue A",
    img: "XC1.png",
    music: "XC1/2.mp3",
    opts: {
      role: [],
      composers: ["shimomura", "narita"],
      games: ["XC1"],
    }
  },
  {
    name: "Prologue B",
    img: "XC1.png",
    music: "XC1/3.mp3",
    opts: {
      role: [],
      composers: ["shimomura", "narita"],
      games: ["XC1"],
    }
  },
  {
    name: "Everyday Life",
    img: "XC1.png",
    music: "XC1/4.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      games: ["XC1"],
    }
  },
  {
    name: "Colony 9",
    img: "XC1.png",
    music: "XC1/5.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["shimomura", "narita"],
      games: ["XC1", "FR"],
    }
  },
  {
    name: "Colony 9/Night",
    img: "XC1.png",
    music: "XC1/6.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["shimomura", "hiramatsu"],
      games: ["XC1", "FR"],
    }
  },
  {
    name: "Time to Fight!",
    img: "XC1.png",
    music: "XC1/7.mp3",
    opts: {
      role: ["battle"],
      composers: ["shimomura", "narita"],
      games: ["XC1", "FR"],
    }
  },
  {
    name: "Enemies Closing In",
    img: "XC1.png",
    music: "XC1/8.mp3",
    opts: {
      role: ["battle"],
      composers: ["ace", "hiramatsu"],
      games: ["XC1", "FC"],
    }
  },
  {
    name: "Hometown",
    img: "XC1.png",
    music: "XC1/9.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["shimomura", "narita"],
      games: ["XC1"],
    }
  },
  {
    name: "Hometown/Night",
    img: "XC1.png",
    music: "XC1/10.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["shimomura", "ace"],
      games: ["XC1"],
    }
  },
  {
    name: "A Friend on My Mind",
    img: "XC1.png",
    music: "XC1/11.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      games: ["XC1", "FC"],
    }
  },
  {
    name: "The Monado Awakens",
    img: "XC1.png",
    music: "XC1/12.mp3",
    opts: {
      role: [],
      composers: ["ace"],
      games: ["XC1", "FC"],
    }
  },
  {
    name: "Tephra Cave",
    img: "XC1.png",
    music: "XC1/13.mp3",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      games: ["XC1"],
    }
  },
  {
    name: "Hostile Gazes",
    img: "XC1.png",
    music: "XC1/14.mp3",
    opts: {
      role: ["battle"],
      composers: ["ace", "hiramatsu"],
      games: ["XC1"],
    }
  },
  {
    name: "Crisis",
    img: "XC1.png",
    music: "XC1/15.mp3",
    opts: {
      role: [],
      composers: ["ace"],
      games: ["XC1", "FC"],
    }
  },
  {
    name: "An Obstacle in Our Path",
    img: "XC1.png",
    music: "XC1/16.mp3",
    opts: {
      role: ["battle"],
      composers: ["ace"],
      games: ["XC1"],
    }
  },
  {
    name: "Engage the Enemy",
    img: "XC1.png",
    music: "XC1/17.mp3",
    opts: {
      role: [],
      composers: ["ace", "hiramatsu"],
      games: ["XC1", "FC"],
    }
  },
  {
    name: "Rage, Darkness of the Heart",
    img: "XC1.png",
    music: "XC1/18.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      games: ["XC1", "FC"],
    }
  },
  {
    name: "Sorrow",
    img: "XC1.png",
    music: "XC1/19.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      games: ["XC1", "FC"],
    }
  },
  {
    name: "Once We Part Ways",
    img: "XC1.png",
    music: "XC1/20.mp3",
    opts: {
      role: [],
      composers: ["ace"],
      games: ["XC1", "FC"],
    }
  },
  {
    name: "Apprehension",
    img: "XC1.png",
    music: "XC1/21.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      games: ["XC1"],
    }
  },
  {
    name: "Memories",
    img: "XC1.png",
    music: "XC1/22.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1", "FC"],
    }
  },
  {
    name: "Urgency",
    img: "XC1.png",
    music: "XC1/23.mp3",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC1", "FC"],
    }
  },
  {
    name: "Visions of the Future",
    img: "XC1.png",
    music: "XC1/24.mp3",
    opts: {
      role: ["battle"],
      composers: ["ace", "hiramatsu"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Majesty",
    img: "XC1.png",
    music: "XC1/25.mp3",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC1", "FC"],
    }
  },
  {
    name: "Gaur Plain",
    img: "XC1.png",
    music: "XC1/26.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Gaur Plain/Night",
    img: "XC1.png",
    music: "XC1/27.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "In the Refugee Camp",
    img: "XC1.png",
    music: "XC1/28.mp3",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Face",
    img: "XC1.png",
    music: "XC1/29.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1", "FC"],
    }
  },
  {
    name: "Colony 6 - Ether Mine",
    img: "XC1.png",
    music: "XC1/30.mp3",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Unfinished Business",
    img: "XC1.png",
    music: "XC1/31.mp3",
    opts: {
      role: [],
      composers: ["shimomura", "narita"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Colony 6 - Silence",
    img: "XC1.png",
    music: "XC1/32.mp3",
    opts: {
      role: ["area"],
      composers: ["kiyota", "ace"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Colony 6 - Rebuilding",
    img: "XC1.png",
    music: "XC1/33.mp3",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Colony 6 - Hope",
    img: "XC1.png",
    music: "XC1/34.mp3",
    opts: {
      role: ["area"],
      composers: ["kiyota", "ace"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Colony 6 - Future",
    img: "XC1.png",
    music: "XC1/35.mp3",
    opts: {
      role: ["area"],
      composers: ["kiyota", "ace", "kameoka"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Satorl Marsh",
    img: "XC1.png",
    music: "XC1/36.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Satorl Marsh/Night",
    img: "XC1.png",
    music: "XC1/37.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Bionis' Interior/Carcass",
    img: "XC1.png",
    music: "XC1/38.mp3",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Forest of the Nopon",
    img: "XC1.png",
    music: "XC1/39.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Forest of the Nopon/Night",
    img: "XC1.png",
    music: "XC1/40.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Frontier Village",
    img: "XC1.png",
    music: "XC1/41.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Frontier Village/Night",
    img: "XC1.png",
    music: "XC1/42.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Riki the Legendary Heropon",
    img: "XC1.png",
    music: "XC1/43.mp3",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC1", "FC"],
    }
  },
  {
    name: "Eryth Sea",
    img: "XC1.png",
    music: "XC1/44.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Eryth Sea/Night",
    img: "XC1.png",
    music: "XC1/45.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Alcamoth, Imperial Capital",
    img: "XC1.png",
    music: "XC1/46.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Alcamoth, Imperial Capital/Night",
    img: "XC1.png",
    music: "XC1/47.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Intrigue",
    img: "XC1.png",
    music: "XC1/48.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1", "FC"],
    }
  },
  {
    name: "Where the Ancestors Sleep",
    img: "XC1.png",
    music: "XC1/49.mp3",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Ancient Mysteries",
    img: "XC1.png",
    music: "XC1/50.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1", "FC"],
    }
  },
  {
    name: "Egil's Theme",
    img: "XC1.png",
    music: "XC1/51.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Prison Island",
    img: "XC1.png",
    music: "XC1/52.mp3",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "You Will Know Our Names",
    img: "XC1.png",
    music: "XC1/53.mp3",
    opts: {
      role: ["battle"],
      composers: ["ace", "hiramatsu"],
      soundtrack: ["XC1", "FC", "XC2"],
    }
  },
  {
    name: "Thoughts Enshrined",
    img: "XC1.png",
    music: "XC1/54.mp3",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC1", "FC"],
    }
  },
  {
    name: "Valak Mountain",
    img: "XC1.png",
    music: "XC1/55.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Valak Mountain/Night",
    img: "XC1.png",
    music: "XC1/56.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["shimomura"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Sword Valley",
    img: "XC1.png",
    music: "XC1/57.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Sword Valley/Night",
    img: "XC1.png",
    music: "XC1/58.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Galahad Fortress",
    img: "XC1.png",
    music: "XC1/59.mp3",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Mechanical Rhythm",
    img: "XC1.png",
    music: "XC1/60.mp3",
    opts: {
      role: ["battle"],
      composers: ["ace", "hiramatsu"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Irregular Bound",
    img: "XC1.png",
    music: "XC1/61.mp3",
    opts: {
      role: ["battle"],
      composers: ["ace", "hiramatsu"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "A Tragic Decision",
    img: "XC1.png",
    music: "XC1/62.mp3",
    opts: {
      role: [],
      composers: ["ace", "kameoka"],
      soundtrack: ["XC1", "FC"],
    }
  },
  {
    name: "The Fallen Land",
    img: "XC1.png",
    music: "XC1/63.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "The Fallen Land/Night",
    img: "XC1.png",
    music: "XC1/64.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Shulk and Fiora",
    img: "XC1.png",
    music: "XC1/65.mp3",
    opts: {
      role: [],
      composers: ["shimomura", "ace"],
      soundtrack: ["XC1", "FC", "XC3"],
    }
  },
  {
    name: "Reminiscence",
    img: "XC1.png",
    music: "XC1/66.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1", "FC"],
    }
  },
  {
    name: "Riki's Kindness",
    img: "XC1.png",
    music: "XC1/67.mp3",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC1", "FC"],
    }
  },
  {
    name: "Hope",
    img: "XC1.png",
    music: "XC1/68.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1", "FC"],
    }
  },
  {
    name: "Hidden Machina Village",
    img: "XC1.png",
    music: "XC1/69.mp3",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Tension",
    img: "XC1.png",
    music: "XC1/70.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1", "FC"],
    }
  },
  {
    name: "Regret",
    img: "XC1.png",
    music: "XC1/71.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1", "FC"],
    }
  },
  {
    name: "Mechonis area",
    img: "XC1.png",
    music: "XC1/72.mp3",
    opts: {
      role: ["area"],
      composers: ["ace", "hiramatsu"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Shadows Creeping",
    img: "XC1.png",
    music: "XC1/73.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1", "FC"],
    }
  },
  {
    name: "The Battle is Upon Us",
    img: "XC1.png",
    music: "XC1/74.mp3",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Central Factory",
    img: "XC1.png",
    music: "XC1/75.mp3",
    opts: {
      role: ["area"],
      composers: ["ace", "hiramatsu"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Agniritha, Mechonis Capital",
    img: "XC1.png",
    music: "XC1/76.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["ace", "hiramatsu"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Agniritha, Mechonis Capital/Night",
    img: "XC1.png",
    music: "XC1/77.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["ace", "hiramatsu"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Disquiet",
    img: "XC1.png",
    music: "XC1/78.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Towering Shadow",
    img: "XC1.png",
    music: "XC1/79.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1", "FC"],
    }
  },
  {
    name: "Bionis' Awakening",
    img: "XC1.png",
    music: "XC1/80.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "A Spiritual Place",
    img: "XC1.png",
    music: "XC1/81.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Reminiscence (Music Box)",
    img: "XC1.png",
    music: "XC1/82.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Bionis Interior/Pulse",
    img: "XC1.png",
    music: "XC1/83.mp3",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "The End Lies Ahead",
    img: "XC1.png",
    music: "XC1/84.mp3",
    opts: {
      role: [],
      composers: ["ace", "hiramatsu"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Memory's End",
    img: "XC1.png",
    music: "XC1/85.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Zanza's World",
    img: "XC1.png",
    music: "XC1/86.mp3",
    opts: {
      role: [],
      composers: ["ace", "kameoka"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Zanza the Divine",
    img: "XC1.png",
    music: "XC1/87.mp3",
    opts: {
      role: ["battle", "boss"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "The God-Slaying Sword",
    img: "XC1.png",
    music: "XC1/88.mp3",
    opts: {
      role: ["battle", "boss"],
      composers: ["ace"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Futures That Lie Ahead",
    img: "XC1.png",
    music: "XC1/89.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1", "FC"],
    }
  },
  {
    name: "Beyond the Sky",
    img: "XC1.png",
    music: "XC1/90.mp3",
    opts: {
      role: ["vocal"],
      composers: ["mitsuda"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Epilogue",
    img: "XC1.png",
    music: "XC1/91.mp3",
    opts: {
      role: [],
      composers: ["shimomura", "narita"],
      soundtrack: ["XC1"],
    }
  },
  // Future Connected
  {
    name: "Bionis' Shoulder",
    img: "XC1.png",
    music: "XC1/92.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["FC"],
    }
  },
  {
    name: "Bionis' Shoulder/Night",
    img: "XC1.png",
    music: "XC1/93.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["ace"],
      soundtrack: ["FC"],
    }
  },
  {
    name: "Time to Fight! (Bionis' Shoulder)",
    img: "XC1.png",
    music: "XC1/94.mp3",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["FC"],
    }
  },
  {
    name: "Fogbeasts",
    img: "XC1.png",
    music: "XC1/95.mp3",
    opts: {
      role: ["battle"],
      composers: ["ace", "yoshimura"],
      soundtrack: ["FC", "FR"],
    }
  },
  {
    name: "Gran Dell",
    img: "XC1.png",
    music: "XC1/96.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["FC"],
    }
  },
  {
    name: "Gran Dell/Night",
    img: "XC1.png",
    music: "XC1/97.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["FC"],
    }
  },
  {
    name: "Roar from Beyond",
    img: "XC1.png",
    music: "XC1/98.mp3",
    opts: {
      role: ["battle", "boss"],
      composers: ["ace", "kameoka"],
      soundtrack: ["FC"],
    }
  },
  {
    name: "Beyond the Sky (Acoustic Arrange)",
    img: "XC1.png",
    music: "XC1/99.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["FC"],
    }
  },
  // Xenoblade Chronicles X
  {
    name: "no1=CODENAMEZ",
    img: "XCX.png",
    music: "XCX/1.mp3",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "no2=THEMEX",
    img: "XCX.png",
    music: "XCX/2.mp3",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "no3=NO.EX01",
    img: "XCX.png",
    music: "XCX/3.mp3",
    opts: {
      role: ["vocal", "battle"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "no4=D91M",
    img: "XCX.png",
    music: "XCX/4.mp3",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "no5=KAKU-WEST*→▲★★KAI",
    img: "XCX.png",
    music: "XCX/5.mp3",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "no6=LP",
    img: "XCX.png",
    music: "XCX/6.mp3",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "no7=G-LOW-S→F.S.K.O",
    img: "XCX.png",
    music: "XCX/7.mp3",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "no8=UN↑口and巨DIE",
    img: "XCX.png",
    music: "XCX/8.mp3",
    opts: {
      role: ["battle"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "no9=MONOX",
    img: "XCX.png",
    music: "XCX/9.mp3",
    opts: {
      role: ["title"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "no10=CR17S19S8",
    img: "XCX.png",
    music: "XCX/10.mp3",
    opts: {
      role: ["battle"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "no11=RE:ARR.X",
    img: "XCX.png",
    music: "XCX/11.mp3",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "Your Voice",
    img: "XCX.png",
    music: "XCX/12.mp3",
    opts: {
      role: ["vocal"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "Wir fliegen",
    img: "XCX.png",
    music: "XCX/13.mp3",
    opts: {
      role: ["vocal", "battle"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "So nah, so fern",
    img: "XCX.png",
    music: "XCX/14.mp3",
    opts: {
      role: ["vocal"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "NEMOUSU秘OUS",
    img: "XCX.png",
    music: "XCX/15.mp3",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "Black tar",
    img: "XCX.png",
    music: "XCX/16.mp3",
    opts: {
      role: ["vocal", "battle"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "z5m20i12r04a28",
    img: "XCX.png",
    music: "XCX/17.mp3",
    opts: {
      role: ["vocal"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "z10b2r0i1e2f0i9n1g3",
    img: "XCX.png",
    music: "XCX/18.mp3",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "Uncontrollable",
    img: "XCX.png",
    music: "XCX/19.mp3",
    opts: {
      role: ["vocal", "battle"],
      composers: ["sawano"],
      soundtrack: ["XCX", "XC2"],
    }
  },
  {
    name: "z15f20i12e09l14d",
    img: "XCX.png",
    music: "XCX/20.mp3",
    opts: {
      role: ["area"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "z39b20co13mi01cal09",
    img: "XCX.png",
    music: "XCX/21.mp3",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "By my side",
    img: "XCX.png",
    music: "XCX/22.mp3",
    opts: {
      role: ["vocal"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "z?2f0i1e2l0d914",
    img: "XCX.png",
    music: "XCX/23.mp3",
    opts: {
      role: ["area"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "z37b20a13t01t08le",
    img: "XCX.png",
    music: "XCX/24.mp3",
    opts: {
      role: ["battle"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "z30huri2ba0tt12le1110",
    img: "XCX.png",
    music: "XCX/25.mp3",
    opts: {
      role: ["battle"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "z12e201v2e091n4t",
    img: "XCX.png",
    music: "XCX/26.mp3",
    opts: {
      role: ["area"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "z29ba2t0t1l301e17",
    img: "XCX.png",
    music: "XCX/27.mp3",
    opts: {
      role: ["vocal", "battle"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "z16b2gu012ro09u1su4",
    img: "XCX.png",
    music: "XCX/28.mp3",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "z13e20v12e09n14t",
    img: "XCX.png",
    music: "XCX/29.mp3",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "z7b2012lp0427arr",
    img: "XCX.png",
    music: "XCX/30.mp3",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "In the forest",
    img: "XCX.png",
    music: "XCX/31.mp3",
    opts: {
      role: ["vocal"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "z23s20a12m0a9-1r4u",
    img: "XCX.png",
    music: "XCX/32.mp3",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "The way",
    img: "XCX.png",
    music: "XCX/33.mp3",
    opts: {
      role: ["vocal"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "The key we've lost",
    img: "XCX.png",
    music: "XCX/34.mp3",
    opts: {
      role: ["vocal", "battle", "boss"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "N周L辺A",
    img: "XCX.png",
    music: "XCX/35.mp3",
    opts: {
      role: ["area", "day", "night"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "N木ig木ht木L",
    img: "XCX.png",
    music: "XCX/36.mp3",
    opts: {
      role: ["vocal", "area", "day", "night"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "N市L街A",
    img: "XCX.png",
    music: "XCX/37.mp3",
    opts: {
      role: ["area", "day", "night"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "亡KEI却KOKU心",
    img: "XCX.png",
    music: "XCX/38.mp3",
    opts: {
      role: ["area", "day", "night"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "Melancholia",
    img: "XCX.png",
    music: "XCX/39.mp3",
    opts: {
      role: ["vocal"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "fiKAIeldJOU",
    img: "XCX.png",
    music: "XCX/40.mp3",
    opts: {
      role: ["area", "day", "night"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "aBOreSSs",
    img: "XCX.png",
    music: "XCX/41.mp3",
    opts: {
      role: ["battle"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "MNN+@0・",
    img: "XCX.png",
    music: "XCX/42.mp3",
    opts: {
      role: ["area", "day", "night"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "In the forest <X→Z ver.>",
    img: "XCX.png",
    music: "XCX/43.mp3",
    opts: {
      role: ["vocal", "battle"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "46-:ri9",
    img: "XCX.png",
    music: "XCX/44.mp3",
    opts: {
      role: ["area", "day", "night"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "96-:rip",
    img: "XCX.png",
    music: "XCX/45.mp3",
    opts: {
      role: ["area", "day", "night"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "raTEoREkiSImeAra",
    img: "XCX.png",
    music: "XCX/46.mp3",
    opts: {
      role: ["battle"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "Don't worry",
    img: "XCX.png",
    music: "XCX/47.mp3",
    opts: {
      role: ["vocal", "area"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "PianoX1",
    img: "XCX.png",
    music: "XCX/48.mp3",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "PianoX2",
    img: "XCX.png",
    music: "XCX/49.mp3",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "PianoX3",
    img: "XCX.png",
    music: "XCX/50.mp3",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "X-BT1",
    img: "XCX.png",
    music: "XCX/51.mp3",
    opts: {
      role: ["area"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "X-BT2",
    img: "XCX.png",
    music: "XCX/52.mp3",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "X-BT3",
    img: "XCX.png",
    music: "XCX/53.mp3",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "X-BT4",
    img: "XCX.png",
    music: "XCX/54.mp3",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "In the forest (no vocal effects ver.)",
    img: "XCX.png",
    music: "XCX/55.mp3",
    opts: {
      role: ["vocal"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  // Xenoblade Chronicles 2
  {
    name: "Xenoblade II - Where It All Began -",
    img: "XC2.png",
    music: "XC2/1.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Elysium, in the Blue Sky",
    img: "XC2.png",
    music: "XC2/2.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Argentum",
    img: "XC2.png",
    music: "XC2/3.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Argentum/Night",
    img: "XC2.png",
    music: "XC2/4.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Bana's Theme",
    img: "XC2.png",
    music: "XC2/5.mp3",
    opts: {
      role: [],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "A Ship in a Stormy Sea",
    img: "XC2.png",
    music: "XC2/6.mp3",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "The Ancient Vessel",
    img: "XC2.png",
    music: "XC2/7.mp3",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Exploration",
    img: "XC2.png",
    music: "XC2/8.mp3",
    opts: {
      role: ["battle"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "A Portent Crawling Over",
    img: "XC2.png",
    music: "XC2/9.mp3",
    opts: {
      role: [],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Elysium in the Dream",
    img: "XC2.png",
    music: "XC2/10.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC2", "TGC", "XC3"],
    }
  },
  {
    name: "The Awakening",
    img: "XC2.png",
    music: "XC2/11.mp3",
    opts: {
      role: [],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Crossing Swords",
    img: "XC2.png",
    music: "XC2/12.mp3",
    opts: {
      role: [],
      composers: ["hiramatsu"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Incoming!",
    img: "XC2.png",
    music: "XC2/13.mp3",
    opts: {
      role: ["battle"],
      composers: ["ace"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Gormotti Forest",
    img: "XC2.png",
    music: "XC2/14.mp3",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Gormott",
    img: "XC2.png",
    music: "XC2/15.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Gormott/Night",
    img: "XC2.png",
    music: "XC2/16.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Battle!!",
    img: "XC2.png",
    music: "XC2/17.mp3",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["XC2", "XC3"],
    }
  },
  {
    name: "Torigoth",
    img: "XC2.png",
    music: "XC2/18.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Torigoth/Night",
    img: "XC2.png",
    music: "XC2/19.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Wanted Nia",
    img: "XC2.png",
    music: "XC2/20.mp3",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Omens of Life",
    img: "XC2.png",
    music: "XC2/21.mp3",
    opts: {
      role: [],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Awakened DNA",
    img: "XC2.png",
    music: "XC2/22.mp3",
    opts: {
      role: [],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "A Nopon's Life",
    img: "XC2.png",
    music: "XC2/23.mp3",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Tiger! Tiger!",
    img: "XC2.png",
    music: "XC2/24.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "A Brewing Storm",
    img: "XC2.png",
    music: "XC2/25.mp3",
    opts: {
      role: [],
      composers: ["hiramatsu"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Titan Battleship",
    img: "XC2.png",
    music: "XC2/26.mp3",
    opts: {
      role: ["area"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Monster Surprised You",
    img: "XC2.png",
    music: "XC2/27.mp3",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Irritation",
    img: "XC2.png",
    music: "XC2/28.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Where We Used To Be",
    img: "XC2.png",
    music: "XC2/29.mp3",
    opts: {
      role: ["title"],
      composers: ["mitsuda"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Friendship",
    img: "XC2.png",
    music: "XC2/30.mp3",
    opts: {
      role: [],
      composers: ["hiramatsu"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "The Towering Yggdrasil",
    img: "XC2.png",
    music: "XC2/31.mp3",
    opts: {
      role: [],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Ophion",
    img: "XC2.png",
    music: "XC2/32.mp3",
    opts: {
      role: ["area", "battle"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Womb Center",
    img: "XC2.png",
    music: "XC2/33.mp3",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Garfont Mercenaries",
    img: "XC2.png",
    music: "XC2/34.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Garfont Mercenaries/Night",
    img: "XC2.png",
    music: "XC2/35.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Death Match With Torna",
    img: "XC2.png",
    music: "XC2/36.mp3",
    opts: {
      role: ["battle"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Kingdom of Uraya",
    img: "XC2.png",
    music: "XC2/37.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Kingdom of Uraya/Night",
    img: "XC2.png",
    music: "XC2/38.mp3",
    opts: {
      role: ["area", "day", "night"],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Those Who Stand Against Our Path",
    img: "XC2.png",
    music: "XC2/39.mp3",
    opts: {
      role: ["battle"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Fonsa Myma",
    img: "XC2.png",
    music: "XC2/40.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Fonsa Myma/Night",
    img: "XC2.png",
    music: "XC2/41.mp3",
    opts: {
      role: ["area", "day", "night"],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "The Heroic Adventures",
    img: "XC2.png",
    music: "XC2/42.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "The Beginning of Darkness",
    img: "XC2.png",
    music: "XC2/43.mp3",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Drifting Soul",
    img: "XC2.png",
    music: "XC2/44.mp3",
    opts: {
      role: ["vocal"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Counterattack",
    img: "XC2.png",
    music: "XC2/45.mp3",
    opts: {
      role: [],
      composers: ["hiramatsu"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "You Will Recall Our Names",
    img: "XC2.png",
    music: "XC2/46.mp3",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Desolation",
    img: "XC2.png",
    music: "XC2/47.mp3",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Contrition",
    img: "XC2.png",
    music: "XC2/48.mp3",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "War and Peace",
    img: "XC2.png",
    music: "XC2/49.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Driver Vs",
    img: "XC2.png",
    music: "XC2/50.mp3",
    opts: {
      role: ["battle"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Alba Cavanich",
    img: "XC2.png",
    music: "XC2/51.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Alba Cavanich/Night",
    img: "XC2.png",
    music: "XC2/52.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Running",
    img: "XC2.png",
    music: "XC2/53.mp3",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Mor Ardian ~Roaming the Wastes~",
    img: "XC2.png",
    music: "XC2/54.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Mor Ardian/Night",
    img: "XC2.png",
    music: "XC2/55.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Eye of Shining Justice",
    img: "XC2.png",
    music: "XC2/56.mp3",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Bringer of Chaos! Ultimate",
    img: "XC2.png",
    music: "XC2/57.mp3",
    opts: {
      role: ["battle"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Song of Giga Rosa",
    img: "XC2.png",
    music: "XC2/58.mp3",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Jump Towards the Morning Sun",
    img: "XC2.png",
    music: "XC2/59.mp3",
    opts: {
      role: [],
      composers: ["hiramatsu"],
      soundtrack: ["XC2", "TGC", "XC3"],
    }
  },
  {
    name: "Leftherian Archipelago",
    img: "XC2.png",
    music: "XC2/60.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Leftherian Archipelago/Night",
    img: "XC2.png",
    music: "XC2/61.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Gramps",
    img: "XC2.png",
    music: "XC2/62.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Gramps/Night",
    img: "XC2.png",
    music: "XC2/63.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "A Place in the Sun",
    img: "XC2.png",
    music: "XC2/64.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Our Eternal Land",
    img: "XC2.png",
    music: "XC2/65.mp3",
    opts: {
      role: ["vocal", "area", "day"],
      composers: ["mitsuda"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "We Are the Chosen Ones",
    img: "XC2.png",
    music: "XC2/66.mp3",
    opts: {
      role: ["vocal", "area", "night"],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Misgivings",
    img: "XC2.png",
    music: "XC2/67.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "The Impending Crisis",
    img: "XC2.png",
    music: "XC2/68.mp3",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Temperantia",
    img: "XC2.png",
    music: "XC2/69.mp3",
    opts: {
      role: ["area"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Over the Sinful Entreaty",
    img: "XC2.png",
    music: "XC2/70.mp3",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Tantal",
    img: "XC2.png",
    music: "XC2/71.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Tantal/Night",
    img: "XC2.png",
    music: "XC2/72.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Ever Come to an End",
    img: "XC2.png",
    music: "XC2/73.mp3",
    opts: {
      role: ["vocal", "area", "day"],
      composers: ["mitsuda"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Shadow of the Lowlands",
    img: "XC2.png",
    music: "XC2/74.mp3",
    opts: {
      role: ["vocal", "area", "night"],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "The Past Revealed",
    img: "XC2.png",
    music: "XC2/75.mp3",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "The Decision",
    img: "XC2.png",
    music: "XC2/76.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Loneliness",
    img: "XC2.png",
    music: "XC2/77.mp3",
    opts: {
      role: [],
      composers: ["hiramatsu"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Spirit Crucible Elpys",
    img: "XC2.png",
    music: "XC2/78.mp3",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Tensed Mind",
    img: "XC2.png",
    music: "XC2/79.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Drifting Soul (Violin Version)",
    img: "XC2.png",
    music: "XC2/80.mp3",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "A Faint Hope",
    img: "XC2.png",
    music: "XC2/81.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Cliffs of Morytha",
    img: "XC2.png",
    music: "XC2/82.mp3",
    opts: {
      role: ["area"],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Still, Move Forward!",
    img: "XC2.png",
    music: "XC2/83.mp3",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Land of Morytha",
    img: "XC2.png",
    music: "XC2/84.mp3",
    opts: {
      role: ["area"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Yggdrasil",
    img: "XC2.png",
    music: "XC2/85.mp3",
    opts: {
      role: ["area"],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Past From Far Distance",
    img: "XC2.png",
    music: "XC2/86.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "With People and Darkness",
    img: "XC2.png",
    music: "XC2/87.mp3",
    opts: {
      role: [],
      composers: ["mitsuda", "ace"],
      soundtrack: ["XC2", "TGC", "XC3"],
    }
  },
  {
    name: "The Power of Jin",
    img: "XC2.png",
    music: "XC2/88.mp3",
    opts: {
      role: ["battle"],
      composers: ["mitsuda"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Praetor Amalthus ~The Acting God~",
    img: "XC2.png",
    music: "XC2/89.mp3",
    opts: {
      role: ["battle"],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Walking With You",
    img: "XC2.png",
    music: "XC2/90.mp3",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Orbital Ring",
    img: "XC2.png",
    music: "XC2/91.mp3",
    opts: {
      role: ["area"],
      composers: ["mitsuda", "kiyota"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "The Abandoned City",
    img: "XC2.png",
    music: "XC2/92.mp3",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Heart in the Fog",
    img: "XC2.png",
    music: "XC2/93.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Flashback",
    img: "XC2.png",
    music: "XC2/94.mp3",
    opts: {
      role: ["battle"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Sea of Clouds",
    img: "XC2.png",
    music: "XC2/95.mp3",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Disappearing World",
    img: "XC2.png",
    music: "XC2/96.mp3",
    opts: {
      role: ["area"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Battle in the Skies Above",
    img: "XC2.png",
    music: "XC2/97.mp3",
    opts: {
      role: ["battle"],
      composers: ["ace"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "After Despair and Hope",
    img: "XC2.png",
    music: "XC2/98.mp3",
    opts: {
      role: ["battle", "boss"],
      composers: ["hiramatsu"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Our Hope",
    img: "XC2.png",
    music: "XC2/99.mp3",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Parting",
    img: "XC2.png",
    music: "XC2/100.mp3",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "The Tomorrow With You",
    img: "XC2.png",
    music: "XC2/101.mp3",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Escape - Going Through Clouds -",
    img: "XC2.png",
    music: "XC2/102.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Elysium",
    img: "XC2.png",
    music: "XC2/103.mp3",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "White All Around Us",
    img: "XC2.png",
    music: "XC2/104.mp3",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "One Last You",
    img: "XC2.png",
    music: "XC2/105.mp3",
    opts: {
      role: ["vocal"],
      composers: ["mitsuda"],
      soundtrack: ["XC2"],
    }
  },
  // The Golden Country
  {
    name: "The Beginning of Our Memory",
    img: "TGC.png",
    music: "XC2/106.mp3",
    opts: {
      role: ["title"],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["TGC"],
    }
  },
  {
    name: "Lasaria Woodland",
    img: "TGC.png",
    music: "XC2/107.mp3",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["TGC"],
    }
  },
  {
    name: "Battle!!/Torna",
    img: "TGC.png",
    music: "XC2/108.mp3",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["TGC"],
    }
  },
  {
    name: "Four-limbed Titan/Gormott",
    img: "TGC.png",
    music: "XC2/109.mp3",
    opts: {
      role: ["area"],
      composers: ["ace"],
      soundtrack: ["TGC"],
    }
  },
  {
    name: "Kingdom of Torna",
    img: "TGC.png",
    music: "XC2/110.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["TGC"],
    }
  },
  {
    name: "Kingdom of Torna/Night",
    img: "TGC.png",
    music: "XC2/111.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["ace"],
      soundtrack: ["TGC"],
    }
  },
  {
    name: "Auresco, Royal Capital",
    img: "TGC.png",
    music: "XC2/112.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["TGC"],
    }
  },
  {
    name: "Auresco, Royal Capital/Night",
    img: "TGC.png",
    music: "XC2/113.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["TGC"],
    }
  },
  {
    name: "Over Despair and Animus",
    img: "TGC.png",
    music: "XC2/114.mp3",
    opts: {
      role: ["battle", "boss"],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["TGC"],
    }
  },
  {
    name: "Our Paths May Never Cross",
    img: "TGC.png",
    music: "XC2/115.mp3",
    opts: {
      role: ["battle", "boss"],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["TGC"],
    }
  },
  {
    name: "A Moment of Eternity",
    img: "TGC.png",
    music: "XC2/116.mp3",
    opts: {
      role: ["vocal"],
      composers: ["mitsuda"],
      soundtrack: ["TGC"],
    }
  },
  // Xenoblade Chronicles 3
  {
    name: "Off-Seer",
    img: "XC3.png",
    music: "XC3/1.mp3",
    opts: {
      role: ["title"],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Battlefield - The Scramble for Life",
    img: "XC3.png",
    music: "XC3/2.mp3",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Tactical Action (Dynamic)",
    img: "XC3.png",
    music: "XC3/3.mp3",
    opts: {
      role: ["area"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Tactical Action",
    img: "XC3.png",
    music: "XC3/4.mp3",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "The Exhausted Victorius, The Speechless Defeated",
    img: "XC3.png",
    music: "XC3/5.mp3",
    opts: {
      role: [],
      composers: ["kunigo", "fujii"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Young Warriors",
    img: "XC3.png",
    music: "XC3/6.mp3",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Lost Days of Warmth",
    img: "XC3.png",
    music: "XC3/7.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Shining Aspiration - Inherited Melody",
    img: "XC3.png",
    music: "XC3/8.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Yzana Plains",
    img: "XC3.png",
    music: "XC3/9.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Yzana Plains/Night",
    img: "XC3.png",
    music: "XC3/10.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["ace"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Keves Battle",
    img: "XC3.png",
    music: "XC3/11.mp3",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Soldiers' Paean",
    img: "XC3.png",
    music: "XC3/12.mp3",
    opts: {
      role: ["area"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Indescribable Unease",
    img: "XC3.png",
    music: "XC3/13.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Iris Network",
    img: "XC3.png",
    music: "XC3/14.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Alfeto Valley",
    img: "XC3.png",
    music: "XC3/15.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Alfeto Valley/Night",
    img: "XC3.png",
    music: "XC3/16.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Nearing the Enemy",
    img: "XC3.png",
    music: "XC3/17.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Impending Crisis",
    img: "XC3.png",
    music: "XC3/18.mp3",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Immediate Threat",
    img: "XC3.png",
    music: "XC3/19.mp3",
    opts: {
      role: ["battle"],
      composers: ["ace"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "The Two Off-Seers",
    img: "XC3.png",
    music: "XC3/20.mp3",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Suffocating Reverberation",
    img: "XC3.png",
    music: "XC3/21.mp3",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Ouroboros Awakening",
    img: "XC3.png",
    music: "XC3/22.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Moebius Battle",
    img: "XC3.png",
    music: "XC3/23.mp3",
    opts: {
      role: ["battle"],
      composers: ["ace"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Against the World",
    img: "XC3.png",
    music: "XC3/24.mp3",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "A Life Woven Together",
    img: "XC3.png",
    music: "XC3/25.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "A Life Sent On",
    img: "XC3.png",
    music: "XC3/26.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Quiet Intrigue",
    img: "XC3.png",
    music: "XC3/27.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Hostile Colony (Dynamic)",
    img: "XC3.png",
    music: "XC3/28.mp3",
    opts: {
      role: ["area"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Hostile Colony",
    img: "XC3.png",
    music: "XC3/29.mp3",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Everyday Life",
    img: "XC3.png",
    music: "XC3/30.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "The Bereaved and Those Left Behind",
    img: "XC3.png",
    music: "XC3/31.mp3",
    opts: {
      role: [],
      composers: ["mitsuda", "noguchi"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Off-Seer - Noah",
    img: "XC3.png",
    music: "XC3/32.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Millick Meadows",
    img: "XC3.png",
    music: "XC3/33.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Millick Meadows/Night",
    img: "XC3.png",
    music: "XC3/34.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "A Formidable Enemy",
    img: "XC3.png",
    music: "XC3/35.mp3",
    opts: {
      role: ["battle"],
      composers: ["ace", "yoshimura"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Eagus Wilderness",
    img: "XC3.png",
    music: "XC3/36.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Eagus Wilderness/Night",
    img: "XC3.png",
    music: "XC3/37.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Suspicion",
    img: "XC3.png",
    music: "XC3/38.mp3",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Sun-Dappled Glade",
    img: "XC3.png",
    music: "XC3/39.mp3",
    opts: {
      role: [],
      composers: ["abounnasr", "mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Blade - Those Who Know Fear",
    img: "XC3.png",
    music: "XC3/40.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Moebius",
    img: "XC3.png",
    music: "XC3/41.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Those Who Devour Life",
    img: "XC3.png",
    music: "XC3/42.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Remorse",
    img: "XC3.png",
    music: "XC3/43.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Keves Colony",
    img: "XC3.png",
    music: "XC3/44.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Keves Colony/Night",
    img: "XC3.png",
    music: "XC3/45.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Encroaching Malice",
    img: "XC3.png",
    music: "XC3/46.mp3",
    opts: {
      role: [],
      composers: ["abounnasr", "mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Ribbi Flats",
    img: "XC3.png",
    music: "XC3/47.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Ribbi Flats/Night",
    img: "XC3.png",
    music: "XC3/48.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "You Will Know Our Names - Finale",
    img: "XC3.png",
    music: "XC3/49.mp3",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Dannagh Desert",
    img: "XC3.png",
    music: "XC3/50.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Dannagh Desert/Night",
    img: "XC3.png",
    music: "XC3/51.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["ace"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Rae-Bel Tableland",
    img: "XC3.png",
    music: "XC3/52.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Rae-Bel Tableland/Night",
    img: "XC3.png",
    music: "XC3/53.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["ace", "kameoka"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Urayan Tunnels",
    img: "XC3.png",
    music: "XC3/54.mp3",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Ferronis",
    img: "XC3.png",
    music: "XC3/55.mp3",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Confronting Our Past",
    img: "XC3.png",
    music: "XC3/56.mp3",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Chain Attack",
    img: "XC3.png",
    music: "XC3/57.mp3",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Off-Seer - Mio",
    img: "XC3.png",
    music: "XC3/58.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Great Cotte Falls",
    img: "XC3.png",
    music: "XC3/59.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Great Cotte Falls/Night",
    img: "XC3.png",
    music: "XC3/60.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Mysterious Land",
    img: "XC3.png",
    music: "XC3/61.mp3",
    opts: {
      role: ["area"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Maktha Wildwood",
    img: "XC3.png",
    music: "XC3/62.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Maktha Wildwood/Night",
    img: "XC3.png",
    music: "XC3/63.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["ace"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Light of the Moon - Hope",
    img: "XC3.png",
    music: "XC3/64.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Agnus Colony",
    img: "XC3.png",
    music: "XC3/65.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["ace", "kameoka"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Agnus Colony/Night",
    img: "XC3.png",
    music: "XC3/66.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["ace", "kameoka"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Agnus Battle",
    img: "XC3.png",
    music: "XC3/67.mp3",
    opts: {
      role: ["battle"],
      composers: ["ace"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "A Life Become Distant",
    img: "XC3.png",
    music: "XC3/68.mp3",
    opts: {
      role: [],
      composers: ["abounnasr", "mitsuda"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "In the Morning Mist",
    img: "XC3.png",
    music: "XC3/69.mp3",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Life's Fading Flame - Holding These Thoughts",
    img: "XC3.png",
    music: "XC3/70.mp3",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Carrying the Weight of Life",
    img: "XC3.png",
    music: "XC3/71.mp3",
    opts: {
      role: [],
      composers: ["hiramatsu", "mitsuda"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Rest Spot",
    img: "XC3.png",
    music: "XC3/72.mp3",
    opts: {
      role: ["night"],
      composers: ["ace", "kameoka"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Syra Hovering Reefs",
    img: "XC3.png",
    music: "XC3/73.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Syra Hovering Reefs/Night",
    img: "XC3.png",
    music: "XC3/74.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Keves Castle",
    img: "XC3.png",
    music: "XC3/75.mp3",
    opts: {
      role: ["area"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Keves Castle (Battle)",
    img: "XC3.png",
    music: "XC3/76.mp3",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "The False Queens",
    img: "XC3.png",
    music: "XC3/77.mp3",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Great Sword's Base",
    img: "XC3.png",
    music: "XC3/78.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Great Sword's Base/Night",
    img: "XC3.png",
    music: "XC3/79.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "City",
    img: "XC3.png",
    music: "XC3/80.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota", "mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "City/Night",
    img: "XC3.png",
    music: "XC3/81.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota", "mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Sailing the Seas",
    img: "XC3.png",
    music: "XC3/82.mp3",
    opts: {
      role: ["are"],
      composers: ["ace"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Erythia Sea",
    img: "XC3.png",
    music: "XC3/83.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Erythia Sea/Night",
    img: "XC3.png",
    music: "XC3/84.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["ace"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Battle on the Seas",
    img: "XC3.png",
    music: "XC3/85.mp3",
    opts: {
      role: ["battle"],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Malevolent Hollow",
    img: "XC3.png",
    music: "XC3/86.mp3",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Li Garte Prison Camp",
    img: "XC3.png",
    music: "XC3/87.mp3",
    opts: {
      role: ["area"],
      composers: ["ace", "kameoka"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Moebius Battle/M",
    img: "XC3.png",
    music: "XC3/88.mp3",
    opts: {
      role: ["battle"],
      composers: ["ace"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "That To Which The Defeated Cling",
    img: "XC3.png",
    music: "XC3/89.mp3",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "A Step Away",
    img: "XC3.png",
    music: "XC3/90.mp3",
    opts: {
      role: ["vocal"],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "A Life Overflowing",
    img: "XC3.png",
    music: "XC3/91.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Homecoming",
    img: "XC3.png",
    music: "XC3/92.mp3",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Words That Never Reached You",
    img: "XC3.png",
    music: "XC3/93.mp3",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Agnus Castle",
    img: "XC3.png",
    music: "XC3/94.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Agnus Castle/Night",
    img: "XC3.png",
    music: "XC3/95.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["ace", "komeoka", "yagi"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Captocorn Peak",
    img: "XC3.png",
    music: "XC3/96.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Captocorn Peak/Night",
    img: "XC3.png",
    music: "XC3/97.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Off-Seer - Miyabi",
    img: "XC3.png",
    music: "XC3/98.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Feelings Risen to the Sky",
    img: "XC3.png",
    music: "XC3/99.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Cloudkeep",
    img: "XC3.png",
    music: "XC3/100.mp3",
    opts: {
      role: ["area"],
      composers: ["ace", "kameoka"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Converging Emotions",
    img: "XC3.png",
    music: "XC3/101.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Saffronia Village",
    img: "XC3.png",
    music: "XC3/102.mp3",
    opts: {
      role: ["area"],
      composers: ["ace", "kameoka"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Off-Seer - Crys",
    img: "XC3.png",
    music: "XC3/103.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Feelings Upon This Melody",
    img: "XC3.png",
    music: "XC3/104.mp3",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Fort O'Virbus",
    img: "XC3.png",
    music: "XC3/105.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Fort O'Virbus/Night",
    img: "XC3.png",
    music: "XC3/106.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Elaice Highway",
    img: "XC3.png",
    music: "XC3/107.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Elaice Highway/Night",
    img: "XC3.png",
    music: "XC3/108.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "The Great Sea Stirs",
    img: "XC3.png",
    music: "XC3/109.mp3",
    opts: {
      role: ["area"],
      composers: ["ace", "kameoka"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Ultimate Enemy",
    img: "XC3.png",
    music: "XC3/110.mp3",
    opts: {
      role: ["battle"],
      composers: ["kunigo", "fujii"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Brilliant Wings",
    img: "XC3.png",
    music: "XC3/111.mp3",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Kaleidoscopic Core",
    img: "XC3.png",
    music: "XC3/112.mp3",
    opts: {
      role: ["battle"],
      composers: ["ace", "yoshimura"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Origin Ascending",
    img: "XC3.png",
    music: "XC3/113.mp3",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Origin",
    img: "XC3.png",
    music: "XC3/114.mp3",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Origin Battle",
    img: "XC3.png",
    music: "XC3/115.mp3",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Noah and N",
    img: "XC3.png",
    music: "XC3/116.mp3",
    opts: {
      role: ["battle"],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Grand Theater of Life",
    img: "XC3.png",
    music: "XC3/117.mp3",
    opts: {
      role: [],
      composers: ["kiyota", "mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Z- Harbinger of the End",
    img: "XC3.png",
    music: "XC3/118.mp3",
    opts: {
      role: [],
      composers: ["kiyota", "mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "The Two Queens of Aionios",
    img: "XC3.png",
    music: "XC3/119.mp3",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Congregating Lives",
    img: "XC3.png",
    music: "XC3/120.mp3",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Showdown with Z",
    img: "XC3.png",
    music: "XC3/121.mp3",
    opts: {
      role: ["battle", "boss"],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "How the Future Endures",
    img: "XC3.png",
    music: "XC3/122.mp3",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Something's Beginning to Move",
    img: "XC3.png",
    music: "XC3/123.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Where We Belong",
    img: "XC3.png",
    music: "XC3/124.mp3",
    opts: {
      role: ["vocal"],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Melia - Ancient Memories",
    img: "XC3.png",
    music: "XC3/125.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Nia - Towards the Heavens",
    img: "XC3.png",
    music: "XC3/126.mp3",
    opts: {
      role: [],
      composers: ["ace", "kameoka", "yagi"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Hope for the Future",
    img: "XC3.png",
    music: "XC3/127.mp3",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Noah and Mio - Our Melody",
    img: "XC3.png",
    music: "XC3/128.mp3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  // Future Redeemed
  {
    name: "At Our Life's End",
    img: "XC3.png",
    music: "XC3/129.mp3",
    opts: {
      role: ["title"],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["FR"],
    }
  },
  {
    name: "New Battle!!!",
    img: "XC3.png",
    music: "XC3/130.mp3",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["FR"],
    }
  },
  {
    name: "Cent-Omnia Region",
    img: "XC3.png",
    music: "XC3/131.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["ace", "yoshimura"],
      soundtrack: ["FR"],
    }
  },
  {
    name: "Cent-Omnia Region/Night",
    img: "XC3.png",
    music: "XC3/132.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["ace", "yoshimura"],
      soundtrack: ["FR"],
    }
  },
  {
    name: "Yesterdale - Colony 9",
    img: "XC3.png",
    music: "XC3/133.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["FR"],
    }
  },
  {
    name: "Yesterdale - Colony 9/Night",
    img: "XC3.png",
    music: "XC3/134.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["FR"],
    }
  },
  {
    name: "Black Mountains - Valak Mountain",
    img: "XC3.png",
    music: "XC3/135.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["abounnasr"],
      soundtrack: ["FR"],
    }
  },
  {
    name: "Black Mountains - Valak Mountain/Night",
    img: "XC3.png",
    music: "XC3/136.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["abounnasr"],
      soundtrack: ["FR"],
    }
  },
  {
    name: "Black Mountains - Prison Island",
    img: "XC3.png",
    music: "XC3/137.mp3",
    opts: {
      role: ["area", "day"],
      composers: ["abounnasr"],
      soundtrack: ["FR"],
    }
  },
  {
    name: "Black Mountains - Prison Island/Night",
    img: "XC3.png",
    music: "XC3/138.mp3",
    opts: {
      role: ["area", "night"],
      composers: ["abounnasr"],
      soundtrack: ["FR"],
    }
  },
  {
    name: "Redeem the Future",
    img: "XC3.png",
    music: "XC3/139.mp3",
    opts: {
      role: ["battle", "boss"],
      composers: ["kiyota"],
      soundtrack: ["FR"],
    }
  },
  {
    name: "Redeem the Future - Finale",
    img: "XC3.png",
    music: "XC3/140.mp3",
    opts: {
      role: ["battle", "boss"],
      composers: ["kiyota"],
      soundtrack: ["FR"],
    }
  },
  {
    name: "Two Worlds and Two Hearts",
    img: "XC3.png",
    music: "XC3/141.mp3",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["FR"],
    }
  },
  {
    name: "Future Awaits",
    img: "XC3.png",
    music: "XC3/142.mp3",
    opts: {
      role: ["vocal"],
      composers: ["mitsuda"],
      soundtrack: ["FR"],
    }
  },
]
