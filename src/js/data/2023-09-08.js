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
      { name: "ACE", key: "ace" },
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
      { name: "Xenoblade Chronicles: Definitive Edition", key: "XCDE" },
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

dataSet[dataSetVersion].songData = [
  // Xenogears
  {
    name: "Dark Daybreak",
    url: "iR1NcGdLgmg?si=JfIIsiTewIYZUHtm",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "STARS OF TEARS (OUT TAKE)",
    url: "NL7AvrAAfbw?si=HqkeFghwVg_-Wa1Q",
    opts: {
      role: ["vocal"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Bonds of Sea and Flame",
    url: "SOImlAzVNQI?si=Q0KyWzFK2eM9OzPf",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "My Village is Number One!",
    url: "S6vIPD5gxIM?si=mHHYznDPRaVzTnFd",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Valley Where the Wind Is Born",
    url: "kZgXWZ-lKZc?si=EgGtV9_M2CG6YXoa",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Faraway Promise",
    url: "NT8J38urT4M?si=Rl9RmK0bmRULz_V0",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Steel Giant",
    url: "iXNp6JTjZQY?si=QtO8BohhFwyBALdK",
    opts: {
      role: ["battle"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "The Blackmoon Forest",
    url: "8BZF4ZjnsRs?si=cE3iwlakNwnSQaXM",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Where the Egg of Dreams Hatches",
    url: "xNWHeV_BW7U?si=V8B2oKIqwp0z7b_y",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Dozing Off (Short Version)",
    url: "uPyM6jiD5Nc?si=0Uye16q7acWFWID9",
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
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Aspiration",
    url: "uPcHYNU08KI?si=YIBkLLgJe6Snf4aB",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Grahf, Ruler of Darkness",
    url: "i3XnRt2sCn0?si=RaLELg_bUyHaR-m1",
    opts: {
      role: ["battle"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Fuse",
    url: "6qKiSWq6DAY?si=32ONZ9esBHMx1pps",
    opts: {
      role: ["battle"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "After the Soldiers' Dream",
    url: "bcVpVhJ1HL4?si=EfeGWYXjrHqRyyAj",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Unstealable Jewel",
    url: "LVC6XX1B0h4?si=UR90Jgt8SbTti0gV",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Aveh, The Ancient Dance",
    url: "smKnHAPOWkk?si=aud7WgB5KqGLJqo4",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Invasion",
    url: "p0FlHnHDd2I?si=lbWbbL2rAFb3oOVf",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Stage of Death",
    url: "-6GE4SmL7l4?si=SjXntxiheNDRPVVE",
    opts: {
      role: ["battle"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "In A Dark Slumber...",
    url: "Ko2O5D9CgUk?si=qQefxgd8xuRAcTOt",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "The Gentle Breeze Sings",
    url: "V1N--pniiM8?si=sNvXuz7GEqFBbGUR",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Our Wounded Bodies Shall Advance Towards the Light",
    url: "PDMlXwxYwDs?si=Ts5X_wlj8adiHWwW",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "lost... Broken Shards",
    url: "AORK0aZ7liw?si=rXIuMHUZu1ikYWcV",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Thames, Spirit of the Men of the Sea",
    url: "rr0-CqfYd3s?si=amajA_2vUa5yLVT-",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "The Blue Traveler",
    url: "QgDqdyjBkfE?si=7RvZdFmb7st2wq2c",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "In a Prison of Peace and Regret",
    url: "NfxaDEW4VuU?si=1-ElNsmP1RaPZSCc",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Jaws of Ice",
    url: "TlyLmBzGhOo?si=a9AE9IbsJ1f6RWrq",
    opts: {
      role: ["area", "battle"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Crimson Knight",
    url: "Oy-jxTwMB1Y?si=4YBIYho57Rkw3jQ2",
    opts: {
      role: ["battle"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "October Mermaid",
    url: "uvtS3AEW3zw?si=GfmEwrZEK_-aozds",
    opts: {
      role: ["battle"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "The Wind Calls to Shevat in the Blue Sky",
    url: "4EHteRjTQc4?si=Cmt0q7AtnR9N_H9I",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "The Sky, the Clouds, and You",
    url: "wrRE8Uswdtw?si=ZzOTrvAMp_v1fasO",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "A Gathering of Stars in the Night Sky",
    url: "lrrTG_gs6YY?si=wrVQMR6dIjB9_2dm",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Tears of the Stars, Thoughts of the People",
    url: "Wtm0NEirjkA?si=M7iWPWV4NnX_Fqn_",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Flight",
    url: "VGNVDPvZ6xo?si=07UrdFgleoHAKnRX",
    opts: {
      role: ["battle"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Wings",
    url: "n_sl8GwoJEY?si=XNhUzyL8TwRgcfSm",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Solaris, Celestial Paradise",
    url: "6moiCUKQTS8?si=Thew_R-BUv6pU4Jk",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Dozing Off (Long Version)",
    url: "ETvFEoJjhnM?si=FsoKicyT4ipdZZhn",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "The One Who is Torn Apart",
    url: "xvVtJxl_TS4?si=vRXwR1ne4bXSBWC-",
    opts: {
      role: ["area", "battle"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "A Prayer for the Joy Man Desires",
    url: "nDGV_C2waQE?si=tf1noOCuR-8p-7Dj",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Premonition",
    url: "qiVt6tHHiGk?si=jwBH6X6VD4nQ2PSo",
    opts: {
      role: ["area", "battle"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "Awakening",
    url: "_3P5O73wysQ?si=QxNGJCsSIPmF5aqD",
    opts: {
      role: ["battle", "boss"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "One Who Bares Fangs at God",
    url: "UZ15aSoIBFE?si=VCh86wgr68hLZ4W4",
    opts: {
      role: ["battle", "boss"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "The Beginning and the End",
    url: "FGswtUG3zd8?si=DC3CjK-qoAsJCXRF",
    opts: {
      role: ["vocal"],
      composers: ["mitsuda"],
      games: ["XG"],
    }
  },
  {
    name: "SMALL TWO OF PIECES ~Broken Shards~",
    url: "DiqQhCwUyB4?si=IG0Ea_RHXP6HmUJk",
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
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Opening",
    url: "0rHRUF1KwIs?si=y8RO_wMJ9UckF8yF",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Battle",
    url: "1-qhTe5piKg?si=jZ2qbsiKw9H5E5e8",
    opts: {
      role: ["battle"],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Battle's End",
    url: "RGW5PXSrmzc?si=cM4mXV38jA2vp_4U",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Startup Test",
    url: "9aoLGamSCbU?si=4ih5iGqqyx_UTiPs",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Reminiscence",
    url: "zEA8j50YXFo?si=wp3bKqlWdqKIKcE6",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Gnosis",
    url: "TdelXKBE8DY?si=9GA840rdsG0S5-SG",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Awakening",
    url: "YXAgsZa6tDk?si=eWBT2WIlnC11NEMD",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Shion's Crisis",
    url: "Q59moyj-siY?si=PUiRMyHam5szQuje",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Battling KOS-MOS",
    url: "Vg6KiOjgVQ8?si=A5skj8Irlwz2DoSR",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Sorrow",
    url: "QDot5e1yyJ4?si=97IJ3dFEKK9kuV7y",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Life or Death",
    url: "srMf_bvqmJI?si=lBNLsolhb8VHWcg0",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Game Over",
    url: "VL6Vtlcwhok?si=mRsSbA-fxkLxMX5v",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Margulis",
    url: "a_kTXolhFA0?si=GNyeq8zzlmtbffmQ",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Pursued Spaceship",
    url: "qgiUKX0oQ-U?si=fVuVEk_z9RVi-Y0V",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Relief",
    url: "awV3FTrawQ8?si=dMWfEARKV0j3tjlh",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Everyday",
    url: "Zm4UE6Ddh-M?si=5H8YWBQp3Yg_jDjg",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "U.M.N.MODE",
    url: "agnlffbRkoE?si=uIDHle68h0dltLw1",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Durandal",
    url: "LThPL5mZKiY?si=xusOjXYlR-4EhP_f",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Invading the Enemy Ship",
    url: "oOq3hd5I9oo?si=02nPsGyTz1fScAC3",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "U-TIC Organization",
    url: "7ePlIcgo2Tg?si=bdNK30ScjMw9J8cl",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "The Girl Who Closed Her Heart",
    url: "e5LxH1UoXXU?si=diSvLtKxoWgbhLiR",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Kookai Foundation",
    url: "gcipWCJlHuU?si=qBitOg3Rx9_8I-iR",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Shion ~Memories of the Past~",
    url: "_6rHTA2mXlA?si=CouwWE7nTYCeRi7l",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Ormus",
    url: "E2PMet_MDpU?si=pAk3o2s6N0rKJ2C9",
    opts: {
      role: ["vocal", "area"],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Nephilim",
    url: "Nga0gEiu56U?si=gsh5263txThjYbKl",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Warmth",
    url: "-E_qkv1sYMs?si=lcW4fRPJv11aPR4R",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Anxiety",
    url: "VDxIflUv9oQ?si=kBGY2ch74e9En_cv",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "The Resurrection",
    url: "kcGugXhxWRQ?si=rUfi875IWryamRby",
    opts: {
      role: ["vocal"],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "The Beach of Nothingness",
    url: "eCa6lT6ifHI?si=rptzWfiF7fG9oPvd",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Green Sleeves",
    url: "1lmHnxD9g8E?si=4b7k-mYCJXLL6p08",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Zarathustra",
    url: "AferSR1baTE?si=wB-UmRkydpqGsRN8",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "KOS-MOS",
    url: "5eK8bYDJ56Y?si=2FQIgM_oOKYw7u68",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Panic",
    url: "k-odDG4VfTY?si=ieauJyf3Ypq_1m4D",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Song of Nephilim",
    url: "2qv0JVC-Ow0?si=PH1_N4NZ8oi16ZXq",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "The Miracle",
    url: "gzI6fiozvbA?si=sDVCUvbB-Jm56XGd",
    opts: {
      role: ["vocal"],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Inner Space",
    url: "ui5Oe71kiF4?si=oeZpTY5Na06Ee7DT",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Albedo",
    url: "_FP-xtoFhVM?si=WJU6nYxFaBxKVwIv",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Omega",
    url: "D3u953gLTwQ?si=LoIOdzJVDi8esCRs",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Proto Merkabah",
    url: "Kc_qMd0xUvA?si=NzD_c7LGK-IRkZU9",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Last Battle",
    url: "A7kELHsP5uA?si=6VFwZ9LpG_B9pOFb",
    opts: {
      role: ["battle", "boss"],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Pain",
    url: "tf_2iC9Bxz8?si=7YkN3wH06H0cTfxj",
    opts: {
      role: ["vocal"],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Escape",
    url: "IHhvIR0HbRU?si=zsVBkuhnLi2u_ehn",
    opts: {
      role: [],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Kokoro",
    url: "T6wRZHWfzqo?si=_6pf6UqdFDgtyamt",
    opts: {
      role: ["vocal"],
      composers: ["mitsuda"],
      games: ["XS1"],
    }
  },
  {
    name: "Shion ~Emotion~",
    url: "ZOXYiopiCfw?si=D_93N9Pga3xyhm8m",
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
    opts: {
      role: ["title"],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "first meeting",
    url: "qNH27ghkJYA?si=rtHjAfQO4DP3bKRr",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "Xenosaga II opening theme",
    url: "3saTSI89lUU?si=r9UUdkoqFqXxczAd",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "assault",
    url: "XMbO_9rWEic?si=noy8y83H4wo0LxK5",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "strain~Jin",
    url: "vs73R9kNImo?si=RGVXsntmmTfrSryc",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "here he comes",
    url: "TzZTUUXEl8c?si=yd9F8OHEyUtdUrfo",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "fatal fight (Jin & Margulis)",
    url: "YtA-iLt2rgw?si=qkfGNPSKNHAnaVI2",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "R&D report",
    url: "u98M7l1tStQ?si=jJ91iIb6EShLlL4r",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "chase",
    url: "GGnW2M5o-EI?si=PVoKSD1KdSunre3R",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "surrounded",
    url: "vjtrJdRKbzI?si=q4DYmEL-lzXxAIE1",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "lamentation",
    url: "bizbbwBrxFE?si=2BcNRkd37Yog11GX",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "Albedo",
    url: "ssjPWlaXQoA?si=rLYU4_WwIbQeq8XJ",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "communication breakdown",
    url: "8kJKM1dmZj8?si=u8Mn_dKwinLZODpP",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "Sakura (theme-piano ver.)",
    url: "BBk0WMZcD0E?si=P_-cXGtUaaYUeirW",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "Sakura #2 (theme-simple voc.ver.)",
    url: "9acWNrcEwKY?si=NkVp86-r6bP78swB",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "strained",
    url: "hToBXj93_jY?si=rXDjaPlIuigv-8-W",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "Jr. #2",
    url: "ycTBRXkrn3w?si=vmspg5xx4IdSvknJ",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "strained #2~Albedo #2",
    url: "_CWpKGnk3RM?si=t5RAHLd-NSGgeL9x",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "in the beginning. there was... #2",
    url: "mUAZn6p7hWw?si=avyhHbxeZUtFtNMQ",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "battle of Elsa",
    url: "EJzXw6-CkyI?si=5RS7TPXKF1_FqoUb",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "here she comes (KOS-MOS)",
    url: "E3tFn2P3HWI?si=UJImEDtfEtr6aWnH",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "battle of Elsa #2",
    url: "Quv8aH1N35o?si=4fJzQTZAQoLjnZZS",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "gate out",
    url: "6KiyvY2v_kg?si=tPmmXUkR6bJYgbFY",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "here he comes #2",
    url: "rBTIaFgsL5Y?si=24_FlhCIFLpnXl9h",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "creeping fear",
    url: "qREw7kPsE-w?si=-dte8pWIIDA1kCba",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "U-DO~Febronia",
    url: "jZKKTPsUkL0?si=4pNinwfT_rnRbYhz",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "final crisis",
    url: "CtsOnMHL0hg?si=92EkeKGGTanEd1yC",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "presentiment~Jr. #3",
    url: "wEygJqBbtJs?si=z6HvvqnVsAvJvRsG",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "a field of battle~bitter #2",
    url: "LO3F75KFqMA?si=Imh9wThxrxEH2zPv",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "inside~Sakura #3",
    url: "9U3ybj1EXXY?si=9dg7OY7mxhDZm_gt",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "I am free",
    url: "5mqnG3tw9Rc?si=eSz4NoSSmgpqMTdh",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "Sakura #4 (theme-gentle strings ver.)",
    url: "5kBZ2R6eIAA?si=wVjk_VWNFUFgahrN",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "Sweet Song (Xenosaga II ending theme)",
    url: "BmW1Y-rS6Tc?si=GMiaJkFqXoP5PLAl",
    opts: {
      role: ["vocal"],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "Jr.",
    url: "PKI0Bl5OZv0?si=zmL_u5_LqJus0MWn",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "Jr. #4",
    url: "dCLFFIJ84Uc?si=1FIlJIv9K4auAmQE",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "fatal fight #2",
    url: "Vcl_OLx-lc0?si=lUzr3RYumfnPvA5M",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "bitter",
    url: "d7he6UP8tAI?si=ruHTjwYqAQrV6_qY",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "Nephilim",
    url: "loCoDbbhVpQ?si=TJV2PlpMnMcnRagt",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "the image theme of Xenosaga II #piano ver.",
    url: "2bjsGePUwz4?si=7LA5PFLRl14R21c_",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS2"],
    }
  },
  {
    name: "the image theme of Xenosaga II",
    url: "hdotfD8ifBI?si=vBtGHwhjqQHv8v-E",
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
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "fallout",
    url: "EVHegW1hdP4?si=sMGuOXDIKUS4371j",
    opts: {
      role: ["battle"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "we've got the believe in something",
    url: "lZKI4HixDTA?si=foxQOdtOIWwbBD3I",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "a dark omen",
    url: "VJs3TKdlY4o?si=jMI7kLtUvsXx_U3Q",
    opts: {
      role: ["area"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "forgotten sanctuary",
    url: "3UFJFNbK35I?si=RlBw7kCf30FPUK7k",
    opts: {
      role: ["area"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "creeping into",
    url: "5cOKswdMs3M?si=fj1x6AKVg7VovrfX",
    opts: {
      role: ["area"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "the battle of your soul",
    url: "1BZdfONFodk?si=Rt1AJ7Fu-iWtk8CP",
    opts: {
      role: ["battle"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "rolling down the U.M.N.",
    url: "e30fvR53LIY?si=tg_Gnnfdj20mY5vZ",
    opts: {
      role: ["area"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "in a limestone cave",
    url: "YwEiRX9lrfE?si=PLBWlk0ZNvxRVGg6",
    opts: {
      role: ["area"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "inferno",
    url: "brkei4JLSZ0?si=q2Yu-E8mXUJfVoup",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "on our ways",
    url: "z922peRTB04?si=YC8E3_Nm45eYX92w",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "a new world",
    url: "oM5Ot0h7mGQ?si=ey2xjmbJOm_NhGWf",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "T-elos",
    url: "BnzFYLDp4Bs?si=7-5k2XXtG00Ylc7W",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "the Miltia incidents",
    url: "huj9m4ZH9Uw?si=6p0n0YonhUFP1gXI",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "Febronia",
    url: "u1Vt8EkLbe4?si=KvxYjHAfm9AlLIig",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "promised pain",
    url: "7HSWc56pE1M?si=vtBMCg2iwdq1bnUb",
    opts: {
      role: ["battle", "boss"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "mother, I miss you",
    url: "CdTiK7fLcTo?si=Y2bRYQv__1tB9tD0",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "fate",
    url: "SuaVur0Jna4?si=2kE8RDGgPtkrZnzj",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "Zarathustra dungeon",
    url: "9pqkz4_9UQg?si=QQqBqqKExxDsa6dO",
    opts: {
      role: ["area"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "shifting territories",
    url: "Cpc8FpgiNzg?si=e08r_HYG0Gzk-ZSo",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "hepatica#2",
    url: "cz3IbrcrCK8?si=Pmt27H2KP0FQWxes",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "the harsh truth",
    url: "2vJNd6UHweA?si=1LQDZi_fcy70qKbw",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "to the last place",
    url: "whvt8xdzujQ?si=l7OF_foFom8GAeKd",
    opts: {
      role: ["area"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "hepatica (KOS-MOS)",
    url: "LYhGBGPpLjI?si=mvmnhEJ2hAMeHhHw",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "battleland",
    url: "UT5AXeBa4-g?si=G9M3-P28dfroTig7",
    opts: {
      role: ["battle"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "a memory of a tragedy",
    url: "oS6vbhEJLpI?si=Hhzggy-p3PJFFNt3",
    opts: {
      role: ["area"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "testament",
    url: "IO0KwAmLPak?si=1RPSlMbkS1ZPXb0k",
    opts: {
      role: ["battle"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "survive",
    url: "pD6psEdt030?si=PCEE36rJx1FEBRSN",
    opts: {
      role: ["battle"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "T-elos#2",
    url: "oUCvJgY09Ps?si=MHuBmiKY8d-EnAMc",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "she's coming back",
    url: "8kxMYjlDyTY?si=S823NeXFkw3cyo6t",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "when the grief lets you go",
    url: "vVXv3EVh5s4?si=RgMmHEK6-1gLC7hm",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "godsibb",
    url: "y21Nnc2FGUU?si=Z-svt6Uc7jcO8lS0",
    opts: {
      role: ["battle"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "Febronia#2",
    url: "0rpEQdsyfmk?si=IY2EMsXyJUy-GGce",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "crisis coming",
    url: "OT7ftGzzd4o?si=IOK2gUlEmMJmLLDS",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "a new world#2",
    url: "dV7xAvw7hfw?si=7r9GGBiMmVlKGTUO",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "outrageous",
    url: "IRInfiyP_pg?si=TPd9NX8MUlxl218F",
    opts: {
      role: ["battle"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "when the grief lets you go#2",
    url: "orXS3wvcR18?si=JeV7dbvFzff-E9v7",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "I love you, sincerely",
    url: "AID1LT_LgwA?si=ELwjgoXxQqUUEESN",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "hepatica#3~I believe in you",
    url: "Rc5l1bD0m7U?si=Z_2oEqNYeHNqvUKo",
    opts: {
      role: [],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  {
    name: "maybe tomorrow~ending medley",
    url: "lHPo3WJ23K0?si=2S-rcdL9Cp4mjX6V",
    opts: {
      role: ["vocal"],
      composers: ["kajiura"],
      games: ["XS3"],
    }
  },
  // Xenoblade Chronicles
  {
    name: "Main Theme",
    url: "YMT96_pvNQM?si=c2kQdAa9IUkO4py5",
    opts: {
      role: ["title"],
      composers: ["shimomura", "narita"],
      games: ["XC1", "XCDE"],
    }
  },
  {
    name: "Prologue A",
    url: "l5eOgVjyVfU?si=eCmGKIKxiYskENSI",
    opts: {
      role: [],
      composers: ["shimomura", "narita"],
      games: ["XC1", "XCDE"],
    }
  },
  {
    name: "Prologue B",
    url: "5SNr7el_TlU?si=EXNQFuVFurSpuIIh",
    opts: {
      role: [],
      composers: ["shimomura", "narita"],
      games: ["XC1", "XCDE"],
    }
  },
  {
    name: "Everyday Life",
    url: "zRybXfwdbsA?si=lYIzNM-A9ugALk4L",
    opts: {
      role: [],
      composers: ["kiyota"],
      games: ["XC1", "XCDE"],
    }
  },
  {
    name: "Colony 9",
    url: "s-PCyuYJpNo?si=1ylEGjIBHsw0wH5B",
    opts: {
      role: ["area", "day"],
      composers: ["shimomura", "narita"],
      games: ["XC1"],
    }
  },
  {
    name: "Colony 9/Night",
    url: "HqR1cu_qXW0?si=ISu_BYq2UkrIuM0N",
    opts: {
      role: ["area", "night"],
      composers: ["shimomura", "hiramatsu"],
      games: ["XC1"],
    }
  },
  {
    name: "Time to Fight!",
    url: "OzeSfV6AeVo?si=cmWXMPc2v3q46_Vd",
    opts: {
      role: ["battle"],
      composers: ["shimomura", "narita"],
      games: ["XC1"],
    }
  },
  {
    name: "Enemies Closing In",
    url: "zyZmP8GVEv0?si=icgwPJzDrRu2bRHa",
    opts: {
      role: ["battle"],
      composers: ["ace", "hiramatsu"],
      games: ["XC1"],
    }
  },
  {
    name: "Hometown",
    url: "5uRp5wut5k8?si=IPaUaJSqiB32B9hi",
    opts: {
      role: ["area", "day"],
      composers: ["shimomura", "narita"],
      games: ["XC1"],
    }
  },
  {
    name: "Hometown/Night",
    url: "GCy0yya19C8?si=pZHyglT1WzMMNDyu",
    opts: {
      role: ["area", "night"],
      composers: ["shimomura", "ace"],
      games: ["XC1"],
    }
  },
  {
    name: "A Friend on My Mind",
    url: "JAQpLibvSWQ?si=c4K-LV_Eg6u442kw",
    opts: {
      role: [],
      composers: ["kiyota"],
      games: ["XC1", "XCDE", "FC"],
    }
  },
  {
    name: "The Monado Awakens",
    url: "uce4nf3pAmI?si=-IDinkjj6pdCO6wt",
    opts: {
      role: [],
      composers: ["ace"],
      games: ["XC1", "XCDE", "FC"],
    }
  },
  {
    name: "Tephra Cave",
    url: "0kTKFLCBN4E?si=mTxzWvoBpNIC51dx",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      games: ["XC1"],
    }
  },
  {
    name: "Hostile Gazes",
    url: "rhYTpNXREug?si=zsUyl6IEsrnvkqNR",
    opts: {
      role: ["battle"],
      composers: ["ace", "hiramatsu"],
      games: ["XC1"],
    }
  },
  {
    name: "Crisis",
    url: "6lqFps4VdMM?si=EZqdB5Z7KsGhcMjC",
    opts: {
      role: [],
      composers: ["ace"],
      games: ["XC1", "XCDE", "FC"],
    }
  },
  {
    name: "An Obstacle in Our Path",
    url: "uLB-QtVBAVk?si=xSJLc7eT2dLUgvPT",
    opts: {
      role: ["battle"],
      composers: ["ace"],
      games: ["XC1"],
    }
  },
  {
    name: "Engage the Enemy",
    url: "SKW5tITC78E?si=I9mXW0gtn2V9iUUv",
    opts: {
      role: [],
      composers: ["ace", "hiramatsu"],
      games: ["XC1"],
    }
  },
  {
    name: "Rage, Darkness of the Heart",
    url: "6XB0IkeYlto?si=ekbRdM_kz9TfPRQa",
    opts: {
      role: [],
      composers: ["kiyota"],
      games: ["XC1", "XCDE", "FC"],
    }
  },
  {
    name: "Sorrow",
    url: "cLlNOtNGaXw?si=j3nkOGpBzZgsQn6s",
    opts: {
      role: [],
      composers: ["kiyota"],
      games: ["XC1", "XCDE", "FC"],
    }
  },
  {
    name: "Once We Part Ways",
    url: "-gmF6Ga_NzE?si=rGpDO1zBqH56EFNa",
    opts: {
      role: [],
      composers: ["ace"],
      games: ["XC1", "XCDE", "FC"],
    }
  },
  {
    name: "Apprehension",
    url: "k7h7NCS0Z0E?si=luORx8IxBbcC7mVV",
    opts: {
      role: [],
      composers: ["kiyota"],
      games: ["XC1", "XCDE"],
    }
  },
  {
    name: "Memories",
    url: "oolDrez7AEw?si=wzoUNI3LliPJU1ky",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1", "XCDE", "FC"],
    }
  },
  {
    name: "Urgency",
    url: "JoRDDbZu880?si=mBHOFUVlF-tH4OAU",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC1", "XCDE", "FC"],
    }
  },
  {
    name: "Visions of the Future",
    url: "wAlVh_-g5nI?si=d6QEyuHCUdcZe0TI",
    opts: {
      role: ["battle"],
      composers: ["ace", "hiramatsu"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Majesty",
    url: "imyya82heEM?si=eYJoIyfuz8SYwtZK",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC1", "XCDE", "FC"],
    }
  },
  {
    name: "Gaur Plain",
    url: "793tSRoCB1w?si=3gASAhMtochvdEg1",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Gaur Plain/Night",
    url: "qbt4CM80LVA?si=3YwlkR-1lgMaBPPa",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "In the Refugee Camp",
    url: "HIzEvsseX78?si=qs0AeiFjTTm4RPsl",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Face",
    url: "22VlDMkfUz0?si=C39ac978UQWIy7KQ",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1", "XCDE", "FC"],
    }
  },
  {
    name: "Colony 6 - Ether Mine",
    url: "_QH6iC6zFBg?si=E5TTbIRqPsSdOBF-",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Unfinished Business",
    url: "OQ-jUUYVY0c?si=35ImlzySkPFzRmqN",
    opts: {
      role: [],
      composers: ["shimomura", "narita"],
      soundtrack: ["XC1", "XCDE"],
    }
  },
  {
    name: "Colony 6 - Silence",
    url: "MhtBoilqQJw?si=xkTqJ1wQ8-5zRZto",
    opts: {
      role: ["area"],
      composers: ["kiyota", "ace"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Colony 6 - Rebuilding",
    url: "ZO-arqt-gO4?si=9tFEGqXVfa1C7Acj",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Colony 6 - Hope",
    url: "6EJH7Z4FnDQ?si=dBdn5xzoOlwStvm9",
    opts: {
      role: ["area"],
      composers: ["kiyota", "ace"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Colony 6 - Future",
    url: "s9U-Xy98EVo?si=a6H2cbOM-IN2-hOB",
    opts: {
      role: ["area"],
      composers: ["kiyota", "ace", "kameoka"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Satorl Marsh",
    url: "v0Z0SytoLZw?si=kCkTMpOwdvkP1S1J",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Satorl Marsh/Night",
    url: "Vb2lWQH03tI?si=sifzuK5c_GP80JyQ",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Bionis' Interior/Carcass",
    url: "0DxGRDxf60E?si=VosYMgSX4RMgIU3r",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Forest of the Nopon",
    url: "MG8VF8qOvx4?si=U3qkOw-XHC2v7TvL",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Forest of the Nopon/Night",
    url: "zxdm-DznYk0?si=iZ-r9XZDA-hLX90u",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Frontier Village",
    url: "um26rHVRcvk?si=RlajSPrd6lKX0oyA",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Frontier Village/Night",
    url: "zxdm-DznYk0?si=6xeGMREcLZD7_NqH",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Riki the Legendary Heropon",
    url: "b7ePcg7iDAc?si=tdKEymokS1kFHuTo",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC1", "XCDE", "FC"],
    }
  },
  {
    name: "Eryth Sea",
    url: "5s5dqyWtk8M?si=q4Y-J3XLvCHzNSlr",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Eryth Sea/Night",
    url: "bvf8SrSKlss?si=IyglVDTOLRJ77XkJ",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Alcamoth, Imperial Capital",
    url: "r7UZi2FEHiA?si=exk03AjZeB9xnI30",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Alcamoth, Imperial Capital/Night",
    url: "o3AufToroRM?si=jnu5yS1rX8_omH8S",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Intrigue",
    url: "XdwZyCTMjo8?si=p7ZFvS86biqZR6hz",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1", "XCDE", "FC"],
    }
  },
  {
    name: "Where the Ancestors Sleep",
    url: "wLhyckK-D0s?si=11VUMW_-dU7rnsVc",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Ancient Mysteries",
    url: "b94fdPkFFpE?si=92pp5Dm36ecglvnS",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1", "XCDE", "FC"],
    }
  },
  {
    name: "Egil's Theme",
    url: "hrR5DdDK6dk?si=tS25WAHKwYI-4Qn7",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1", "XCDE"],
    }
  },
  {
    name: "Prison Island",
    url: "97ftgVuOTG0?si=0p49PL6FC3EDItys",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "You Will Know Our Names",
    url: "RZ3ZC8eHpv8?si=kORADrxppvJTojsv",
    opts: {
      role: ["battle"],
      composers: ["ace", "hiramatsu"],
      soundtrack: ["XC1", "XC2"],
    }
  },
  {
    name: "Thoughts Enshrined",
    url: "AR_ARR3R-gE?si=i356a9AtijyIL_Xz",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC1", "XCDE", "FC"],
    }
  },
  {
    name: "Valak Mountain",
    url: "lHsLEBwK7Gg?si=N9vxOv8-Tq-VUgtv",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Valak Mountain/Night",
    url: "KeIxYVKdgw8?si=1zJu_BS-DYdLnp2C",
    opts: {
      role: ["area", "night"],
      composers: ["shimomura"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Sword Valley",
    url: "WEI4x4P2E-g?si=qqwYlt4s3sN2NqDs",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Sword Valley/Night",
    url: "gpucWGsqp2E?si=jFc8Hl7_2nOjjkX_",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Galahad Fortress",
    url: "CqaKfHLYTKY?si=ldarj7Np7oCjng3v",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Mechanical Rhythm",
    url: "3nqHQoqXuTc?si=cN45RneLKI94fmG8",
    opts: {
      role: ["battle"],
      composers: ["ace", "hiramatsu"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Irregular Bound",
    url: "urdBJ3qBgcY?si=nQt5QcdP5NAxllBN",
    opts: {
      role: ["battle"],
      composers: ["ace", "hiramatsu"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "A Tragic Decision",
    url: "uPEMyiraLu8?si=mizg28g9MNbX5fId",
    opts: {
      role: [],
      composers: ["ace", "kameoka"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "The Fallen Land",
    url: "MaNkZgdZlOM?si=2FzDNxnYzMHInn_Y",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "The Fallen Land/Night",
    url: "OiyYaz1zUpw?si=o39oNpHKquOKDdle",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Shulk and Fiora",
    url: "mNOMazm0hE0?si=a7dNUG6132VlD08i",
    opts: {
      role: [],
      composers: ["shimomura", "ace"],
      soundtrack: ["XC1", "XCDE", "FC", "XC3"],
    }
  },
  {
    name: "Reminiscence",
    url: "NixeYqDy4lM?si=CWVRNjNj4ewhVxYT",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1", "XCDE", "FC"],
    }
  },
  {
    name: "Riki's Kindness",
    url: "uStyDxWXN0s?si=0ArauWodXkMHzZ5l",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC1", "XCDE", "FC"],
    }
  },
  {
    name: "Hope",
    url: "yfhKGdrNQWg?si=vHwtgGwKdx9IBsfg",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1", "XCDE", "FC"],
    }
  },
  {
    name: "Hidden Machina Village",
    url: "d3nuTYYeOuk?si=XR8GwnO9D6Uq-Ui_",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Tension",
    url: "e4p9DICsajE?si=cZrxOyTXKUy2EElt",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1", "XCDE", "FC"],
    }
  },
  {
    name: "Regret",
    url: "ODSjVLli5UQ?si=MUd1J0Hkd3ciXQ_z",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1", "XCDE", "FC"],
    }
  },
  {
    name: "Mechonis Field",
    url: "rLaKBotgQVw?si=v9sVm7_YbgtViw5Q",
    opts: {
      role: ["area"],
      composers: ["ace", "hiramatsu"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Shadows Creeping",
    url: "QkoxKmHaVjU?si=yGE0nuxKEkedQ4vI",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1", "XCDE", "FC"],
    }
  },
  {
    name: "The Battle is Upon Us",
    url: "QkoxKmHaVjU?si=9bcXw_6Eva91fXjF",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC1", "XCDE"],
    }
  },
  {
    name: "Central Factory",
    url: "6MO_zkRneNM?si=fY7I-3YH15crdLsP",
    opts: {
      role: ["area"],
      composers: ["ace", "hiramatsu"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Agniritha, Mechonis Capital",
    url: "4Fc1dwK-UxU?si=WPZurXHFNMkxgp0T",
    opts: {
      role: ["area", "day"],
      composers: ["ace", "hiramatsu"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Agniritha, Mechonis Capital/Night",
    url: "l9ZGPBSKFJ4?si=LVX3wr4uD8AoUTYZ",
    opts: {
      role: ["area", "night"],
      composers: ["ace", "hiramatsu"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Disquiet",
    url: "kxV345bg4Vo?si=6taWumLFrLnSLQjK",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1", "XCDE"],
    }
  },
  {
    name: "Towering Shadow",
    url: "MrCS1ubkdAs?si=NPMtCXbpvkgSs-0s",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1", "XCDE", "FC"],
    }
  },
  {
    name: "Bionis' Awakening",
    url: "htwSNpaY_SE?si=fi_JPcM1Vx4c0Fef",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1", "XCDE"],
    }
  },
  {
    name: "A Spiritual Place",
    url: "mICc8CrGS3U?si=5oR5Vqu5ZtjWIJQa",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1", "XCDE"],
    }
  },
  {
    name: "Reminiscence (Music Box)",
    url: "XfqElnWGA6E?si=Af_ALfWV-qCEJhHG",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1", "XCDE"],
    }
  },
  {
    name: "Bionis Interior/Pulse",
    url: "0GL1jR8QaVw?si=FU9jSG8AiOAADvnA",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "The End Lies Ahead",
    url: "gx47Z8-Yr0Q?si=PxtvXrJM6LCVLaXe",
    opts: {
      role: [],
      composers: ["ace", "hiramatsu"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Memory's End",
    url: "qVuESMSHPLQ?si=gN3RnX6KiYcoebai",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Zanza's World",
    url: "lFsDhPCSnPU?si=bifSuNCXlLIWq4NB",
    opts: {
      role: [],
      composers: ["ace", "kameoka"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Zanza the Divine",
    url: "82_YJYYsa4U?si=L1DEFyvlvBg0II6p",
    opts: {
      role: ["battle", "boss"],
      composers: ["kiyota"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "The God-Slaying Sword",
    url: "5KoKbLRRlL8?si=qBcPgTnBnelmAgpQ",
    opts: {
      role: ["battle", "boss"],
      composers: ["ace"],
      soundtrack: ["XC1"],
    }
  },
  {
    name: "Futures That Lie Ahead",
    url: "kPh4m1LewPg?si=_FfWgJq6ixOPgZhi",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC1", "XCDE", "FC"],
    }
  },
  {
    name: "Beyond the Sky",
    url: "P70hcop3lJY?si=PoaYTEnkoEcRnE66",
    opts: {
      role: ["vocal"],
      composers: ["mitsuda"],
      soundtrack: ["XC1", "XCDE"],
    }
  },
  {
    name: "Epilogue",
    url: "c2fkfQONC2A?si=MKtPYdovE-lP0oWs",
    opts: {
      role: [],
      composers: ["shimomura", "narita"],
      soundtrack: ["XC1", "XCDE"],
    }
  },

  // Xenoblade Chronicles: Definitive Edition
  {
    name: "Colony 9 (Definitive Edition ver.)",
    url: "5Tb03K_Hiuc?si=ODsW0s-p5ahhwN-l",
    opts: {
      role: ["area", "day"],
      composers: ["shimomura", "narita"],
      games: ["XCDE", "FR"],
    }
  },
  {
    name: "Colony 9/Night (Definitive Edition ver.)",
    url: "iCJIT1hAL3Y?si=jP6VyQ963At8UKyG",
    opts: {
      role: ["area", "night"],
      composers: ["shimomura", "hiramatsu"],
      games: ["XCDE", "FR"],
    }
  },
  {
    name: "Time to Fight! (Definitive Edition ver.)",
    url: "jnp903OCp5M?si=ImSskvHIY0iPGnMe",
    opts: {
      role: ["battle"],
      composers: ["shimomura", "narita"],
      games: ["XCDE", "FR"],
    }
  },
  {
    name: "Enemies Closing In (Definitive Edition ver.)",
    url: "2y1Am90NO1w?si=4Kapi2fc8JIbq5j_",
    opts: {
      role: ["battle"],
      composers: ["ace", "hiramatsu"],
      games: ["XCDE", "FC"],
    }
  },
  {
    name: "Hometown (Definitive Edition ver.)",
    url: "fQQOaQw5gmI?si=WQCCluFLrI1x1b7q",
    opts: {
      role: ["area", "day"],
      composers: ["shimomura", "narita"],
      games: ["XCDE"],
    }
  },
  {
    name: "Hometown/Night (Definitive Edition ver.)",
    url: "chxvqrhJ9qM?si=FHZDlQrvY0PiyQzJ",
    opts: {
      role: ["area", "night"],
      composers: ["shimomura", "ace"],
      games: ["XCDE"],
    }
  },
  {
    name: "Tephra Cave (Definitive Edition ver.)",
    url: "wx0-S_NzAJk?si=J6kY7nxnIvr8XhzG",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      games: ["XCDE"],
    }
  },
  {
    name: "Hostile Gazes (Definitive Edition ver.)",
    url: "PiF2REi1xDY?si=_h6kwfvnZgzCa4rP",
    opts: {
      role: ["battle"],
      composers: ["ace", "hiramatsu"],
      games: ["XCDE"],
    }
  },
  {
    name: "An Obstacle in Our Path (Definitive Edition ver.)",
    url: "IpYw-RGVRcE?si=FobPt6Bm95hOgiyC",
    opts: {
      role: ["battle"],
      composers: ["ace"],
      games: ["XCDE"],
    }
  },
  {
    name: "Engage the Enemy (Definitive Edition ver.)",
    url: "H75ElylmagM?si=tnhP9Dsy4KNNpVqe",
    opts: {
      role: [],
      composers: ["ace", "hiramatsu"],
      games: ["XCDE", "FC"],
    }
  },
  {
    name: "Visions of the Future (Definitive Edition ver.)",
    url: "Mjuua9190R4?si=ETTv4VmQxJ8Y7XFP",
    opts: {
      role: ["battle"],
      composers: ["ace", "hiramatsu"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Gaur Plain (Definitive Edition ver.)",
    url: "NAHW_hPS5vE?si=Gkp7Bq3BXyzlMz3f",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Gaur Plain/Night (Definitive Edition ver.)",
    url: "t68uY_zef7I?si=os8RuNl7TohNBfbp",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "In the Refugee Camp (Definitive Edition ver.)",
    url: "Xx96QODHXkw?si=lvr6lGER5yKCA5oL",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Colony 6 - Ether Mine (Definitive Edition ver.)",
    url: "0mqnWMVOPvE?si=xZojghalLLkUnOTO",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Colony 6 - Silence (Definitive Edition ver.)",
    url: "X7DWo5PXq3c?si=Zjubj8wQlDvQa0sz",
    opts: {
      role: ["area"],
      composers: ["kiyota", "ace"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Colony 6 - Rebuilding (Definitive Edition ver.)",
    url: "y5Pcss6WW4Q?si=2NcyjoNMATpRcWWq",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Colony 6 - Hope (Definitive Edition ver.)",
    url: "vOfsy8Sk380?si=APano_LF1jnkiFma",
    opts: {
      role: ["area"],
      composers: ["kiyota", "ace"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Colony 6 - Future (Definitive Edition ver.)",
    url: "kwU4fgh0nBc?si=RFmTWj1cbC-_tXNq",
    opts: {
      role: ["area"],
      composers: ["kiyota", "ace", "kameoka"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Satorl Marsh (Definitive Edition ver.)",
    url: "PDrKeBq9iR4?si=xB-CV1duzV6U1Cjd",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Satorl Marsh/Night (Definitive Edition ver.)",
    url: "YLB_Lh7tNwY?si=T1mJggnHmU2L84df",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Bionis' Interior/Carcass (Definitive Edition ver.)",
    url: "JTKCN-TYKf0?si=GbbayAJ55Z2q0uAp",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Forest of the Nopon (Definitive Edition ver.)",
    url: "QQpQ2lBLBSs?si=h9q_2qoim00MHQRK",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Forest of the Nopon/Night (Definitive Edition ver.)",
    url: "0U42pjVjYkI?si=YpvTwDUWH76miCpM",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Frontier Village (Definitive Edition ver.)",
    url: "Vb9t5FRF85s?si=m9pr1Cgfi4sxRkOn",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Frontier Village/Night (Definitive Edition ver.)",
    url: "IRwBW5JVXCM?si=g8lupWB8gfgSPXXw",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Eryth Sea (Definitive Edition ver.)",
    url: "HLaqqzZFaOk?si=Aw5ezwnolcQK9dhw",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Eryth Sea/Night (Definitive Edition ver.)",
    url: "Y4M6wHPP0pQ?si=zE1rfdLoMrJJkcLG",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Alcamoth, Imperial Capital (Definitive Edition ver.)",
    url: "NWaxuRhoWyI?si=ItPmaWg9oTrBAyEm",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Alcamoth, Imperial Capital/Night (Definitive Edition ver.)",
    url: "pd3LmW0wavo?si=b3szhz8sMsuyfQAH",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Where the Ancestors Sleep (Definitive Edition ver.)",
    url: "jqtjhTVzUR0?si=4Upro9ruq9tcs_ZF",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Prison Island (Definitive Edition ver.)",
    url: "sk1eRnMKBZY?si=-z31Xnf7cT0HZ9DP",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "You Will Know Our Names (Definitive Edition ver.)",
    url: "ba4hxsuQgdo?si=mt-TvgHbdI6-Kci5",
    opts: {
      role: ["battle"],
      composers: ["ace", "hiramatsu"],
      soundtrack: ["XCDE", "FC"],
    }
  },
  {
    name: "Valak Mountain (Definitive Edition ver.)",
    url: "VePcgXTMUP0?si=DTSk4b0AKNRt-7n2",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Valak Mountain/Night (Definitive Edition ver.)",
    url: "RroGfG1J_Hg?si=HxQPhuTZ-OulYgJU",
    opts: {
      role: ["area", "night"],
      composers: ["shimomura"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Sword Valley (Definitive Edition ver.)",
    url: "ASvvOoZUBPI?si=j3PUyitzT9usoQGu",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Sword Valley/Night (Definitive Edition ver.)",
    url: "_OgvP1itlU0?si=bDnoZ0iG-USxNojO",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Galahad Fortress (Definitive Edition ver.)",
    url: "N3rKz-TW6l8?si=dDVzGkXrtUie8V7x",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Mechanical Rhythm (Definitive Edition ver.)",
    url: "A_i9_TDeoPE?si=7UitjSoaMqcUy5Le",
    opts: {
      role: ["battle"],
      composers: ["ace", "hiramatsu"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Irregular Bound (Definitive Edition ver.)",
    url: "euiC67mToaA?si=MeB7W8X6ibJclEVS",
    opts: {
      role: ["battle"],
      composers: ["ace", "hiramatsu"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "A Tragic Decision (Definitive Edition ver.)",
    url: "RTwh6NeHRsY?si=y-SNogXXeiv4xZTC",
    opts: {
      role: [],
      composers: ["ace", "kameoka"],
      soundtrack: ["XCDE", "FC"],
    }
  },
  {
    name: "The Fallen Land (Definitive Edition ver.)",
    url: "9AKLrerzzn0?si=t6B8qRRfctSCpf9m",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "The Fallen Land/Night (Definitive Edition ver.)",
    url: "4QPVPO8J-Vc?si=wI3P3psx7Sxlh6_F",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Hidden Machina Village (Definitive Edition ver.)",
    url: "q8GlUStp5R8?si=D8nZfKRxBESuFe2_",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Mechonis Field (Definitive Edition ver.)",
    url: "TJ2AVbOqfh4?si=u2k8PSH7XkpL9Y_-",
    opts: {
      role: ["area"],
      composers: ["ace", "hiramatsu"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Central Factory (Definitive Edition ver.)",
    url: "nWBP57puwlk?si=_O9YcgiG3j49W_Ej",
    opts: {
      role: ["area"],
      composers: ["ace", "hiramatsu"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Agniritha, Mechonis Capital (Definitive Edition ver.)",
    url: "MI5NnSwHtTI?si=-_60I-g4k3wrOhhv",
    opts: {
      role: ["area", "day"],
      composers: ["ace", "hiramatsu"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Agniritha, Mechonis Capital/Night (Definitive Edition ver.)",
    url: "69b83F5TOXE?si=7TY-lXDouszsU-o4",
    opts: {
      role: ["area", "night"],
      composers: ["ace", "hiramatsu"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Bionis Interior/Pulse (Definitive Edition ver.)",
    url: "y_0KyJhqBl4?si=zxJhsgEvuBzar9PC",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "The End Lies Ahead (Definitive Edition ver.)",
    url: "vLTay2Jsa1U?si=bv8-FwO8GB099iMi",
    opts: {
      role: [],
      composers: ["ace", "hiramatsu"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Memory's End (Definitive Edition ver.)",
    url: "E7eHhT1Q6w8?si=OfaOBLnqiEqz-wTc",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Zanza's World (Definitive Edition ver.)",
    url: "rE9pPnsB2EU?si=eb4d8BKw206PIuB1",
    opts: {
      role: [],
      composers: ["ace", "kameoka"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "Zanza the Divine (Definitive Edition ver.)",
    url: "MVHXjfk7H1k?si=dqrhqFE6DZvgpvpY",
    opts: {
      role: ["battle", "boss"],
      composers: ["kiyota"],
      soundtrack: ["XCDE"],
    }
  },
  {
    name: "The God-Slaying Sword (Definitive Edition ver.)",
    url: "7aVDOVTS7VA?si=cGV874c5jFpmtGtv",
    opts: {
      role: ["battle", "boss"],
      composers: ["ace"],
      soundtrack: ["XCDE"],
    }
  },
  // Future Connected
  {
    name: "Bionis' Shoulder",
    url: "uMrQ7yusrlA?si=Pg83_xoVOTdMxJtn",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["FC"],
    }
  },
  {
    name: "Bionis' Shoulder/Night",
    url: "hHOQQdHUuNY?si=nxRbdb8P_clVGXtu",
    opts: {
      role: ["area", "night"],
      composers: ["ace"],
      soundtrack: ["FC"],
    }
  },
  {
    name: "Time to Fight! (Bionis' Shoulder)",
    url: "IOdrvmyoCg4?si=s7w9q12VunIuzuDF",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["FC"],
    }
  },
  {
    name: "Fogbeasts",
    url: "GDfacPVGaho?si=YuCvPG4ZnmDtzt6g",
    opts: {
      role: ["battle"],
      composers: ["ace", "yoshimura"],
      soundtrack: ["FC", "FR"],
    }
  },
  {
    name: "Gran Dell",
    url: "BcVaUhQIokE?si=chqEhzRex9UZ6Jxh",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["FC"],
    }
  },
  {
    name: "Gran Dell/Night",
    url: "SrsQAsWnRQs?si=dWcsT_A16Ckl_sZC",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["FC"],
    }
  },
  {
    name: "Roar from Beyond",
    url: "_DzTKZutjKU?si=0L7x8SfbaFBQDK81",
    opts: {
      role: ["battle", "boss"],
      composers: ["ace", "kameoka"],
      soundtrack: ["FC"],
    }
  },
  {
    name: "Beyond the Sky (Acoustic Arrange)",
    url: "UaJ-YE_WuNY?si=0lSEIof1UM8dsawq",
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
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "no2=THEMEX",
    url: "iAIGTNJZSHU?si=z5yPVBvJiJKChGxI",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "no3=NO.EX01",
    url: "jeEgdxbXd4M?si=_T1QHYmY1O8qGlTn",
    opts: {
      role: ["vocal", "battle"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "no4=D91M",
    url: "xDDNXZGTJyo?si=fzcxf_td0acrb5Gf",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "no5=KAKU-WEST*→▲★★KAI",
    url: "uwHRljXQ0ps?si=_iNdcY4lzHEh8yZN",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "no6=LP",
    url: "2WtuO87UPDA?si=NKKVR3XyIQSp0yWi",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "no7=G-LOW-S→F.S.K.O",
    url: "FJ2xnl8K7Rs?si=O6OYtXCgGVh7R_ff",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "no8=UN↑口and巨DIE",
    url: "ZsrSt5H2KDw?si=Xmhlr80AchrSS-II",
    opts: {
      role: ["battle"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "no9=MONOX",
    url: "3lTvxJnmAR0?si=iS5G8Ffmsx7jAPqf",
    opts: {
      role: ["title"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "no10=CR17S19S8",
    url: "uuYbQKZ5G3U?si=u14uQl_MBV4TL48e",
    opts: {
      role: ["battle"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "no11=RE:ARR.X",
    url: "lAxh7Hf7Jhg?si=Ypi3_hEPg12GGQom",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "Your Voice",
    url: "8rDgj36WlIw?si=ZTmuq_d0SNy3BiY9",
    opts: {
      role: ["vocal"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "Wir fliegen",
    url: "HIQv4_bHcQ8?si=JHXHNUyO8sFURwyi",
    opts: {
      role: ["vocal", "battle"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "So nah, so fern",
    url: "Q-tJBoPUn3U?si=5o2-c00yqkeikTvC",
    opts: {
      role: ["vocal"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "NEMOUSU秘OUS",
    url: "qJB4dY-CbLI?si=41i7nSAQRlI3yzU-",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "Black tar",
    url: "UM0qbHq8Tvg?si=PB07K0CS3Vp8-CfG",
    opts: {
      role: ["vocal", "battle"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "z5m20i12r04a28",
    url: "_nMz9o-Ja5o?si=NkE2sfLwNmZyt14_",
    opts: {
      role: ["vocal"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "z10b2r0i1e2f0i9n1g3",
    url: "WZgw90_jFCg?si=SEiTnhiIKD2VVYf4",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "Uncontrollable",
    url: "ZR7RbsGmG_Q?si=6HotDnU4br32oyWI",
    opts: {
      role: ["vocal", "battle"],
      composers: ["sawano"],
      soundtrack: ["XCX", "XC2"],
    }
  },
  {
    name: "z15f20i12e09l14d",
    url: "p3Rm6kzpaDA?si=lqVNZQDsprxbEXGZ",
    opts: {
      role: ["area"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "z39b20co13mi01cal09",
    url: "h_bNzR9rACo?si=5PFNY0U90-1P23Td",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "By my side",
    url: "HiV9w-I8Aqc?si=C7Tam0fwzYRTXTH_",
    opts: {
      role: ["vocal"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "z?2f0i1e2l0d914",
    url: "ZJmAQtOzD9I?si=tzhApVc9ZMmgOEey",
    opts: {
      role: ["area"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "z37b20a13t01t08le",
    url: "o-GIBDa3HUQ?si=C4YLOxoz9jiPrF5T",
    opts: {
      role: ["battle"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "z30huri2ba0tt12le1110",
    url: "jn9itRwhZ74?si=e8r5z4Q12ZcWhnjs",
    opts: {
      role: ["battle"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "z12e201v2e091n4t",
    url: "xpZhF-EBkss?si=mlNC9OhCmgAmm-vs",
    opts: {
      role: ["area"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "z29ba2t0t1l301e17",
    url: "sVyoXU9eJ60?si=tuV-RFaPGCIlpqPE",
    opts: {
      role: ["vocal", "battle"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "z16b2gu012ro09u1su4",
    url: "TCX3P2Y2Nvs?si=wJUKQV6klRQhBnWR",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "z13e20v12e09n14t",
    url: "KwPX2st6fxM?si=8g5ey-1yQVsiymlJ",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "z7b2012lp0427arr",
    url: "tmlUIW91FHE?si=-AGNbCGpHncctNg_",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "In the forest",
    url: "YznjLP0uKk0?si=SCzTcNsRrbfBjYCL",
    opts: {
      role: ["vocal"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "z23s20a12m0a9-1r4u",
    url: "OAxb9z-1T5o?si=ieSFF1Kc38TaDMbc",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "The way",
    url: "RCP2rq0lzFw?si=dxjclmD8y_GLcJbv",
    opts: {
      role: ["vocal"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "The key we've lost",
    url: "luGLXIxGIXs?si=nZJJtPVMTJOew7nM",
    opts: {
      role: ["vocal", "battle", "boss"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "N周L辺A",
    url: "sIUGYQL4nLE?si=HQvXoMWBG1oGIvWQ",
    opts: {
      role: ["area", "day", "night"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "N木ig木ht木L",
    url: "Re9-5p8ApBA?si=iRspD8wSFAcA1Csu",
    opts: {
      role: ["vocal", "area", "day", "night"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "N市L街A",
    url: "z3UrFyeUQJM?si=BC5fQzi78rS4CdT-",
    opts: {
      role: ["area", "day", "night"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "亡KEI却KOKU心",
    url: "lrkY-fLkx1o?si=8PJ1-tUeZbBQmKDh",
    opts: {
      role: ["area", "day", "night"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "Melancholia",
    url: "Sx_KOScY4n8?si=vicHMH4lS6YCv9-q",
    opts: {
      role: ["vocal"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "fiKAIeldJOU",
    url: "TSoS_Lxg8lI?si=KZ7MGBHu8SFynVPk",
    opts: {
      role: ["area", "day", "night"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "aBOreSSs",
    url: "0d3kwLdQp3g?si=JnnMUUVeaAi6iewe",
    opts: {
      role: ["battle"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "MNN+@0・",
    url: "6cU1WBd8lDw?si=ceBRHwzI24G2_Oy_",
    opts: {
      role: ["area", "day", "night"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "In the forest <X→Z ver.>",
    url: "QyClmZV58ww?si=IhAi2WtEgSpIwE28",
    opts: {
      role: ["vocal", "battle"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "46-:ri9",
    url: "KMGM2OR2stc?si=w9SgU-rxHda3G-mc",
    opts: {
      role: ["area", "day", "night"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "96-:rip",
    url: "tFvYq0NzFoE?si=uJuvmlu7WbPepoyg",
    opts: {
      role: ["area", "day", "night"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "raTEoREkiSImeAra",
    url: "1Yb0-us8yUg?si=7cuc2VOP1_B_Az60",
    opts: {
      role: ["battle"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "Don't worry",
    url: "FFwLjkDkplg?si=84QxFLtCN-sfPHQw",
    opts: {
      role: ["vocal", "area"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "PianoX1",
    url: "BXj9WTl4SZQ?si=DqqZr4BUATBx6TSH",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "PianoX2",
    url: "NvK4jy44viY?si=lMMEPLTQE2LiP2Zf",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "PianoX3",
    url: "CPVOOX7G-RA?si=vllQKEyCvsA1mODl",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "X-BT1",
    url: "L8ee8rvKi4o?si=tjgG5ZYlbPFQ4NQ_",
    opts: {
      role: ["area"],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "X-BT2",
    url: "ojtgOt4FuuU?si=VPUGgUcygDCVOHHR",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "X-BT3",
    url: "WzNbgIb7kC0?si=hB5wlLzf2_fcJLYL",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "X-BT4",
    url: "KmsmTElnDLk?si=bJ4e2DZJr6IJCtuR",
    opts: {
      role: [],
      composers: ["sawano"],
      soundtrack: ["XCX"],
    }
  },
  {
    name: "In the forest (no vocal effects ver.)",
    url: "3rg0OqVD4BM?si=NPnwzyywTQdY5vj_",
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
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Elysium, in the Blue Sky",
    url: "udQFFfnR0DA?si=fpS-G8i8Lws0rwU9",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Argentum",
    url: "2Es--2Hu8tQ?si=Fupiybz2wy97qTKJ",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Argentum/Night",
    url: "JETzyfR_jM0?si=-3ARwHGhko0_oYfy",
    opts: {
      role: ["area", "night"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Bana's Theme",
    url: "agEnMNVhdpk?si=KG6TIfiMLLbv2zFg",
    opts: {
      role: [],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "A Ship in a Stormy Sea",
    url: "MsqLYo1xUbs?si=B_mgbQBcv-p4SdwQ",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "The Ancient Vessel",
    url: "mWmm4VkFo6Q?si=0BFzTCtlwHjz18w8",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Exploration",
    url: "ZXpHyTO8osU?si=nJ1HdQqNDTHK6AL_",
    opts: {
      role: ["battle"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "A Portent Crawling Over",
    url: "2oPCdppE7Eo?si=ULskrqAaahZQeLmU",
    opts: {
      role: [],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Elysium in the Dream",
    url: "aOxN57PxOAk?si=sXnnywsXKeqLhMvv",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC2", "TGC", "XC3"],
    }
  },
  {
    name: "The Awakening",
    url: "tT_onm1G07w?si=ouhjQEekUgMNEyuw",
    opts: {
      role: [],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Crossing Swords",
    url: "gDRsu1FbfIo?si=2keBvQGvgOJsF-pj",
    opts: {
      role: [],
      composers: ["hiramatsu"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Incoming!",
    url: "np5UlZ-Ho-4?si=YDoWYuC9Qcbb9ddp",
    opts: {
      role: ["battle"],
      composers: ["ace"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Gormotti Forest",
    url: "kLcfWb7dK9I?si=tv_fFXURmgMFRD88",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Gormott",
    url: "VgmmL-7byp4?si=R0nLZWTxUSMVcdEm",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Gormott/Night",
    url: "Wgtw8T5me9E?si=xXRMPja4BF-tlxc3",
    opts: {
      role: ["area", "night"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Battle!!",
    url: "pxhIj0tSLmc?si=eaBM1RYxiC-GZ0qQ",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["XC2", "XC3"],
    }
  },
  {
    name: "Torigoth",
    url: "7qI7MKfhuHs?si=pB9otfQU9ryn073g",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Torigoth/Night",
    url: "yoxynA65SbM?si=0X3JbGp6CuKKVnLy",
    opts: {
      role: ["area", "night"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Wanted Nia",
    url: "6p4VV3Zot6s?si=xeCptfIFlfFwBk-5",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Omens of Life",
    url: "A_--1QTl6jU?si=vbFXO89-fIWFT3TK",
    opts: {
      role: [],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Awakened DNA",
    url: "yyWIvshLOJU?si=Splr44bfu-TmjXOU",
    opts: {
      role: [],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "A Nopon's Life",
    url: "kdYbUyEA8cs?si=9POj-MzPsXsEp1rM",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Tiger! Tiger!",
    url: "3gLhy5GcGr8?si=iDwo5w3grbXULVmq",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "A Brewing Storm",
    url: "Wu07OA2CvDQ?si=Y1Yx9645SS80RlM4",
    opts: {
      role: [],
      composers: ["hiramatsu"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Titan Battleship",
    url: "sReJjMdNE2U?si=I-vv5vIw2Y6ueIht",
    opts: {
      role: ["area"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Monster Surprised You",
    url: "S299wvRJ1bo?si=k1uJJOGt5ThKlKlm",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Irritation",
    url: "xu0pxOZvulA?si=CetLt6B3qwq-ojOO",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Where We Used To Be",
    url: "7oXmpIZBLzg?si=PSvnUSdKx5l_ULUF",
    opts: {
      role: ["title"],
      composers: ["mitsuda"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Friendship",
    url: "6p0BoQ93adc?si=ONo3k1nkzYxlYohI",
    opts: {
      role: [],
      composers: ["hiramatsu"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "The Towering Yggdrasil",
    url: "nkN-noFIAA8?si=VzrGADgO1ap8H6jz",
    opts: {
      role: [],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Ophion",
    url: "GLgWYMXc0Uo?si=spJ6coPpkxYFN2zo",
    opts: {
      role: ["area", "battle"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Womb Center",
    url: "Z5LoeIxsnDE?si=tot2DpGt0kPK7pIN",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Garfont Mercenaries",
    url: "VzPOSigrIfE?si=vGbNgeYQ75h15ahy",
    opts: {
      role: ["area", "day"],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Garfont Mercenaries/Night",
    url: "645qEme_tb8?si=1IVzrQvXxvf1mKLX",
    opts: {
      role: ["area", "night"],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Death Match With Torna",
    url: "Ea11VXc-v-k?si=7Ni01ttY0B3-7ffE",
    opts: {
      role: ["battle"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Kingdom of Uraya",
    url: "weBdLPLaON0?si=XmSora59OA6SZkbM",
    opts: {
      role: ["area", "day"],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Kingdom of Uraya/Night",
    url: "xzcG4ADSY-Y?si=rR7legs8NxQQpy2a",
    opts: {
      role: ["area", "day", "night"],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Those Who Stand Against Our Path",
    url: "gg-epvFiUus?si=Jnh53ulq6mz0gq2O",
    opts: {
      role: ["battle"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Fonsa Myma",
    url: "N0bfcDlRpJA?si=XpTi65WUp75XdKW-",
    opts: {
      role: ["area", "day"],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Fonsa Myma/Night",
    url: "RSQ03Q5xLh4?si=4CZCKPeGLo-WV9E_",
    opts: {
      role: ["area", "day", "night"],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "The Heroic Adventures",
    url: "u6YHH7gH2IM?si=ViAM_WjQ-ak4jgjd",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "The Beginning of Darkness",
    url: "gY4rOS9_IcI?si=29TnJPzGkBtEh4aG",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Drifting Soul",
    url: "mzp8HAJTtBg?si=Jde4IihG2oGoFH_B",
    opts: {
      role: ["vocal"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Counterattack",
    url: "2dga4-7PPAA?si=namXMxAFcc1QE32_",
    opts: {
      role: [],
      composers: ["hiramatsu"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "You Will Recall Our Names",
    url: "Pog_L1yYScA?si=o4BI42iFmelb8V_V",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Desolation",
    url: "ZypKFvTF1tc?si=ug3CP9a7uXvgs2nN",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Contrition",
    url: "wnVGUJvPVyw?si=7OnRKqoHgydRkcXc",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "War and Peace",
    url: "YG3ZiQ9JiaI?si=Dcnt83JXwFb9Hlp1",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Driver Vs",
    url: "FrJi-iM7I1Y?si=jTAemC3AYOH1KtJb",
    opts: {
      role: ["battle"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Alba Cavanich",
    url: "LFL3c3r6Mfw?si=8Ks5YDNGzc_jVHzK",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Alba Cavanich/Night",
    url: "LFL3c3r6Mfw?si=Y2QQAoMGDKb8AjSh",
    opts: {
      role: ["area", "night"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Running",
    url: "1tyn8eXpF14?si=0qi_aornYWB2YwTB",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Mor Ardian ~Roaming the Wastes~",
    url: "z0v9FX-hLR0?si=lg9oPAOHbLXZegFe",
    opts: {
      role: ["area", "day"],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Mor Ardian/Night",
    url: "OkGuDBtRHd0?si=6dRk81n_8I2GNL59",
    opts: {
      role: ["area", "night"],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Eye of Shining Justice",
    url: "6FlfQ2TyPgw?si=z4Fbx_lV5TKmyppz",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Bringer of Chaos! Ultimate",
    url: "rVAG4CxZ3Ak?si=idJq6ir8SeVaYkOJ",
    opts: {
      role: ["battle"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Song of Giga Rosa",
    url: "ekUPO9druu8?si=OaZYLLyOx2CzVEQ-",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Jump Towards the Morning Sun",
    url: "hAdYz64B_v4?si=oSEP4m4vILqcMICc",
    opts: {
      role: [],
      composers: ["hiramatsu"],
      soundtrack: ["XC2", "TGC", "XC3"],
    }
  },
  {
    name: "Leftherian Archipelago",
    url: "22VRuM1f6AA?si=uGl4c6F0m0pSAcSy",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Leftherian Archipelago/Night",
    url: "TSvrjjdIgDw?si=XMXjmKuI8vSyi4j9",
    opts: {
      role: ["area", "night"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Gramps",
    url: "N3JnslZ_jiQ?si=3EgIoNEEHMJWWhmk",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Gramps/Night",
    url: "fT4DPC_MNJY?si=NXze9iqSRPPgbw2X",
    opts: {
      role: ["area", "night"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "A Place in the Sun",
    url: "ocHZ7HS5P-o?si=kKhFsTOHr3sO5mmv",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Our Eternal Land",
    url: "9eGAZQ-fbG4?si=5bf3B1duFN9bcEMn",
    opts: {
      role: ["vocal", "area", "day"],
      composers: ["mitsuda"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "We Are the Chosen Ones",
    url: "3A3UBif9jPQ?si=vQMv78XTVizu1oFX",
    opts: {
      role: ["vocal", "area", "night"],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Misgivings",
    url: "WvHJybC1gSU?si=YqrXfuMBzgidOmvb",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "The Impending Crisis",
    url: "XCFC2zH4kQs?si=maqE6hOv3k8XoWFa",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Temperantia",
    url: "F58GmozGbiQ?si=POWFy_n4AIDLUNGv",
    opts: {
      role: ["area"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Over the Sinful Entreaty",
    url: "uo-qUFzMRBo?si=xLDVGDwPFPvpabRa",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Tantal",
    url: "5G8Z4p7PIck?si=00Me3gJIBjxuPCgn",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Tantal/Night",
    url: "NAQY8-1TTog?si=sXp4TxfivUrW-98o",
    opts: {
      role: ["area", "night"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Ever Come to an End",
    url: "fO11VzYoqKQ?si=ziYyzfyKmP6afxrU",
    opts: {
      role: ["vocal", "area", "day"],
      composers: ["mitsuda"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Shadow of the Lowlands",
    url: "vLTN2_7jvUw?si=MaTk9kejFZ2VbWZ7",
    opts: {
      role: ["vocal", "area", "night"],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "The Past Revealed",
    url: "dp3s22JEsKc?si=RJKv9JQmBUPAXole",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "The Decision",
    url: "qYNkI0mTnJU?si=d0iVVZuZ6csr8nuB",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Loneliness",
    url: "lmkQF9Hm2Es?si=LMc40EMwcoGCPiVA",
    opts: {
      role: [],
      composers: ["hiramatsu"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Spirit Crucible Elpys",
    url: "gbzvkrX1swk?si=oLtOe0xldbgqnTzq",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Tensed Mind",
    url: "fcHJFZKj_5I?si=XZCsnyd2n-gd97e0",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Drifting Soul (Violin Version)",
    url: "2EBJL2j4htU?si=oB43C3vMXV036HpI",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "A Faint Hope",
    url: "KYfwwo14Ss4?si=EfW9i_BO5nPISfgS",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Cliffs of Morytha",
    url: "0efFquhsHLY?si=X5u52wRwubhYFeal",
    opts: {
      role: ["area"],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Still, Move Forward!",
    url: "Zn_MXqH8MaQ?si=nAdlf8L8UMK6_ZZZ",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Land of Morytha",
    url: "PNOJDX5U-Bw?si=LTX6Dmo7LZ2Lqi4b",
    opts: {
      role: ["area"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Yggdrasil",
    url: "-uqTTs1xSZk?si=5IUau8-jugUcbUsz",
    opts: {
      role: ["area"],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Past From Far Distance",
    url: "fuvJFpRs8Ew?si=f9qLF5kkRDZoGide",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "With People and Darkness",
    url: "lmKdOrwLOl8?si=kp6HrnQCSNrtDVBV",
    opts: {
      role: [],
      composers: ["mitsuda", "ace"],
      soundtrack: ["XC2", "TGC", "XC3"],
    }
  },
  {
    name: "The Power of Jin",
    url: "oUZ8CO4CTU0?si=FlhLN8QVIdE3kXhh",
    opts: {
      role: ["battle"],
      composers: ["mitsuda"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Praetor Amalthus ~The Acting God~",
    url: "8Kkj6CACosk?si=dWO21pGGrV1cp55j",
    opts: {
      role: ["battle"],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Walking With You",
    url: "dtqyQAtSUC8?si=btRBX8fbtHHU_CZ3",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Orbital Ring",
    url: "UOpIL0RXNCQ?si=pMbH_XSvC-XBxWyV",
    opts: {
      role: ["area"],
      composers: ["mitsuda", "kiyota"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "The Abandoned City",
    url: "jLqi2Zf3RYE?si=h6rWCpF1G1MPq0G0",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Heart in the Fog",
    url: "9rKAK1w3JnA?si=CSoUc8utqJdZWpIz",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Flashback",
    url: "Cdd7xclAonk?si=5WCVUfqlSp3wUwX2",
    opts: {
      role: ["battle"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Sea of Clouds",
    url: "q3NqH5lz9_U?si=d8JdcDSOc_L6J1Ju",
    opts: {
      role: [],
      composers: ["ace"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Disappearing World",
    url: "3fjOaz2f6_s?si=jKcs2iCf-gG8nCsu",
    opts: {
      role: ["area"],
      composers: ["ace"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Battle in the Skies Above",
    url: "DdkCzUVohOQ?si=Pft8qmpruClCOHF9",
    opts: {
      role: ["battle"],
      composers: ["ace"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "After Despair and Hope",
    url: "5fSlT3YAkPE?si=BCKbLOVWVGi_1pT4",
    opts: {
      role: ["battle", "boss"],
      composers: ["hiramatsu"],
      soundtrack: ["XC2", "TGC"],
    }
  },
  {
    name: "Our Hope",
    url: "VntL9CUw1Sc?si=voW1Fxa9aVWfm69y",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Parting",
    url: "L397QrnkLVI?si=hiMRVbCCptBEbD_x",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "The Tomorrow With You",
    url: "jy8VmnE5MJs?si=a4g63p_IGJHLS4fn",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Escape - Going Through Clouds -",
    url: "AWFdhFU2u3s?si=tl7w_4Pk_DDq1TAE",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "Elysium",
    url: "PUMGOWtnS3A?si=0taWTTEoDxNp_IFK",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "White All Around Us",
    url: "RsIyZFL-LdI?si=aHosGNTuo3mzQ85x",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC2"],
    }
  },
  {
    name: "One Last You",
    url: "xvVkrhujEJg?si=NlH-PDIpYC0PYRc6",
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
    opts: {
      role: ["title"],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["TGC"],
    }
  },
  {
    name: "Lasaria Woodland",
    url: "DNRqjasioAU?si=FytCBdityM6ijO44",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["TGC"],
    }
  },
  {
    name: "Battle!!/Torna",
    url: "_ggwbZMNyWQ?si=P8kL98IkBnWfHcTo",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["TGC"],
    }
  },
  {
    name: "Four-limbed Titan/Gormott",
    url: "ufk0ypyRtLE?si=7D-LwV0DmsNZEROh",
    opts: {
      role: ["area"],
      composers: ["ace"],
      soundtrack: ["TGC"],
    }
  },
  {
    name: "Kingdom of Torna",
    url: "zt-ahfxZSZk?si=WRHIHA-Lgab1b0oz",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["TGC"],
    }
  },
  {
    name: "Kingdom of Torna/Night",
    url: "cllH7kfP3ZY?si=9e-zWCWnKu8Qe21X",
    opts: {
      role: ["area", "night"],
      composers: ["ace"],
      soundtrack: ["TGC"],
    }
  },
  {
    name: "Auresco, Royal Capital",
    url: "dbFfVLOVvDo?si=QZlyvv1vYhRTM_dn",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["TGC"],
    }
  },
  {
    name: "Auresco, Royal Capital/Night",
    url: "Ni0qTLkqoZs?si=-wtfhyyVIduOel54",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["TGC"],
    }
  },
  {
    name: "Over Despair and Animus",
    url: "hZwC_nJ0ixU?si=ThUL3OLeuqYWp1-s",
    opts: {
      role: ["battle", "boss"],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["TGC"],
    }
  },
  {
    name: "Our Paths May Never Cross",
    url: "kwPl9sgNNWs?si=hs9yAiJhvJr-yO_H",
    opts: {
      role: ["battle", "boss"],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["TGC"],
    }
  },
  {
    name: "A Moment of Eternity",
    url: "-NYodEt_1uU?si=uwEZcmEOiEawuO_b",
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
    opts: {
      role: ["title"],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Battlefield - The Scramble for Life",
    url: "bX84NA0kbJA?si=0kV770RzHqteeqWD",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Tactical Action (Dynamic)",
    url: "hQ6BbaocXEM?si=0qYZbzng9n5AyY7D",
    opts: {
      role: ["area"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Tactical Action",
    url: "WIAz4FDpX1M?si=cT7WgPJdOMrnSsqn",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "The Exhausted Victorius, The Speechless Defeated",
    url: "bXXbYg1QiWY?si=aTZ31_93y8EHLpym",
    opts: {
      role: [],
      composers: ["kunigo", "fujii"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Young Warriors",
    url: "hQracuNWSyc?si=T_TYKOru3hmS8bSN",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Lost Days of Warmth",
    url: "TbehqVmhrUM?si=pUuFbJMC93NxdwV5",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Shining Aspiration - Inherited Melody",
    url: "kX-WiqHYS-Y?si=FuCZM8X2Zn7FfhwG",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Yzana Plains",
    url: "JxeiVsNCKNQ?si=FRDPDUZnmhHE3nYD",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Yzana Plains/Night",
    url: "Xoi-_u59OaE?si=6itIc4uw3YKgaHNo",
    opts: {
      role: ["area", "night"],
      composers: ["ace"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Keves Battle",
    url: "_sQnu-YKjL4?si=vwFSFTUbygBTAU9v",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Soldiers' Paean",
    url: "QDezA9hvrF8?si=Yav7hmzQ0w8S8Nk0",
    opts: {
      role: ["area"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Indescribable Unease",
    url: "l6wMhDHeleE?si=whZJG5Prx_VnjJDh",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Iris Network",
    url: "vspjvtHmIG8?si=n1ERZNFAAoMn0QRb",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Alfeto Valley",
    url: "MlmbmTByvMc?si=fsMaXCTXp9-FQch_",
    opts: {
      role: ["area", "day"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Alfeto Valley/Night",
    url: "8hfp0I_V0nE?si=uZ_VCwB6ZF3q97Qz",
    opts: {
      role: ["area", "night"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Nearing the Enemy",
    url: "WXFfDEYTEqk?si=FpKTZdpuljv5gBC4",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Impending Crisis",
    url: "M2LPtrWzFno?si=_w5vE6dN9XpnMI6l",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Immediate Threat",
    url: "0GSnlDadGk4?si=jWoNW7tlBBhF8H3c",
    opts: {
      role: ["battle"],
      composers: ["ace"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "The Two Off-Seers",
    url: "LAML_XBrcU4?si=lAoecPTW1-vK_nuS",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Suffocating Reverberation",
    url: "fOI9sQo-Er4?si=bGC9cTyTHOxQkCN1",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Ouroboros Awakening",
    url: "z04XtSPtg_Q?si=pVylCf2MMHNZ4E4N",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Moebius Battle",
    url: "q8Y-37ybYiM?si=1rl1dgOeF0z6aCIH",
    opts: {
      role: ["battle"],
      composers: ["ace"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Against the World",
    url: "WtmFXry4TFQ?si=5jj-Szh9Z1CJXGt7",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "A Life Woven Together",
    url: "6Dpt2HyI1Xs?si=PFhNjfe0nwu6SlKB",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "A Life Sent On",
    url: "4nRIQ0sHxQg?si=iMpNP64-7uM2ZVqN",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Quiet Intrigue",
    url: "g_Fh4UIQrmw?si=DfzLD6Bs6gWLpeLP",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Hostile Colony (Dynamic)",
    url: "tKslFeRXsIc?si=tmK6Aiz-POqlRB1N",
    opts: {
      role: ["area"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Hostile Colony",
    url: "nh04YFkODOc?si=cNrmj_78hZLgOukc",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Everyday Life",
    url: "K4CtX4ULsg4?si=3rOXzaam2hqfJEn0",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "The Bereaved and Those Left Behind",
    url: "FlAC6rQWjvc?si=ePAZCq1zkdV7Kuua",
    opts: {
      role: [],
      composers: ["mitsuda", "noguchi"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Off-Seer - Noah",
    url: "U6__0eFx0xg?si=kVy5P35VbJLtHJXi",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Millick Meadows",
    url: "vC_xrv1z1zI?si=v86Vw6IZIPjfezgJ",
    opts: {
      role: ["area", "day"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Millick Meadows/Night",
    url: "wjkCS3Eghec?si=3AMr0xdLoRACefzJ",
    opts: {
      role: ["area", "night"],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "A Formidable Enemy",
    url: "qeTSQcSeWZ8?si=BlarEJm1bXjPAViD",
    opts: {
      role: ["battle"],
      composers: ["ace", "yoshimura"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Eagus Wilderness",
    url: "ClN64RPz5s0?si=NJypPt7-cIXj6GFm",
    opts: {
      role: ["area", "day"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Eagus Wilderness/Night",
    url: "1Cf0mf_nVlc?si=MfAMIwQVIdLJw0pw",
    opts: {
      role: ["area", "night"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Suspicion",
    url: "B2RPbPHDL9I?si=jTuGPkdJDwjiYDIk",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Sun-Dappled Glade",
    url: "D9JdyGZoMuY?si=-UL1fEBOnNVJK6lJ",
    opts: {
      role: [],
      composers: ["abounnasr", "mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Blade - Those Who Know Fear",
    url: "dL03-NYN4Tc?si=CL5KVSXDNXCFY7XQ",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Moebius",
    url: "RJUOHcxRLCs?si=w4lriOMDltjMdpQO",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Those Who Devour Life",
    url: "4wWL-fozJW0?si=4vXwi3gxKJ8J5Crl",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Remorse",
    url: "FP9I0oisz-M?si=r-tv_axEsD5X0o-l",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Keves Colony",
    url: "IXar4UwFio8?si=xAiKaAKy8w15elxV",
    opts: {
      role: ["area", "day"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Keves Colony/Night",
    url: "NLs5_oNh57U?si=mX8wK8hPlW-QZxjX",
    opts: {
      role: ["area", "night"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Encroaching Malice",
    url: "qX0cV4CJQBM?si=K3b2NDjEflv6Qhou",
    opts: {
      role: [],
      composers: ["abounnasr", "mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Ribbi Flats",
    url: "aHNoSevF4l8?si=sFmXCtZnh6g47_Xd",
    opts: {
      role: ["area", "day"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Ribbi Flats/Night",
    url: "AaH3hH0v3H0?si=nnSdlleT3vqL3S1b",
    opts: {
      role: ["area", "night"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "You Will Know Our Names - Finale",
    url: "x0Gf3J5ufsg?si=Q4PxCbaFPNb2xQu7",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Dannagh Desert",
    url: "-XHvQbfuoic?si=70XqY6Z6OORwHwX5",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Dannagh Desert/Night",
    url: "NDMeFgkaysI?si=ciMt0m0xxnmT38Wk",
    opts: {
      role: ["area", "night"],
      composers: ["ace"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Rae-Bel Tableland",
    url: "wpziirN0hG8?si=3gQ4V3YxVTivjv1R",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Rae-Bel Tableland/Night",
    url: "2UEtiSZ3gTg?si=9VzYGbrAc4K8gYRg",
    opts: {
      role: ["area", "night"],
      composers: ["ace", "kameoka"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Urayan Tunnels",
    url: "YYEtSgxtD6g?si=KgVnViO269ubzF8Y",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Ferronis",
    url: "U2e8vBFLaGY?si=yr7yc4Cx310ma48D",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Confronting Our Past",
    url: "PxwcJnq1awY?si=HNts0AZC-WQj0Qt4",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Chain Attack",
    url: "TYPSEjoOV9A?si=YBO-knMN7CAfcHXk",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Off-Seer - Mio",
    url: "oUVgiw4k1aI?si=og7CsUlyZ23VSUWr",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Great Cotte Falls",
    url: "5UzFD1NqSJA?si=wLky8Dn3fy5-OmLm",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Great Cotte Falls/Night",
    url: "pnwvFJk7460?si=CubYz47RwPCxT8mc",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Mysterious Land",
    url: "UhLf42CglPE?si=Y8YREykmF8zkuMe5",
    opts: {
      role: ["area"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Maktha Wildwood",
    url: "vCAgmTFvtNc?si=QJ2lV_Kjyy-04iCq",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Maktha Wildwood/Night",
    url: "V3IEXMNHQNM?si=DBVkQf04eDnZV6_K",
    opts: {
      role: ["area", "night"],
      composers: ["ace"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Light of the Moon - Hope",
    url: "UjyWfB7aICc?si=MywSe1J8IT8T7SIr",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Agnus Colony",
    url: "148rt6PHKQ8?si=SXBuiNaNcM5HzCQK",
    opts: {
      role: ["area", "day"],
      composers: ["ace", "kameoka"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Agnus Colony/Night",
    url: "OhSU5MKJSng?si=KUC5G2GW1Elu7OlB",
    opts: {
      role: ["area", "night"],
      composers: ["ace", "kameoka"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Agnus Battle",
    url: "iStaHHjD9TQ?si=AN0BwBsmfj3pV0MQ",
    opts: {
      role: ["battle"],
      composers: ["ace"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "A Life Become Distant",
    url: "qEDJTSYjMJc?si=zfdgbctfIXXUz3ly",
    opts: {
      role: [],
      composers: ["abounnasr", "mitsuda"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "In the Morning Mist",
    url: "n-vVdEk7-DE?si=llwYilQ4W71FZjMK",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Life's Fading Flame - Holding These Thoughts",
    url: "Ucm2DlM54no?si=7wFAlmQTjeUPw-KM",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Carrying the Weight of Life",
    url: "oI6m0ZhoKSM?si=M8WlBKz15njWwxxM",
    opts: {
      role: [],
      composers: ["hiramatsu", "mitsuda"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Rest Spot",
    url: "fvQVr5nxIzo?si=Dm4JLMW37UkGaB2-",
    opts: {
      role: ["night"],
      composers: ["ace", "kameoka"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Syra Hovering Reefs",
    url: "t0rrwyn8eS8?si=DuWEsxqCYyoSIYAx",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Syra Hovering Reefs/Night",
    url: "llYonIbXXfo?si=RzVdwAPGQoi-bX6c",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Keves Castle",
    url: "H-Ic6jgseAo?si=VzhuHUmrttWmqQW8",
    opts: {
      role: ["area"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Keves Castle (Battle)",
    url: "x591yyXj45U?si=jsY6ofgJ7qLZAOpm",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "The False Queens",
    url: "Nbo9Llpr3j0?si=zlM9eNbewmg-75ZB",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Great Sword's Base",
    url: "LK35tLeE0wE?si=6Mt5SAF6oGldPyf4",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Great Sword's Base/Night",
    url: "roCPWdWwLaw?si=Jn7prHOelvQRCjRq",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "City",
    url: "l3WgofBJIgU?si=KWq3NuP2v88Pgiub",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota", "mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "City/Night",
    url: "y9zgrV6Dvw0?si=a394arwEfCtu7cUM",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota", "mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Sailing the Seas",
    url: "bGrEv8KVU4A?si=_VvJ-Q5-ca6I5TpA",
    opts: {
      role: ["are"],
      composers: ["ace"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Erythia Sea",
    url: "mhrLXWcTRB0?si=_fDPpVghOFwZRxim",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Erythia Sea/Night",
    url: "M-rBJdqrz8M?si=LOWmgsDw-Cbqixv3",
    opts: {
      role: ["area", "night"],
      composers: ["ace"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Battle on the Seas",
    url: "hVPU43DZA9M?si=rVjvDb3zTj6VuUnX",
    opts: {
      role: ["battle"],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Malevolent Hollow",
    url: "5rKJWiQ0HCs?si=yAhCLh_Do1R01Iys",
    opts: {
      role: ["area"],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Li Garte Prison Camp",
    url: "AbRwYDx10I4?si=OTZd-TDPZalLdWRu",
    opts: {
      role: ["area"],
      composers: ["ace", "kameoka"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Moebius Battle/M",
    url: "c4jm7bGsC8k?si=LGbOMOh2B7Gg1JgU",
    opts: {
      role: ["battle"],
      composers: ["ace"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "That To Which The Defeated Cling",
    url: "3DCrpjbOK6M?si=C6c51-mSZX_5CvtF",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "A Step Away",
    url: "-TlbGC7nPmA?si=FMqQHsldFvtjy36t",
    opts: {
      role: ["vocal"],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "A Life Overflowing",
    url: "bxz3XCnQ-Qk?si=nKJFiGdudwp_BBfz",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Homecoming",
    url: "zw89vuX2JeU?si=Yxii1MSF3WgweH8r",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Words That Never Reached You",
    url: "faUb-i-a9Js?si=7OZJo9A-vWuwnIkH",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Agnus Castle",
    url: "dso5vniU93g?si=pPsM4_EZxvTM4kCu",
    opts: {
      role: ["area", "day"],
      composers: ["ace"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Agnus Castle/Night",
    url: "E5KSvAtL63o?si=nC3AmmVhUL9JNm1n",
    opts: {
      role: ["area", "night"],
      composers: ["ace", "komeoka", "yagi"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Captocorn Peak",
    url: "GGZx35QGRm4?si=NNBP0pkhyP7rzQYw",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Captocorn Peak/Night",
    url: "XNuot_djx9g?si=qBvcjcozzkNRL0jH",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Off-Seer - Miyabi",
    url: "AE_TDMzf8jU?si=we9gh4BqXEqZjm_H",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Feelings Risen to the Sky",
    url: "7NzxUUEEyIw?si=IP2gUL_tfe2hu6aZ",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Cloudkeep",
    url: "cctNKkI0gGM?si=7KIJESQ6CWaQm91f",
    opts: {
      role: ["area"],
      composers: ["ace", "kameoka"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Converging Emotions",
    url: "YC4_qx2kqJU?si=QXEpspP3JWpkfUYf",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Saffronia Village",
    url: "knyoz1_CJKI?si=pLfoei34kY-0o_oq",
    opts: {
      role: ["area"],
      composers: ["ace", "kameoka"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Off-Seer - Crys",
    url: "-EyBcw_bDYQ?si=IS-GX4ENZ_dnYs2c",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Feelings Upon This Melody",
    url: "Zyn3KgAbaWc?si=zJF11kYxDy6gVQuB",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Fort O'Virbus",
    url: "2cIbF4tGz5s?si=TOIx2_2-pl6rTG6z",
    opts: {
      role: ["area", "day"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Fort O'Virbus/Night",
    url: "Oo0SmZphrR4?si=pm8sEz2eWzSFL0R4",
    opts: {
      role: ["area", "night"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Elaice Highway",
    url: "D4VfxMddBok?si=9rgMPHi3eoVZIOKB",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Elaice Highway/Night",
    url: "TiRHe-PbS9M?si=O-B_VzOCeVe7fTHU",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "The Great Sea Stirs",
    url: "8dWEjRLzn2c?si=RvnEu8qlWmcZqlZB",
    opts: {
      role: ["area"],
      composers: ["ace", "kameoka"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Ultimate Enemy",
    url: "p_ayrHSwXyQ?si=59qixMIKWbEe3nQ1",
    opts: {
      role: ["battle"],
      composers: ["kunigo", "fujii"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Brilliant Wings",
    url: "SrfPn2hMuAk?si=Z6LAfRm7juxz70DW",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Kaleidoscopic Core",
    url: "WbZ9rwnLoRk?si=mX30wCzYAUK3dkfn",
    opts: {
      role: ["battle"],
      composers: ["ace", "yoshimura"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Origin Ascending",
    url: "59lhbK81ojs?si=sE9XkKqhyJxVtyS8",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Origin",
    url: "TZkx4Tx2hig?si=6ZZJ2SZLbl6XOD4I",
    opts: {
      role: ["area"],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Origin Battle",
    url: "w7SCDY2hrhw?si=Y1gdt7_ZrDZOS6V-",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Noah and N",
    url: "bT10fW6WlMk?si=yCIXtuYjM3DYnfaF",
    opts: {
      role: ["battle"],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Grand Theater of Life",
    url: "p3Y11vkxF9c?si=nhcovXeljs9rHLo_",
    opts: {
      role: [],
      composers: ["kiyota", "mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Z - Harbinger of the End",
    url: "nLVS3e0MoBg?si=8Ts3vpK9EMOuuBLg",
    opts: {
      role: [],
      composers: ["kiyota", "mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "The Two Queens of Aionios",
    url: "bMoU0t-KLGQ?si=VwWqsQNoXEzwe1M5",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Congregating Lives",
    url: "DqZTH5zeQPo?si=C51Ra6jcf81Er3Dv",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Showdown with Z",
    url: "rYY14hYFq0I?si=H3oPxAlv6KRpkav_",
    opts: {
      role: ["battle", "boss"],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "How the Future Endures",
    url: "3bQHm0-Zyjw?si=mNAlLpQLzwxeAisv",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Something's Beginning to Move",
    url: "eHyYSHPCC2M?si=jOtHff-GWrAuZGOt",
    opts: {
      role: [],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Where We Belong",
    url: "gyhx91rLaJI?si=iiEgR2O0Tn98NxUI",
    opts: {
      role: ["vocal"],
      composers: ["mitsuda"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Melia - Ancient Memories",
    url: "snlkIL6UtH8?si=_4fQ0epBsYz0IfzC",
    opts: {
      role: [],
      composers: ["kiyota"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Nia - Towards the Heavens",
    url: "ANSgqLkRgDA?si=kk2A4Vk2rqe_-i87",
    opts: {
      role: [],
      composers: ["ace", "kameoka", "yagi"],
      soundtrack: ["XC3"],
    }
  },
  {
    name: "Hope for the Future",
    url: "CyD3a74NnYI?si=KhIwKhBpuGWaPkhI",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["XC3", "FR"],
    }
  },
  {
    name: "Noah and Mio - Our Melody",
    url: "4wNWhlQ6EbI?si=jgmUf_jryIzgEUHu",
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
    opts: {
      role: ["title"],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["FR"],
    }
  },
  {
    name: "New Battle!!!",
    url: "RVxRnELD0Uw?si=meJIN7M7o7MuHdMb",
    opts: {
      role: ["battle"],
      composers: ["hiramatsu"],
      soundtrack: ["FR"],
    }
  },
  {
    name: "Cent-Omnia Region",
    url: "PAgGdySmc58?si=l_qTJcqbUhEyybGc",
    opts: {
      role: ["area", "day"],
      composers: ["ace", "yoshimura"],
      soundtrack: ["FR"],
    }
  },
  {
    name: "Cent-Omnia Region/Night",
    url: "IF3mSt3HIZs?si=1XdjDbd-6OBf8y_8",
    opts: {
      role: ["area", "night"],
      composers: ["ace", "yoshimura"],
      soundtrack: ["FR"],
    }
  },
  {
    name: "Yesterdale - Colony 9",
    url: "a88Q7W4Nmos?si=gLMPLVnzZDzBWx1p",
    opts: {
      role: ["area", "day"],
      composers: ["kiyota"],
      soundtrack: ["FR"],
    }
  },
  {
    name: "Yesterdale - Colony 9/Night",
    url: "_hjTMdxZj7Q?si=mdRY93vW3-eEor3B",
    opts: {
      role: ["area", "night"],
      composers: ["kiyota"],
      soundtrack: ["FR"],
    }
  },
  {
    name: "Black Mountains - Valak Mountain",
    url: "DgkXCYl3_Bk?si=bZtFY3LyeqdQ4Kbw",
    opts: {
      role: ["area", "day"],
      composers: ["abounnasr"],
      soundtrack: ["FR"],
    }
  },
  {
    name: "Black Mountains - Valak Mountain/Night",
    url: "8bcsozmg_Y4?si=49XqHR8dRfeeNhiw",
    opts: {
      role: ["area", "night"],
      composers: ["abounnasr"],
      soundtrack: ["FR"],
    }
  },
  {
    name: "Black Mountains - Prison Island",
    url: "H3zs3DB6hmM?si=15anZ5XXxbZ9tO_w",
    opts: {
      role: ["area", "day"],
      composers: ["abounnasr"],
      soundtrack: ["FR"],
    }
  },
  {
    name: "Black Mountains - Prison Island/Night",
    url: "nAeoxJoXm1w?si=webgMe09jv8F7Atp",
    opts: {
      role: ["area", "night"],
      composers: ["abounnasr"],
      soundtrack: ["FR"],
    }
  },
  {
    name: "Redeem the Future",
    url: "nBWSP7-Dhqg?si=LClBz-aX6bdIeVG2",
    opts: {
      role: ["battle", "boss"],
      composers: ["kiyota"],
      soundtrack: ["FR"],
    }
  },
  {
    name: "Redeem the Future - Finale",
    url: "vHlt9dVAwvs?si=cc4FFHMUS3kLTNni",
    opts: {
      role: ["battle", "boss"],
      composers: ["kiyota"],
      soundtrack: ["FR"],
    }
  },
  {
    name: "Two Worlds and Two Hearts",
    url: "Xoo0K8gOcjM?si=QtyIkgivtumN-3pa",
    opts: {
      role: [],
      composers: ["mitsuda", "abounnasr"],
      soundtrack: ["FR"],
    }
  },
  {
    name: "Future Awaits",
    url: "wSW0TimoM2c?si=MZrYa1IFeFMcrSjq",
    opts: {
      role: ["vocal"],
      composers: ["mitsuda"],
      soundtrack: ["FR"],
    }
  },
]
