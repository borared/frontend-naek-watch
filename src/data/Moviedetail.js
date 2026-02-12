const sampleMovie = {
  id: 1,
  title: "Midway",
  year: "2024",
  rating: "8.2",
  duration: "2h 15m",
  poster: "", // optional
  backdrop: "https://res.cloudinary.com/dm05x6lbk/image/upload/v1770911910/image_zzxhdz.jpg",
  trailerUrl: "https://www.youtube.com/watch?v=l9laReRAYFk",
  synopsis: "Epic WWII action film following the Battle of Midway...",
  cast: [
    { id: 1, name: "Woody Harrelson", image: "https://res.cloudinary.com/dm05x6lbk/image/upload/v1770916987/image_qi9rl2.jpg" },
    { id: 2, name: "Mandy Moore", image: "https://res.cloudinary.com/dm05x6lbk/image/upload/v1770916998/image_xuljxb.jpg" },
    { id: 3, name: "Patrick Wilson", image: "https://res.cloudinary.com/dm05x6lbk/image/upload/v1770916968/image_cqdx1f.jpg" },
    { id: 4, name: "Ed Skrein", image: "https://res.cloudinary.com/dm05x6lbk/image/upload/v1770916955/image_aqrjvn.jpg" },
  ],
  related: [
    {
      id: 101,
      title: "The Creator",
      image: "https://res.cloudinary.com/dm05x6lbk/image/upload/v1770911795/image_cxf5of.jpg",
      trailerUrl: "https://www.youtube.com/watch?v=VIDEO_ID1",
      year: "2023",
      rating: "7.8",
      duration: "2h 10m",
      backdrop: "https://res.cloudinary.com/dm05x6lbk/image/upload/v1770911800/image_creator_backdrop.jpg",
      poster: "https://res.cloudinary.com/dm05x6lbk/image/upload/v1770911795/image_cxf5of.jpg",
      synopsis: "A sci-fi thriller about AI in the near future...",
      cast: [
        { id: 1, name: "Actor A", image: "" },
        { id: 2, name: "Actor B", image: "" },
      ],
    },
    {
      id: 102,
      title: "Avenger: Infinity War",
      image: "https://res.cloudinary.com/dm05x6lbk/image/upload/v1770911765/image_d9grvc.png",
      trailerUrl: "https://www.youtube.com/watch?v=VIDEO_ID2",
      year: "2018",
      rating: "8.5",
      duration: "2h 29m",
      backdrop: "https://res.cloudinary.com/dm05x6lbk/image/upload/v1770911767/image_avengers_backdrop.jpg",
      poster: "https://res.cloudinary.com/dm05x6lbk/image/upload/v1770911765/image_d9grvc.png",
      synopsis: "The Avengers assemble to stop Thanos from collecting the Infinity Stones.",
      cast: [
        { id: 1, name: "Robert Downey Jr.", image: "" },
        { id: 2, name: "Chris Evans", image: "" },
      ],
    },
    {
        id: 103,
        title: "Dune",
        image: "https://res.cloudinary.com/dm05x6lbk/image/upload/v1770911862/image_muln23.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=VIDEO_ID3",
        year: "2021",
        rating: "8.1",
        duration: "2h 35m",
        backdrop: "",
        poster: "https://res.cloudinary.com/dm05x6lbk/image/upload/v1770911862/image_muln23.jpg",
        synopsis: "A noble family becomes embroiled in a war for control over the desert planet Arrakis.",
        cast: [
          { id: 1, name: "Timothée Chalamet", image: "" },
          { id: 2, name: "Zendaya", image: "" },
        ],
    },
    {
        id: 104,
        title: "The Alien",
        image: "https://res.cloudinary.com/dm05x6lbk/image/upload/v1770911831/image_gndxq7.png",
        trailerUrl: "https://www.youtube.com/watch?v=VIDEO_ID4",
        year: "2022",
        rating: "8.4",
        duration: "2h 11m",
        backdrop: "",
        poster: "https://res.cloudinary.com/dm05x6lbk/image/upload/v1770911831/image_gndxq7.png",
        synopsis: "Captain Pete 'Maverick' Mitchell returns to train a new generation of U.S. Navy fighter pilots.",
        cast: [
          { id: 1, name: "Tom Cruise", image: "" },
          { id: 2, name: "Jennifer Connelly", image: "" },
          { id: 3, name: "Miles Teller", image: "" },
        ],
    },
    {
        id: 105,
        title: "Star Wars: Rogue One",
        image: "https://res.cloudinary.com/dm05x6lbk/image/upload/v1770911837/image_dqop7r.png",
        trailerUrl: "https://www.youtube.com/watch?v=VIDEO_ID5",
        year: "2023",
        rating: "7.9",
        duration: "2h 49m",
        backdrop: "",
        poster: "",
        synopsis: "The Rebellion makes a risky move to steal the plans for the Death Star, setting up the epic saga to follow.",
        cast: [
          { id: 1, name: "Felicity Jones", image: "" },
          { id: 2, name: "Diego Luna", image: "" },
        ],
    }

    
  ],
};

export default sampleMovie;
