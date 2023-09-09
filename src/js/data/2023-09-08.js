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
    name: "Filter by Composers/Arrangers",
    key: "composers",
    tooltip: "Check this to restrict to certain composers or arrangers.",
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
  // {
  //   name: "Restrict Spoilers",
  //   key: "spoiler",
  //   tooltip: "Check this to restrict spoilers.",
  //   checked: false
  // },
  // {
  //   name: "Restrict Duplicates",
  //   key: "duplicate",
  //   tooltip: "Check this to restrict duplicates.",
  //   checked: false
  // }
];

// dataSet[dataSetVersion].songData = [
//   {
//     name: "main theme",
//     url: "d7V3M2DAq1E?si=k5Jk-acWcff_gtxG",
//     url: "",
    img: "XG.png",
//     music: "XG/1.mp3",
//     opts: {
//       role: [],
//       composers: ["mitsuda"],
//       games: ["XG"],
//     }
//   },
//   {
//     name: "everyday life",
//     url: "RF2K4sG8pyE?si=DzAxgkaUVQLz9wlD",
//     url: "",
    img: "XG.png",
//     music: "XG/1.mp3",
//     opts: {
//       role: [],
//       composers: ["mitsuda"],
//       games: ["XG"],
//     }
//   },
//   {
//     name: "memories",
//     url: "z7nTKKxPXZ8?si=ROYHVqOzt9dXSzjk",
//     url: "",
    img: "XG.png",
//     music: "XG/1.mp3",
//     opts: {
//       role: [],
//       composers: ["mitsuda"],
//       games: ["XG"],
//     }
//   },
//   {
//     name: "a friend on my mind",
//     url: "uM2_kvoopik?si=yfoa3oTHItNdF2XR",
//     url: "",
    img: "XG.png",
//     music: "XG/1.mp3",
//     opts: {
//       role: [],
//       composers: ["mitsuda"],
//       games: ["XG"],
//     }
//   },
// ]

dataSet[dataSetVersion].songData = [
  // Xenogears
  {
    name: "Dark Daybreak",
    url: "iR1NcGdLgmg?si=JfIIsiTewIYZUHtm",
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
    url: "NL7AvrAAfbw?si=HqkeFghwVg_-Wa1Q",
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
    url: "SOImlAzVNQI?si=Q0KyWzFK2eM9OzPf",
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
    url: "S6vIPD5gxIM?si=mHHYznDPRaVzTnFd",
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
    url: "kZgXWZ-lKZc?si=EgGtV9_M2CG6YXoa",
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
    url: "NT8J38urT4M?si=Rl9RmK0bmRULz_V0",
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
    url: "iXNp6JTjZQY?si=QtO8BohhFwyBALdK",
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
    url: "8BZF4ZjnsRs?si=cE3iwlakNwnSQaXM",
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
    url: "xNWHeV_BW7U?si=V8B2oKIqwp0z7b_y",
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
    url: "uPyM6jiD5Nc?si=0Uye16q7acWFWID9",
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
    url: "cLS2fcVEQlQ?si=u2VtFMQruFAyQM5Z",
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
    url: "uPcHYNU08KI?si=YIBkLLgJe6Snf4aB",
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
    url: "i3XnRt2sCn0?si=RaLELg_bUyHaR-m1",
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
    url: "6qKiSWq6DAY?si=32ONZ9esBHMx1pps",
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
    url: "bcVpVhJ1HL4?si=EfeGWYXjrHqRyyAj",
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
    url: "LVC6XX1B0h4?si=UR90Jgt8SbTti0gV",
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
    url: "smKnHAPOWkk?si=aud7WgB5KqGLJqo4",
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
    url: "p0FlHnHDd2I?si=lbWbbL2rAFb3oOVf",
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
    url: "-6GE4SmL7l4?si=SjXntxiheNDRPVVE",
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
    url: "Ko2O5D9CgUk?si=qQefxgd8xuRAcTOt",
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
    url: "V1N--pniiM8?si=sNvXuz7GEqFBbGUR",
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
    url: "PDMlXwxYwDs?si=Ts5X_wlj8adiHWwW",
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
    url: "AORK0aZ7liw?si=rXIuMHUZu1ikYWcV",
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
    url: "rr0-CqfYd3s?si=amajA_2vUa5yLVT-",
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
    url: "QgDqdyjBkfE?si=7RvZdFmb7st2wq2c",
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
    url: "NfxaDEW4VuU?si=1-ElNsmP1RaPZSCc",
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
    url: "TlyLmBzGhOo?si=a9AE9IbsJ1f6RWrq",
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
    url: "Oy-jxTwMB1Y?si=4YBIYho57Rkw3jQ2",
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
    url: "uvtS3AEW3zw?si=GfmEwrZEK_-aozds",
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
    url: "4EHteRjTQc4?si=Cmt0q7AtnR9N_H9I",
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
    url: "wrRE8Uswdtw?si=ZzOTrvAMp_v1fasO",
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
    url: "lrrTG_gs6YY?si=wrVQMR6dIjB9_2dm",
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
    url: "Wtm0NEirjkA?si=M7iWPWV4NnX_Fqn_",
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
    url: "VGNVDPvZ6xo?si=07UrdFgleoHAKnRX",
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
    url: "n_sl8GwoJEY?si=XNhUzyL8TwRgcfSm",
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
    url: "6moiCUKQTS8?si=Thew_R-BUv6pU4Jk",
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
    url: "ETvFEoJjhnM?si=FsoKicyT4ipdZZhn",
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
    url: "xvVtJxl_TS4?si=vRXwR1ne4bXSBWC-",
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
    url: "nDGV_C2waQE?si=tf1noOCuR-8p-7Dj",
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
    url: "qiVt6tHHiGk?si=jwBH6X6VD4nQ2PSo",
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
    url: "_3P5O73wysQ?si=QxNGJCsSIPmF5aqD",
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
    url: "UZ15aSoIBFE?si=VCh86wgr68hLZ4W4",
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
    url: "FGswtUG3zd8?si=DC3CjK-qoAsJCXRF",
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
    url: "DiqQhCwUyB4?si=IG0Ea_RHXP6HmUJk",
    img: "XG.png",
    music: "XG/44.mp3",
    opts: {
      role: ["vocal"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  // Xenosaga Episode 1
  // xBfWg4hkAMc?si=mxonbedR-iTRkp7g
  // ceLdDMkVhXE?si=zYu-Rk6-CuOS1Dwp
  {
    name: "Prologue",
    url: "hPrR8k-8pHU?si=RnGbYZQgAT816H_K",
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
    url: "0rHRUF1KwIs?si=y8RO_wMJ9UckF8yF",
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
    url: "1-qhTe5piKg?si=jZ2qbsiKw9H5E5e8",
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
    url: "RGW5PXSrmzc?si=cM4mXV38jA2vp_4U",
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
    url: "9aoLGamSCbU?si=4ih5iGqqyx_UTiPs",
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
    url: "zEA8j50YXFo?si=wp3bKqlWdqKIKcE6",
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
    url: "TdelXKBE8DY?si=9GA840rdsG0S5-SG",
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
    url: "YXAgsZa6tDk?si=eWBT2WIlnC11NEMD",
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
    url: "Q59moyj-siY?si=PUiRMyHam5szQuje",
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
    url: "Vg6KiOjgVQ8?si=A5skj8Irlwz2DoSR",
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
    url: "QDot5e1yyJ4?si=97IJ3dFEKK9kuV7y",
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
    url: "srMf_bvqmJI?si=lBNLsolhb8VHWcg0",
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
    url: "VL6Vtlcwhok?si=mRsSbA-fxkLxMX5v",
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
    url: "a_kTXolhFA0?si=GNyeq8zzlmtbffmQ",
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
    url: "qgiUKX0oQ-U?si=fVuVEk_z9RVi-Y0V",
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
    url: "awV3FTrawQ8?si=dMWfEARKV0j3tjlh",
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
    url: "Zm4UE6Ddh-M?si=5H8YWBQp3Yg_jDjg",
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
    url: "agnlffbRkoE?si=uIDHle68h0dltLw1",
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
    url: "LThPL5mZKiY?si=xusOjXYlR-4EhP_f",
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
    url: "oOq3hd5I9oo?si=02nPsGyTz1fScAC3",
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
    url: "7ePlIcgo2Tg?si=bdNK30ScjMw9J8cl",
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
    url: "e5LxH1UoXXU?si=diSvLtKxoWgbhLiR",
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
    url: "gcipWCJlHuU?si=qBitOg3Rx9_8I-iR",
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
    url: "_6rHTA2mXlA?si=CouwWE7nTYCeRi7l",
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
    url: "E2PMet_MDpU?si=pAk3o2s6N0rKJ2C9",
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
    url: "Nga0gEiu56U?si=gsh5263txThjYbKl",
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
    url: "-E_qkv1sYMs?si=lcW4fRPJv11aPR4R",
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
    url: "VDxIflUv9oQ?si=kBGY2ch74e9En_cv",
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
    url: "kcGugXhxWRQ?si=rUfi875IWryamRby",
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
    url: "eCa6lT6ifHI?si=rptzWfiF7fG9oPvd",
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
    url: "1lmHnxD9g8E?si=4b7k-mYCJXLL6p08",
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
    url: "AferSR1baTE?si=wB-UmRkydpqGsRN8",
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
    url: "5eK8bYDJ56Y?si=2FQIgM_oOKYw7u68",
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
    url: "k-odDG4VfTY?si=ieauJyf3Ypq_1m4D",
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
    url: "2qv0JVC-Ow0?si=PH1_N4NZ8oi16ZXq",
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
    url: "gzI6fiozvbA?si=sDVCUvbB-Jm56XGd",
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
    url: "ui5Oe71kiF4?si=oeZpTY5Na06Ee7DT",
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
    url: "_FP-xtoFhVM?si=WJU6nYxFaBxKVwIv",
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
    url: "D3u953gLTwQ?si=LoIOdzJVDi8esCRs",
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
    url: "Kc_qMd0xUvA?si=NzD_c7LGK-IRkZU9",
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
    url: "A7kELHsP5uA?si=6VFwZ9LpG_B9pOFb",
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
    url: "tf_2iC9Bxz8?si=7YkN3wH06H0cTfxj",
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
    url: "IHhvIR0HbRU?si=zsVBkuhnLi2u_ehn",
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
    url: "T6wRZHWfzqo?si=_6pf6UqdFDgtyamt",
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
    url: "ZOXYiopiCfw?si=D_93N9Pga3xyhm8m",
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
    url: "bvK3UswqOPQ?si=XYp8smpysLTumhYG",
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
    url: "qNH27ghkJYA?si=rtHjAfQO4DP3bKRr",
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
    url: "3saTSI89lUU?si=r9UUdkoqFqXxczAd",
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
    url: "XMbO_9rWEic?si=noy8y83H4wo0LxK5",
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
    url: "vs73R9kNImo?si=RGVXsntmmTfrSryc",
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
    url: "TzZTUUXEl8c?si=yd9F8OHEyUtdUrfo",
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
    url: "YtA-iLt2rgw?si=qkfGNPSKNHAnaVI2",
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
    url: "u98M7l1tStQ?si=jJ91iIb6EShLlL4r",
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
    url: "GGnW2M5o-EI?si=PVoKSD1KdSunre3R",
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
    url: "vjtrJdRKbzI?si=q4DYmEL-lzXxAIE1",
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
    url: "bizbbwBrxFE?si=2BcNRkd37Yog11GX",
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
    url: "ssjPWlaXQoA?si=rLYU4_WwIbQeq8XJ",
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
    url: "8kJKM1dmZj8?si=u8Mn_dKwinLZODpP",
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
    url: "BBk0WMZcD0E?si=P_-cXGtUaaYUeirW",
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
    url: "9acWNrcEwKY?si=NkVp86-r6bP78swB",
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
    url: "hToBXj93_jY?si=rXDjaPlIuigv-8-W",
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
    url: "ycTBRXkrn3w?si=vmspg5xx4IdSvknJ",
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
    url: "_CWpKGnk3RM?si=t5RAHLd-NSGgeL9x",
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
    url: "mUAZn6p7hWw?si=avyhHbxeZUtFtNMQ",
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
    url: "EJzXw6-CkyI?si=5RS7TPXKF1_FqoUb",
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
    url: "E3tFn2P3HWI?si=UJImEDtfEtr6aWnH",
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
    url: "Quv8aH1N35o?si=4fJzQTZAQoLjnZZS",
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
    url: "6KiyvY2v_kg?si=tPmmXUkR6bJYgbFY",
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
    url: "rBTIaFgsL5Y?si=24_FlhCIFLpnXl9h",
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
    url: "qREw7kPsE-w?si=-dte8pWIIDA1kCba",
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
    url: "jZKKTPsUkL0?si=4pNinwfT_rnRbYhz",
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
    url: "CtsOnMHL0hg?si=92EkeKGGTanEd1yC",
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
    url: "wEygJqBbtJs?si=z6HvvqnVsAvJvRsG",
    img: "XS2.png",
    music: "XS2/28.mp3",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "a field of battle~bitter #2",
    url: "LO3F75KFqMA?si=Imh9wThxrxEH2zPv",
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
    url: "9U3ybj1EXXY?si=9dg7OY7mxhDZm_gt",
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
    url: "5mqnG3tw9Rc?si=eSz4NoSSmgpqMTdh",
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
    url: "5kBZ2R6eIAA?si=wVjk_VWNFUFgahrN",
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
    url: "BmW1Y-rS6Tc?si=GMiaJkFqXoP5PLAl",
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
    url: "PKI0Bl5OZv0?si=zmL_u5_LqJus0MWn",
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
    url: "dCLFFIJ84Uc?si=1FIlJIv9K4auAmQE",
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
    url: "Vcl_OLx-lc0?si=lUzr3RYumfnPvA5M",
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
    url: "d7he6UP8tAI?si=ruHTjwYqAQrV6_qY",
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
    url: "loCoDbbhVpQ?si=TJV2PlpMnMcnRagt",
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
    url: "2bjsGePUwz4?si=7LA5PFLRl14R21c_",
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
    url: "hdotfD8ifBI?si=vBtGHwhjqQHv8v-E",
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
    url: "bvZuVQUuWGE?si=aUh_9p7An-P0D4K_",
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
    url: "EVHegW1hdP4?si=sMGuOXDIKUS4371j",
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
    url: "lZKI4HixDTA?si=foxQOdtOIWwbBD3I",
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
    url: "VJs3TKdlY4o?si=jMI7kLtUvsXx_U3Q",
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
    url: "3UFJFNbK35I?si=RlBw7kCf30FPUK7k",
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
    url: "5cOKswdMs3M?si=fj1x6AKVg7VovrfX",
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
    url: "1BZdfONFodk?si=Rt1AJ7Fu-iWtk8CP",
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
    url: "e30fvR53LIY?si=tg_Gnnfdj20mY5vZ",
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
    url: "YwEiRX9lrfE?si=PLBWlk0ZNvxRVGg6",
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
    url: "brkei4JLSZ0?si=q2Yu-E8mXUJfVoup",
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
    url: "z922peRTB04?si=YC8E3_Nm45eYX92w",
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
    url: "oM5Ot0h7mGQ?si=ey2xjmbJOm_NhGWf",
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
    url: "BnzFYLDp4Bs?si=7-5k2XXtG00Ylc7W",
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
    url: "huj9m4ZH9Uw?si=6p0n0YonhUFP1gXI",
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
    url: "u1Vt8EkLbe4?si=KvxYjHAfm9AlLIig",
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
    url: "7HSWc56pE1M?si=vtBMCg2iwdq1bnUb",
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
    url: "CdTiK7fLcTo?si=Y2bRYQv__1tB9tD0",
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
    url: "SuaVur0Jna4?si=2kE8RDGgPtkrZnzj",
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
    url: "9pqkz4_9UQg?si=QQqBqqKExxDsa6dO",
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
    url: "Cpc8FpgiNzg?si=e08r_HYG0Gzk-ZSo",
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
    url: "cz3IbrcrCK8?si=Pmt27H2KP0FQWxes",
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
    url: "2vJNd6UHweA?si=1LQDZi_fcy70qKbw",
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
    url: "whvt8xdzujQ?si=l7OF_foFom8GAeKd",
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
    url: "LYhGBGPpLjI?si=mvmnhEJ2hAMeHhHw",
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
    url: "UT5AXeBa4-g?si=G9M3-P28dfroTig7",
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
    url: "oS6vbhEJLpI?si=Hhzggy-p3PJFFNt3",
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
    url: "IO0KwAmLPak?si=1RPSlMbkS1ZPXb0k",
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
    url: "pD6psEdt030?si=PCEE36rJx1FEBRSN",
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
    url: "oUCvJgY09Ps?si=MHuBmiKY8d-EnAMc",
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
    url: "8kxMYjlDyTY?si=S823NeXFkw3cyo6t",
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
    url: "vVXv3EVh5s4?si=RgMmHEK6-1gLC7hm",
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
    url: "y21Nnc2FGUU?si=Z-svt6Uc7jcO8lS0",
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
    url: "0rpEQdsyfmk?si=IY2EMsXyJUy-GGce",
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
    url: "OT7ftGzzd4o?si=IOK2gUlEmMJmLLDS",
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
    url: "dV7xAvw7hfw?si=7r9GGBiMmVlKGTUO",
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
    url: "IRInfiyP_pg?si=TPd9NX8MUlxl218F",
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
    url: "orXS3wvcR18?si=JeV7dbvFzff-E9v7",
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
    url: "AID1LT_LgwA?si=ELwjgoXxQqUUEESN",
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
    url: "Rc5l1bD0m7U?si=Z_2oEqNYeHNqvUKo",
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
    url: "lHPo3WJ23K0?si=2S-rcdL9Cp4mjX6V",
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
    url: "YMT96_pvNQM?si=c2kQdAa9IUkO4py5",
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
    url: "l5eOgVjyVfU?si=eCmGKIKxiYskENSI",
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
    url: "5SNr7el_TlU?si=EXNQFuVFurSpuIIh",
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
    url: "zRybXfwdbsA?si=lYIzNM-A9ugALk4L",
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
    url: "5Tb03K_Hiuc?si=ODsW0s-p5ahhwN-l",
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
    url: "iCJIT1hAL3Y?si=jP6VyQ963At8UKyG",
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
    url: "jnp903OCp5M?si=ImSskvHIY0iPGnMe",
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
    url: "2y1Am90NO1w?si=4Kapi2fc8JIbq5j_",
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
    url: "fQQOaQw5gmI?si=WQCCluFLrI1x1b7q",
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
    url: "chxvqrhJ9qM?si=FHZDlQrvY0PiyQzJ",
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
    url: "JAQpLibvSWQ?si=c4K-LV_Eg6u442kw",
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
    url: "uce4nf3pAmI?si=-IDinkjj6pdCO6wt",
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
    url: "wx0-S_NzAJk?si=J6kY7nxnIvr8XhzG",
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
    url: "PiF2REi1xDY?si=_h6kwfvnZgzCa4rP",
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
    url: "6lqFps4VdMM?si=EZqdB5Z7KsGhcMjC",
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
    url: "IpYw-RGVRcE?si=FobPt6Bm95hOgiyC",
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
    url: "H75ElylmagM?si=tnhP9Dsy4KNNpVqe",
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
    url: "6XB0IkeYlto?si=ekbRdM_kz9TfPRQa",
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
    url: "cLlNOtNGaXw?si=j3nkOGpBzZgsQn6s",
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
    url: "-gmF6Ga_NzE?si=rGpDO1zBqH56EFNa",
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
    url: "k7h7NCS0Z0E?si=luORx8IxBbcC7mVV",
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
    url: "oolDrez7AEw?si=wzoUNI3LliPJU1ky",
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
    url: "JoRDDbZu880?si=mBHOFUVlF-tH4OAU",
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
    url: "Mjuua9190R4?si=ETTv4VmQxJ8Y7XFP",
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
    url: "imyya82heEM?si=eYJoIyfuz8SYwtZK",
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
    url: "NAHW_hPS5vE?si=Gkp7Bq3BXyzlMz3f",
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
    url: "t68uY_zef7I?si=os8RuNl7TohNBfbp",
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
    url: "Xx96QODHXkw?si=lvr6lGER5yKCA5oL",
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
    url: "22VlDMkfUz0?si=C39ac978UQWIy7KQ",
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
    url: "0mqnWMVOPvE?si=xZojghalLLkUnOTO",
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
    url: "OQ-jUUYVY0c?si=35ImlzySkPFzRmqN",
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
    url: "X7DWo5PXq3c?si=Zjubj8wQlDvQa0sz",
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
    url: "y5Pcss6WW4Q?si=2NcyjoNMATpRcWWq",
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
    url: "vOfsy8Sk380?si=APano_LF1jnkiFma",
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
    url: "kwU4fgh0nBc?si=RFmTWj1cbC-_tXNq",
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
    url: "PDrKeBq9iR4?si=xB-CV1duzV6U1Cjd",
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
    url: "YLB_Lh7tNwY?si=T1mJggnHmU2L84df",
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
    url: "JTKCN-TYKf0?si=GbbayAJ55Z2q0uAp",
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
    url: "QQpQ2lBLBSs?si=h9q_2qoim00MHQRK",
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
    url: "0U42pjVjYkI?si=YpvTwDUWH76miCpM",
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
    url: "Vb9t5FRF85s?si=m9pr1Cgfi4sxRkOn",
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
    url: "IRwBW5JVXCM?si=g8lupWB8gfgSPXXw",
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
    url: "b7ePcg7iDAc?si=tdKEymokS1kFHuTo",
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
    url: "HLaqqzZFaOk?si=Aw5ezwnolcQK9dhw",
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
    url: "Y4M6wHPP0pQ?si=zE1rfdLoMrJJkcLG",
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
    url: "NWaxuRhoWyI?si=ItPmaWg9oTrBAyEm",
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
    url: "pd3LmW0wavo?si=b3szhz8sMsuyfQAH",
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
    url: "XdwZyCTMjo8?si=p7ZFvS86biqZR6hz",
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
    url: "jqtjhTVzUR0?si=4Upro9ruq9tcs_ZF",
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
    url: "b94fdPkFFpE?si=92pp5Dm36ecglvnS",
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
    url: "hrR5DdDK6dk?si=tS25WAHKwYI-4Qn7",
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
    url: "sk1eRnMKBZY?si=-z31Xnf7cT0HZ9DP",
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
    url: "ba4hxsuQgdo?si=mt-TvgHbdI6-Kci5",
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
    url: "AR_ARR3R-gE?si=i356a9AtijyIL_Xz",
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
    url: "VePcgXTMUP0?si=DTSk4b0AKNRt-7n2",
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
    url: "RroGfG1J_Hg?si=HxQPhuTZ-OulYgJU",
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
    url: "ASvvOoZUBPI?si=j3PUyitzT9usoQGu",
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
    url: "_OgvP1itlU0?si=bDnoZ0iG-USxNojO",
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
    url: "N3rKz-TW6l8?si=dDVzGkXrtUie8V7x",
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
    url: "A_i9_TDeoPE?si=7UitjSoaMqcUy5Le",
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
    url: "euiC67mToaA?si=MeB7W8X6ibJclEVS",
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
    url: "RTwh6NeHRsY?si=y-SNogXXeiv4xZTC",
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
    url: "9AKLrerzzn0?si=t6B8qRRfctSCpf9m",
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
    url: "4QPVPO8J-Vc?si=wI3P3psx7Sxlh6_F",
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
    url: "mNOMazm0hE0?si=a7dNUG6132VlD08i",
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
    url: "NixeYqDy4lM?si=CWVRNjNj4ewhVxYT",
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
    url: "uStyDxWXN0s?si=0ArauWodXkMHzZ5l",
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
    url: "yfhKGdrNQWg?si=vHwtgGwKdx9IBsfg",
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
    url: "q8GlUStp5R8?si=D8nZfKRxBESuFe2_",
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
    url: "e4p9DICsajE?si=cZrxOyTXKUy2EElt",
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
    url: "ODSjVLli5UQ?si=MUd1J0Hkd3ciXQ_z",
    img: "XC1.png",
    music: "XC1/71.mp3",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1", "FC"],
    }
  },
  {
    name: "Mechonis Field",
    url: "TJ2AVbOqfh4?si=u2k8PSH7XkpL9Y_-",
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
    url: "QkoxKmHaVjU?si=yGE0nuxKEkedQ4vI",
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
    url: "QkoxKmHaVjU?si=9bcXw_6Eva91fXjF",
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
    url: "nWBP57puwlk?si=_O9YcgiG3j49W_Ej",
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
    url: "MI5NnSwHtTI?si=-_60I-g4k3wrOhhv",
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
    url: "69b83F5TOXE?si=7TY-lXDouszsU-o4",
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
    url: "kxV345bg4Vo?si=6taWumLFrLnSLQjK",
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
    url: "MrCS1ubkdAs?si=NPMtCXbpvkgSs-0s",
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
    url: "htwSNpaY_SE?si=fi_JPcM1Vx4c0Fef",
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
    url: "mICc8CrGS3U?si=5oR5Vqu5ZtjWIJQa",
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
    url: "XfqElnWGA6E?si=Af_ALfWV-qCEJhHG",
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
    url: "y_0KyJhqBl4?si=zxJhsgEvuBzar9PC",
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
    url: "vLTay2Jsa1U?si=bv8-FwO8GB099iMi",
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
    url: "E7eHhT1Q6w8?si=OfaOBLnqiEqz-wTc",
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
    url: "rE9pPnsB2EU?si=eb4d8BKw206PIuB1",
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
    url: "MVHXjfk7H1k?si=dqrhqFE6DZvgpvpY",
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
    url: "7aVDOVTS7VA?si=cGV874c5jFpmtGtv",
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
    url: "kPh4m1LewPg?si=_FfWgJq6ixOPgZhi",
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
    url: "P70hcop3lJY?si=PoaYTEnkoEcRnE66",
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
    url: "c2fkfQONC2A?si=MKtPYdovE-lP0oWs",
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
    url: "uMrQ7yusrlA?si=Pg83_xoVOTdMxJtn",
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
    url: "hHOQQdHUuNY?si=nxRbdb8P_clVGXtu",
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
    url: "IOdrvmyoCg4?si=s7w9q12VunIuzuDF",
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
    url: "GDfacPVGaho?si=YuCvPG4ZnmDtzt6g",
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
    url: "BcVaUhQIokE?si=chqEhzRex9UZ6Jxh",
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
    url: "SrsQAsWnRQs?si=dWcsT_A16Ckl_sZC",
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
    url: "_DzTKZutjKU?si=0L7x8SfbaFBQDK81",
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
    url: "UaJ-YE_WuNY?si=0lSEIof1UM8dsawq",
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
    url: "_DfjXNZ3sMA?si=XGITBhrU_aJVjmRN",
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
    url: "iAIGTNJZSHU?si=z5yPVBvJiJKChGxI",
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
    url: "jeEgdxbXd4M?si=_T1QHYmY1O8qGlTn",
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
    url: "xDDNXZGTJyo?si=fzcxf_td0acrb5Gf",
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
    url: "uwHRljXQ0ps?si=_iNdcY4lzHEh8yZN",
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
    url: "2WtuO87UPDA?si=NKKVR3XyIQSp0yWi",
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
    url: "FJ2xnl8K7Rs?si=O6OYtXCgGVh7R_ff",
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
    url: "ZsrSt5H2KDw?si=Xmhlr80AchrSS-II",
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
    url: "3lTvxJnmAR0?si=iS5G8Ffmsx7jAPqf",
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
    url: "uuYbQKZ5G3U?si=u14uQl_MBV4TL48e",
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
    url: "lAxh7Hf7Jhg?si=Ypi3_hEPg12GGQom",
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
    url: "8rDgj36WlIw?si=ZTmuq_d0SNy3BiY9",
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
    url: "HIQv4_bHcQ8?si=JHXHNUyO8sFURwyi",
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
    url: "Q-tJBoPUn3U?si=5o2-c00yqkeikTvC",
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
    url: "qJB4dY-CbLI?si=41i7nSAQRlI3yzU-",
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
    url: "UM0qbHq8Tvg?si=PB07K0CS3Vp8-CfG",
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
    url: "_nMz9o-Ja5o?si=NkE2sfLwNmZyt14_",
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
    url: "WZgw90_jFCg?si=SEiTnhiIKD2VVYf4",
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
    url: "ZR7RbsGmG_Q?si=6HotDnU4br32oyWI",
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
    url: "p3Rm6kzpaDA?si=lqVNZQDsprxbEXGZ",
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
    url: "h_bNzR9rACo?si=5PFNY0U90-1P23Td",
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
    url: "HiV9w-I8Aqc?si=C7Tam0fwzYRTXTH_",
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
    url: "ZJmAQtOzD9I?si=tzhApVc9ZMmgOEey",
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
    url: "o-GIBDa3HUQ?si=C4YLOxoz9jiPrF5T",
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
    url: "jn9itRwhZ74?si=e8r5z4Q12ZcWhnjs",
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
    url: "xpZhF-EBkss?si=mlNC9OhCmgAmm-vs",
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
    url: "sVyoXU9eJ60?si=tuV-RFaPGCIlpqPE",
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
    url: "TCX3P2Y2Nvs?si=wJUKQV6klRQhBnWR",
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
    url: "KwPX2st6fxM?si=8g5ey-1yQVsiymlJ",
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
    url: "tmlUIW91FHE?si=-AGNbCGpHncctNg_",
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
    url: "YznjLP0uKk0?si=SCzTcNsRrbfBjYCL",
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
    url: "OAxb9z-1T5o?si=ieSFF1Kc38TaDMbc",
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
    url: "RCP2rq0lzFw?si=dxjclmD8y_GLcJbv",
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
    url: "luGLXIxGIXs?si=nZJJtPVMTJOew7nM",
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
    url: "sIUGYQL4nLE?si=HQvXoMWBG1oGIvWQ",
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
    url: "Re9-5p8ApBA?si=iRspD8wSFAcA1Csu",
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
    url: "z3UrFyeUQJM?si=BC5fQzi78rS4CdT-",
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
    url: "lrkY-fLkx1o?si=8PJ1-tUeZbBQmKDh",
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
    url: "Sx_KOScY4n8?si=vicHMH4lS6YCv9-q",
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
    url: "TSoS_Lxg8lI?si=KZ7MGBHu8SFynVPk",
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
    url: "0d3kwLdQp3g?si=JnnMUUVeaAi6iewe",
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
    url: "6cU1WBd8lDw?si=ceBRHwzI24G2_Oy_",
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
    url: "QyClmZV58ww?si=IhAi2WtEgSpIwE28",
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
    url: "KMGM2OR2stc?si=w9SgU-rxHda3G-mc",
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
    url: "tFvYq0NzFoE?si=uJuvmlu7WbPepoyg",
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
    url: "1Yb0-us8yUg?si=7cuc2VOP1_B_Az60",
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
    url: "FFwLjkDkplg?si=84QxFLtCN-sfPHQw",
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
    url: "BXj9WTl4SZQ?si=DqqZr4BUATBx6TSH",
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
    url: "NvK4jy44viY?si=lMMEPLTQE2LiP2Zf",
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
    url: "CPVOOX7G-RA?si=vllQKEyCvsA1mODl",
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
    url: "L8ee8rvKi4o?si=tjgG5ZYlbPFQ4NQ_",
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
    url: "ojtgOt4FuuU?si=VPUGgUcygDCVOHHR",
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
    url: "WzNbgIb7kC0?si=hB5wlLzf2_fcJLYL",
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
    url: "KmsmTElnDLk?si=bJ4e2DZJr6IJCtuR",
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
    url: "3rg0OqVD4BM?si=NPnwzyywTQdY5vj_",
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
    url: "u0AwydrUM68?si=nfAx8-5nDMEfqj2R",
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
    url: "udQFFfnR0DA?si=fpS-G8i8Lws0rwU9",
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
    url: "2Es--2Hu8tQ?si=Fupiybz2wy97qTKJ",
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
    url: "JETzyfR_jM0?si=-3ARwHGhko0_oYfy",
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
    url: "agEnMNVhdpk?si=KG6TIfiMLLbv2zFg",
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
    url: "MsqLYo1xUbs?si=B_mgbQBcv-p4SdwQ",
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
    url: "mWmm4VkFo6Q?si=0BFzTCtlwHjz18w8",
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
    url: "ZXpHyTO8osU?si=nJ1HdQqNDTHK6AL_",
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
    url: "2oPCdppE7Eo?si=ULskrqAaahZQeLmU",
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
    url: "aOxN57PxOAk?si=sXnnywsXKeqLhMvv",
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
    url: "tT_onm1G07w?si=ouhjQEekUgMNEyuw",
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
    url: "gDRsu1FbfIo?si=2keBvQGvgOJsF-pj",
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
    url: "np5UlZ-Ho-4?si=YDoWYuC9Qcbb9ddp",
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
    url: "kLcfWb7dK9I?si=tv_fFXURmgMFRD88",
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
    url: "VgmmL-7byp4?si=R0nLZWTxUSMVcdEm",
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
    url: "Wgtw8T5me9E?si=xXRMPja4BF-tlxc3",
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
    url: "pxhIj0tSLmc?si=eaBM1RYxiC-GZ0qQ",
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
    url: "7qI7MKfhuHs?si=pB9otfQU9ryn073g",
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
    url: "yoxynA65SbM?si=0X3JbGp6CuKKVnLy",
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
    url: "6p4VV3Zot6s?si=xeCptfIFlfFwBk-5",
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
    url: "A_--1QTl6jU?si=vbFXO89-fIWFT3TK",
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
    url: "yyWIvshLOJU?si=Splr44bfu-TmjXOU",
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
    url: "kdYbUyEA8cs?si=9POj-MzPsXsEp1rM",
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
    url: "3gLhy5GcGr8?si=iDwo5w3grbXULVmq",
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
    url: "Wu07OA2CvDQ?si=Y1Yx9645SS80RlM4",
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
    url: "sReJjMdNE2U?si=I-vv5vIw2Y6ueIht",
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
    url: "S299wvRJ1bo?si=k1uJJOGt5ThKlKlm",
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
    url: "xu0pxOZvulA?si=CetLt6B3qwq-ojOO",
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
    url: "7oXmpIZBLzg?si=PSvnUSdKx5l_ULUF",
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
    url: "6p0BoQ93adc?si=ONo3k1nkzYxlYohI",
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
    url: "nkN-noFIAA8?si=VzrGADgO1ap8H6jz",
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
    url: "GLgWYMXc0Uo?si=spJ6coPpkxYFN2zo",
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
    url: "Z5LoeIxsnDE?si=tot2DpGt0kPK7pIN",
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
    url: "VzPOSigrIfE?si=vGbNgeYQ75h15ahy",
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
    url: "645qEme_tb8?si=1IVzrQvXxvf1mKLX",
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
    url: "Ea11VXc-v-k?si=7Ni01ttY0B3-7ffE",
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
    url: "weBdLPLaON0?si=XmSora59OA6SZkbM",
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
    url: "xzcG4ADSY-Y?si=rR7legs8NxQQpy2a",
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
    url: "gg-epvFiUus?si=Jnh53ulq6mz0gq2O",
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
    url: "N0bfcDlRpJA?si=XpTi65WUp75XdKW-",
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
    url: "RSQ03Q5xLh4?si=4CZCKPeGLo-WV9E_",
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
    url: "u6YHH7gH2IM?si=ViAM_WjQ-ak4jgjd",
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
    url: "gY4rOS9_IcI?si=29TnJPzGkBtEh4aG",
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
    url: "mzp8HAJTtBg?si=Jde4IihG2oGoFH_B",
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
    url: "2dga4-7PPAA?si=namXMxAFcc1QE32_",
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
    url: "Pog_L1yYScA?si=o4BI42iFmelb8V_V",
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
    url: "ZypKFvTF1tc?si=ug3CP9a7uXvgs2nN",
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
    url: "wnVGUJvPVyw?si=7OnRKqoHgydRkcXc",
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
    url: "YG3ZiQ9JiaI?si=Dcnt83JXwFb9Hlp1",
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
    url: "FrJi-iM7I1Y?si=jTAemC3AYOH1KtJb",
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
    url: "LFL3c3r6Mfw?si=8Ks5YDNGzc_jVHzK",
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
    url: "LFL3c3r6Mfw?si=Y2QQAoMGDKb8AjSh",
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
    url: "1tyn8eXpF14?si=0qi_aornYWB2YwTB",
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
    url: "z0v9FX-hLR0?si=lg9oPAOHbLXZegFe",
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
    url: "OkGuDBtRHd0?si=6dRk81n_8I2GNL59",
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
    url: "6FlfQ2TyPgw?si=z4Fbx_lV5TKmyppz",
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
    url: "rVAG4CxZ3Ak?si=idJq6ir8SeVaYkOJ",
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
    url: "ekUPO9druu8?si=OaZYLLyOx2CzVEQ-",
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
    url: "hAdYz64B_v4?si=oSEP4m4vILqcMICc",
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
    url: "22VRuM1f6AA?si=uGl4c6F0m0pSAcSy",
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
    url: "TSvrjjdIgDw?si=XMXjmKuI8vSyi4j9",
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
    url: "N3JnslZ_jiQ?si=3EgIoNEEHMJWWhmk",
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
    url: "fT4DPC_MNJY?si=NXze9iqSRPPgbw2X",
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
    url: "ocHZ7HS5P-o?si=kKhFsTOHr3sO5mmv",
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
    url: "9eGAZQ-fbG4?si=5bf3B1duFN9bcEMn",
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
    url: "3A3UBif9jPQ?si=vQMv78XTVizu1oFX",
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
    url: "WvHJybC1gSU?si=YqrXfuMBzgidOmvb",
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
    url: "XCFC2zH4kQs?si=maqE6hOv3k8XoWFa",
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
    url: "F58GmozGbiQ?si=POWFy_n4AIDLUNGv",
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
    url: "uo-qUFzMRBo?si=xLDVGDwPFPvpabRa",
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
    url: "5G8Z4p7PIck?si=00Me3gJIBjxuPCgn",
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
    url: "NAQY8-1TTog?si=sXp4TxfivUrW-98o",
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
    url: "fO11VzYoqKQ?si=ziYyzfyKmP6afxrU",
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
    url: "vLTN2_7jvUw?si=MaTk9kejFZ2VbWZ7",
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
    url: "dp3s22JEsKc?si=RJKv9JQmBUPAXole",
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
    url: "qYNkI0mTnJU?si=d0iVVZuZ6csr8nuB",
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
    url: "lmkQF9Hm2Es?si=LMc40EMwcoGCPiVA",
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
    url: "gbzvkrX1swk?si=oLtOe0xldbgqnTzq",
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
    url: "fcHJFZKj_5I?si=XZCsnyd2n-gd97e0",
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
    url: "2EBJL2j4htU?si=oB43C3vMXV036HpI",
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
    url: "KYfwwo14Ss4?si=EfW9i_BO5nPISfgS",
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
    url: "0efFquhsHLY?si=X5u52wRwubhYFeal",
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
    url: "Zn_MXqH8MaQ?si=nAdlf8L8UMK6_ZZZ",
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
    url: "PNOJDX5U-Bw?si=LTX6Dmo7LZ2Lqi4b",
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
    url: "-uqTTs1xSZk?si=5IUau8-jugUcbUsz",
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
    url: "fuvJFpRs8Ew?si=f9qLF5kkRDZoGide",
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
    url: "lmKdOrwLOl8?si=kp6HrnQCSNrtDVBV",
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
    url: "oUZ8CO4CTU0?si=FlhLN8QVIdE3kXhh",
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
    url: "8Kkj6CACosk?si=dWO21pGGrV1cp55j",
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
    url: "dtqyQAtSUC8?si=btRBX8fbtHHU_CZ3",
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
    url: "UOpIL0RXNCQ?si=pMbH_XSvC-XBxWyV",
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
    url: "jLqi2Zf3RYE?si=h6rWCpF1G1MPq0G0",
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
    url: "9rKAK1w3JnA?si=CSoUc8utqJdZWpIz",
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
    url: "Cdd7xclAonk?si=5WCVUfqlSp3wUwX2",
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
    url: "q3NqH5lz9_U?si=d8JdcDSOc_L6J1Ju",
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
    url: "3fjOaz2f6_s?si=jKcs2iCf-gG8nCsu",
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
    url: "DdkCzUVohOQ?si=Pft8qmpruClCOHF9",
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
    url: "5fSlT3YAkPE?si=BCKbLOVWVGi_1pT4",
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
    url: "VntL9CUw1Sc?si=voW1Fxa9aVWfm69y",
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
    url: "L397QrnkLVI?si=hiMRVbCCptBEbD_x",
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
    url: "jy8VmnE5MJs?si=a4g63p_IGJHLS4fn",
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
    url: "AWFdhFU2u3s?si=tl7w_4Pk_DDq1TAE",
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
    url: "PUMGOWtnS3A?si=0taWTTEoDxNp_IFK",
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
    url: "RsIyZFL-LdI?si=aHosGNTuo3mzQ85x",
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
    url: "xvVkrhujEJg?si=NlH-PDIpYC0PYRc6",
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
    url: "p5lMzSnStPI?si=HTmCeiQeNOHthefP",
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
    url: "DNRqjasioAU?si=FytCBdityM6ijO44",
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
    url: "_ggwbZMNyWQ?si=P8kL98IkBnWfHcTo",
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
    url: "ufk0ypyRtLE?si=7D-LwV0DmsNZEROh",
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
    url: "zt-ahfxZSZk?si=WRHIHA-Lgab1b0oz",
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
    url: "cllH7kfP3ZY?si=9e-zWCWnKu8Qe21X",
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
    url: "dbFfVLOVvDo?si=QZlyvv1vYhRTM_dn",
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
    url: "Ni0qTLkqoZs?si=-wtfhyyVIduOel54",
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
    url: "hZwC_nJ0ixU?si=ThUL3OLeuqYWp1-s",
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
    url: "kwPl9sgNNWs?si=hs9yAiJhvJr-yO_H",
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
    url: "-NYodEt_1uU?si=uwEZcmEOiEawuO_b",
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
    url: "kPxRL2nta7I?si=jEqG1VudyTwQ8OUw",
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
    url: "bX84NA0kbJA?si=0kV770RzHqteeqWD",
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
    url: "hQ6BbaocXEM?si=0qYZbzng9n5AyY7D",
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
    url: "WIAz4FDpX1M?si=cT7WgPJdOMrnSsqn",
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
    url: "bXXbYg1QiWY?si=aTZ31_93y8EHLpym",
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
    url: "hQracuNWSyc?si=T_TYKOru3hmS8bSN",
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
    url: "TbehqVmhrUM?si=pUuFbJMC93NxdwV5",
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
    url: "kX-WiqHYS-Y?si=FuCZM8X2Zn7FfhwG",
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
    url: "JxeiVsNCKNQ?si=FRDPDUZnmhHE3nYD",
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
    url: "Xoi-_u59OaE?si=6itIc4uw3YKgaHNo",
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
    url: "_sQnu-YKjL4?si=vwFSFTUbygBTAU9v",
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
    url: "QDezA9hvrF8?si=Yav7hmzQ0w8S8Nk0",
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
    url: "l6wMhDHeleE?si=whZJG5Prx_VnjJDh",
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
    url: "vspjvtHmIG8?si=n1ERZNFAAoMn0QRb",
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
    url: "MlmbmTByvMc?si=fsMaXCTXp9-FQch_",
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
    url: "8hfp0I_V0nE?si=uZ_VCwB6ZF3q97Qz",
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
    url: "WXFfDEYTEqk?si=FpKTZdpuljv5gBC4",
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
    url: "M2LPtrWzFno?si=_w5vE6dN9XpnMI6l",
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
    url: "0GSnlDadGk4?si=jWoNW7tlBBhF8H3c",
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
    url: "LAML_XBrcU4?si=lAoecPTW1-vK_nuS",
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
    url: "fOI9sQo-Er4?si=bGC9cTyTHOxQkCN1",
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
    url: "z04XtSPtg_Q?si=pVylCf2MMHNZ4E4N",
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
    url: "q8Y-37ybYiM?si=1rl1dgOeF0z6aCIH",
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
    url: "WtmFXry4TFQ?si=5jj-Szh9Z1CJXGt7",
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
    url: "6Dpt2HyI1Xs?si=PFhNjfe0nwu6SlKB",
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
    url: "4nRIQ0sHxQg?si=iMpNP64-7uM2ZVqN",
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
    url: "g_Fh4UIQrmw?si=DfzLD6Bs6gWLpeLP",
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
    url: "tKslFeRXsIc?si=tmK6Aiz-POqlRB1N",
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
    url: "nh04YFkODOc?si=cNrmj_78hZLgOukc",
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
    url: "K4CtX4ULsg4?si=3rOXzaam2hqfJEn0",
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
    url: "FlAC6rQWjvc?si=ePAZCq1zkdV7Kuua",
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
    url: "U6__0eFx0xg?si=kVy5P35VbJLtHJXi",
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
    url: "vC_xrv1z1zI?si=v86Vw6IZIPjfezgJ",
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
    url: "wjkCS3Eghec?si=3AMr0xdLoRACefzJ",
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
    url: "qeTSQcSeWZ8?si=BlarEJm1bXjPAViD",
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
    url: "ClN64RPz5s0?si=NJypPt7-cIXj6GFm",
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
    url: "1Cf0mf_nVlc?si=MfAMIwQVIdLJw0pw",
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
    url: "B2RPbPHDL9I?si=jTuGPkdJDwjiYDIk",
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
    url: "D9JdyGZoMuY?si=-UL1fEBOnNVJK6lJ",
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
    url: "dL03-NYN4Tc?si=CL5KVSXDNXCFY7XQ",
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
    url: "RJUOHcxRLCs?si=w4lriOMDltjMdpQO",
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
    url: "4wWL-fozJW0?si=4vXwi3gxKJ8J5Crl",
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
    url: "FP9I0oisz-M?si=r-tv_axEsD5X0o-l",
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
    url: "IXar4UwFio8?si=xAiKaAKy8w15elxV",
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
    url: "NLs5_oNh57U?si=mX8wK8hPlW-QZxjX",
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
    url: "qX0cV4CJQBM?si=K3b2NDjEflv6Qhou",
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
    url: "aHNoSevF4l8?si=sFmXCtZnh6g47_Xd",
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
    url: "AaH3hH0v3H0?si=nnSdlleT3vqL3S1b",
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
    url: "x0Gf3J5ufsg?si=Q4PxCbaFPNb2xQu7",
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
    url: "-XHvQbfuoic?si=70XqY6Z6OORwHwX5",
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
    url: "NDMeFgkaysI?si=ciMt0m0xxnmT38Wk",
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
    url: "wpziirN0hG8?si=3gQ4V3YxVTivjv1R",
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
    url: "2UEtiSZ3gTg?si=9VzYGbrAc4K8gYRg",
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
    url: "YYEtSgxtD6g?si=KgVnViO269ubzF8Y",
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
    url: "U2e8vBFLaGY?si=yr7yc4Cx310ma48D",
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
    url: "PxwcJnq1awY?si=HNts0AZC-WQj0Qt4",
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
    url: "TYPSEjoOV9A?si=YBO-knMN7CAfcHXk",
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
    url: "oUVgiw4k1aI?si=og7CsUlyZ23VSUWr",
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
    url: "5UzFD1NqSJA?si=wLky8Dn3fy5-OmLm",
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
    url: "pnwvFJk7460?si=CubYz47RwPCxT8mc",
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
    url: "UhLf42CglPE?si=Y8YREykmF8zkuMe5",
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
    url: "vCAgmTFvtNc?si=QJ2lV_Kjyy-04iCq",
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
    url: "V3IEXMNHQNM?si=DBVkQf04eDnZV6_K",
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
    url: "UjyWfB7aICc?si=MywSe1J8IT8T7SIr",
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
    url: "148rt6PHKQ8?si=SXBuiNaNcM5HzCQK",
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
    url: "OhSU5MKJSng?si=KUC5G2GW1Elu7OlB",
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
    url: "iStaHHjD9TQ?si=AN0BwBsmfj3pV0MQ",
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
    url: "qEDJTSYjMJc?si=zfdgbctfIXXUz3ly",
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
    url: "n-vVdEk7-DE?si=llwYilQ4W71FZjMK",
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
    url: "Ucm2DlM54no?si=7wFAlmQTjeUPw-KM",
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
    url: "oI6m0ZhoKSM?si=M8WlBKz15njWwxxM",
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
    url: "fvQVr5nxIzo?si=Dm4JLMW37UkGaB2-",
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
    url: "t0rrwyn8eS8?si=DuWEsxqCYyoSIYAx",
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
    url: "llYonIbXXfo?si=RzVdwAPGQoi-bX6c",
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
    url: "H-Ic6jgseAo?si=VzhuHUmrttWmqQW8",
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
    url: "x591yyXj45U?si=jsY6ofgJ7qLZAOpm",
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
    url: "Nbo9Llpr3j0?si=zlM9eNbewmg-75ZB",
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
    url: "LK35tLeE0wE?si=6Mt5SAF6oGldPyf4",
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
    url: "roCPWdWwLaw?si=Jn7prHOelvQRCjRq",
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
    url: "l3WgofBJIgU?si=KWq3NuP2v88Pgiub",
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
    url: "y9zgrV6Dvw0?si=a394arwEfCtu7cUM",
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
    url: "bGrEv8KVU4A?si=_VvJ-Q5-ca6I5TpA",
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
    url: "mhrLXWcTRB0?si=_fDPpVghOFwZRxim",
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
    url: "M-rBJdqrz8M?si=LOWmgsDw-Cbqixv3",
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
    url: "hVPU43DZA9M?si=rVjvDb3zTj6VuUnX",
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
    url: "5rKJWiQ0HCs?si=yAhCLh_Do1R01Iys",
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
    url: "AbRwYDx10I4?si=OTZd-TDPZalLdWRu",
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
    url: "c4jm7bGsC8k?si=LGbOMOh2B7Gg1JgU",
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
    url: "3DCrpjbOK6M?si=C6c51-mSZX_5CvtF",
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
    url: "-TlbGC7nPmA?si=FMqQHsldFvtjy36t",
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
    url: "bxz3XCnQ-Qk?si=nKJFiGdudwp_BBfz",
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
    url: "zw89vuX2JeU?si=Yxii1MSF3WgweH8r",
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
    url: "faUb-i-a9Js?si=7OZJo9A-vWuwnIkH",
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
    url: "dso5vniU93g?si=pPsM4_EZxvTM4kCu",
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
    url: "E5KSvAtL63o?si=nC3AmmVhUL9JNm1n",
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
    url: "GGZx35QGRm4?si=NNBP0pkhyP7rzQYw",
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
    url: "XNuot_djx9g?si=qBvcjcozzkNRL0jH",
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
    url: "AE_TDMzf8jU?si=we9gh4BqXEqZjm_H",
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
    url: "7NzxUUEEyIw?si=IP2gUL_tfe2hu6aZ",
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
    url: "cctNKkI0gGM?si=7KIJESQ6CWaQm91f",
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
    url: "YC4_qx2kqJU?si=QXEpspP3JWpkfUYf",
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
    url: "knyoz1_CJKI?si=pLfoei34kY-0o_oq",
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
    url: "-EyBcw_bDYQ?si=IS-GX4ENZ_dnYs2c",
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
    url: "Zyn3KgAbaWc?si=zJF11kYxDy6gVQuB",
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
    url: "2cIbF4tGz5s?si=TOIx2_2-pl6rTG6z",
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
    url: "Oo0SmZphrR4?si=pm8sEz2eWzSFL0R4",
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
    url: "D4VfxMddBok?si=9rgMPHi3eoVZIOKB",
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
    url: "TiRHe-PbS9M?si=O-B_VzOCeVe7fTHU",
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
    url: "8dWEjRLzn2c?si=RvnEu8qlWmcZqlZB",
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
    url: "p_ayrHSwXyQ?si=59qixMIKWbEe3nQ1",
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
    url: "SrfPn2hMuAk?si=Z6LAfRm7juxz70DW",
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
    url: "WbZ9rwnLoRk?si=mX30wCzYAUK3dkfn",
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
    url: "59lhbK81ojs?si=sE9XkKqhyJxVtyS8",
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
    url: "TZkx4Tx2hig?si=6ZZJ2SZLbl6XOD4I",
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
    url: "w7SCDY2hrhw?si=Y1gdt7_ZrDZOS6V-",
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
    url: "bT10fW6WlMk?si=yCIXtuYjM3DYnfaF",
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
    url: "p3Y11vkxF9c?si=nhcovXeljs9rHLo_",
    img: "XC3.png",
    music: "XC3/117.mp3",
    opts: {
      role: [],
      composers: ["kiyota", "mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Z - Harbinger of the End",
    url: "nLVS3e0MoBg?si=8Ts3vpK9EMOuuBLg",
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
    url: "bMoU0t-KLGQ?si=VwWqsQNoXEzwe1M5",
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
    url: "DqZTH5zeQPo?si=C51Ra6jcf81Er3Dv",
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
    url: "rYY14hYFq0I?si=H3oPxAlv6KRpkav_",
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
    url: "3bQHm0-Zyjw?si=mNAlLpQLzwxeAisv",
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
    url: "eHyYSHPCC2M?si=jOtHff-GWrAuZGOt",
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
    url: "gyhx91rLaJI?si=iiEgR2O0Tn98NxUI",
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
    url: "snlkIL6UtH8?si=_4fQ0epBsYz0IfzC",
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
    url: "ANSgqLkRgDA?si=kk2A4Vk2rqe_-i87",
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
    url: "CyD3a74NnYI?si=KhIwKhBpuGWaPkhI",
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
    url: "4wNWhlQ6EbI?si=jgmUf_jryIzgEUHu",
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
    url: "YeKuDmWb598?si=rZGR-WA-LzOGCWVT",
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
    url: "RVxRnELD0Uw?si=meJIN7M7o7MuHdMb",
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
    url: "PAgGdySmc58?si=l_qTJcqbUhEyybGc",
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
    url: "IF3mSt3HIZs?si=1XdjDbd-6OBf8y_8",
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
    url: "a88Q7W4Nmos?si=gLMPLVnzZDzBWx1p",
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
    url: "_hjTMdxZj7Q?si=mdRY93vW3-eEor3B",
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
    url: "DgkXCYl3_Bk?si=bZtFY3LyeqdQ4Kbw",
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
    url: "8bcsozmg_Y4?si=49XqHR8dRfeeNhiw",
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
    url: "H3zs3DB6hmM?si=15anZ5XXxbZ9tO_w",
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
    url: "nAeoxJoXm1w?si=webgMe09jv8F7Atp",
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
    url: "nBWSP7-Dhqg?si=LClBz-aX6bdIeVG2",
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
    url: "vHlt9dVAwvs?si=cc4FFHMUS3kLTNni",
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
    url: "Xoo0K8gOcjM?si=QtyIkgivtumN-3pa",
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
    url: "wSW0TimoM2c?si=MZrYa1IFeFMcrSjq",
    img: "XC3.png",
    music: "XC3/142.mp3",
    opts: {
      role: ["vocal"],
      composers: ["mitsuda"],
      soundtrack: ["FR"],
    }
  },
]
